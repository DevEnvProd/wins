import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { rateLimit } from "express-rate-limit";

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Trust the first proxy (Cloud Run/Nginx)
  app.set("trust proxy", 1);

  // Helper to get client IP
  const getClientIp = (req: express.Request) => {
    const forwarded = req.headers["x-forwarded-for"];
    if (forwarded) {
      const ip = typeof forwarded === "string" ? forwarded.split(",")[0].trim() : forwarded[0];
      return ip;
    }
    return req.socket.remoteAddress;
  };

  // Log every request for debugging
  app.use((req, res, next) => {
    const ip = getClientIp(req);
    console.log(`[REQUEST] ${req.method} ${req.url} from IP: ${ip}`);
    next();
  });

  // Rate Limiting Middleware
  const limiter = rateLimit({
    windowMs: 60 * 1000, // 60 seconds
    max: 10, // Limit each IP to 10 requests per windowMs
    standardHeaders: true,
    legacyHeaders: false,
    keyGenerator: (req) => {
      const ip = getClientIp(req) || "unknown";
      return ip;
    },
    handler: (req, res, next, options) => {
      const ip = getClientIp(req);
      console.warn(`[BLOCK] Rate limit exceeded for IP: ${ip} at ${new Date().toISOString()}`);
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
