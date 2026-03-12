import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { rateLimit } from "express-rate-limit";

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Helper to get client IP
  const getClientIp = (req: express.Request) => {
    const forwarded = req.headers["x-forwarded-for"];
    if (forwarded) {
      return typeof forwarded === "string" ? forwarded.split(",")[0] : forwarded[0];
    }
    return req.socket.remoteAddress;
  };

  // Rate Limiting Middleware
  const limiter = rateLimit({
    windowMs: 60 * 1000, // 60 seconds
    max: 10, // Limit each IP to 10 requests per windowMs
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
    keyGenerator: (req) => {
      return getClientIp(req) || "unknown";
    },
    handler: (req, res, next, options) => {
      const ip = getClientIp(req);
      console.warn(`[RATE LIMIT] Excessive requests from IP: ${ip} at ${new Date().toISOString()}`);
      res.status(options.statusCode).send(options.message);
    },
    message: "Too many requests from this IP, please try again after 60 seconds.",
  });

  // Apply the rate limiter to all requests
  app.use(limiter);

  // API routes go here
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", ip: getClientIp(req) });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
