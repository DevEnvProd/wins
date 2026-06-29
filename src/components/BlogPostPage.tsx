import { useEffect, ReactNode } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Clock, ShieldCheck, Tag, ExternalLink, ThumbsUp, Calendar, ArrowRight } from 'lucide-react';
import { blogPosts } from '../data/blogData';
import { Footer } from './Footer';

export const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const currentPost = blogPosts.find((post) => post.slug === slug);

  useEffect(() => {
    if (currentPost) {
      document.title = `${currentPost.title} - Winbox Official Guide`;
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [currentPost]);

  if (!currentPost) {
    return (
      <>
        <div className="min-h-screen flex items-center justify-center bg-slate-50 text-center px-4 py-20">
          <div className="max-w-md bg-white rounded-3xl p-10 border border-slate-100 shadow-xl space-y-6">
            <h2 className="text-2xl font-black text-slate-800 uppercase tracking-tight">Guide Not Found</h2>
            <p className="text-slate-500 text-xs font-semibold leading-relaxed">
              The requested blog article does not exist or has been permanently redirected to prevent keyword duplication.
            </p>
            <button
              onClick={() => navigate('/blog')}
              className="bg-sky-500 text-white font-black text-xs uppercase tracking-widest px-8 py-4 rounded-xl hover:bg-sky-600 transition-colors"
            >
              Go to guide hub
            </button>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  // Find related posts (exclude current)
  const relatedPosts = blogPosts
    .filter((post) => post.slug !== currentPost.slug)
    .slice(0, 3);

  return (
    <>
      <div className="min-h-screen bg-slate-50/50 pt-10 pb-20">
        <div className="max-w-6xl mx-auto px-4">
          
          {/* Breadcrumbs */}
          <div className="mb-8 text-xs text-slate-400 uppercase tracking-widest font-black flex items-center gap-2">
            <Link to="/" className="hover:text-sky-500 transition-colors">Winbox</Link>
            <span>&gt;</span>
            <Link to="/blog" className="hover:text-sky-500 transition-colors">Guides</Link>
            <span>&gt;</span>
            <span className="text-slate-600 truncate max-w-[200px]">{currentPost.category}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Main Content Area */}
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-100 shadow-xl shadow-slate-100/30 space-y-8">
                
                {/* Meta Badges */}
                <div className="flex flex-wrap items-center gap-4 text-[10px] font-black uppercase tracking-wider">
                  <span className="text-sky-600 bg-sky-50 px-3 py-1.5 rounded-lg border border-sky-100">{currentPost.category}</span>
                  <div className="flex items-center gap-1.5 text-slate-400">
                    <Calendar size={12} />
                    {currentPost.date}
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-400">
                    <Clock size={12} />
                    {currentPost.readTime}
                  </div>
                </div>

                {/* H1 Title */}
                <h1 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight uppercase tracking-tight">
                  {currentPost.title}
                </h1>

                {/* Focus Keyword Indicators for SEO validation */}
                <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-[10px] font-black uppercase text-slate-400">
                      <Tag size={12} className="text-sky-500" />
                      Primary Keyword Focus
                    </div>
                    <p className="text-xs font-extrabold text-slate-800 uppercase tracking-tight">{currentPost.primaryKeyword}</p>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-[10px] font-black uppercase text-slate-400">
                      <ExternalLink size={12} className="text-emerald-500" />
                      Silo Supporting Page
                    </div>
                    <Link to={currentPost.targetSupportingPage} className="text-xs font-black text-sky-600 hover:underline">
                      {currentPost.targetSupportingPage} &rarr;
                    </Link>
                  </div>
                </div>

                {/* Article Prose Body */}
                <article className="text-slate-600 text-sm md:text-base leading-relaxed space-y-6 font-medium">
                  {currentPost.content.map((paragraph, index) => {
                    // Check if paragraph contains references to replace with actual Link tags
                    // We can map common keywords to Route links dynamically to perform highly advanced in-site cross links!
                    return (
                      <p key={index}>
                        {highlightAndLink(paragraph)}
                      </p>
                    );
                  })}
                </article>

                {/* Built-in high performance linking silo list directly listed inside the post area */}
                <div className="border-t border-slate-100 pt-8 mt-10 space-y-4">
                  <h4 className="text-xs font-black uppercase tracking-wider text-slate-400">Guide Recommended Navigation links:</h4>
                  <div className="flex flex-wrap gap-2">
                    {currentPost.internalLinks.map((link, lIdx) => (
                      <Link 
                        key={lIdx} 
                        to={link.path} 
                        className="bg-sky-50 hover:bg-sky-500 text-sky-700 hover:text-white border border-sky-100 text-[10px] font-bold uppercase tracking-widest px-4 py-2.5 rounded-xl transition-all"
                      >
                        {link.text}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Social Share / Trust Footer */}
                <div className="flex flex-col sm:flex-row items-center gap-6 justify-between bg-sky-50/50 p-6 rounded-2xl border border-sky-100/50 mt-12">
                  <div className="flex gap-3 items-center text-left text-sky-950">
                    <ShieldCheck size={24} className="text-sky-600" />
                    <div>
                      <p className="text-xs font-black uppercase tracking-wider">Official Winbox Informational Resource</p>
                      <p className="text-[10px] text-slate-500 font-semibold">Vetted for accurate licensing and safety protocols in 2026.</p>
                    </div>
                  </div>
                  <button className="flex items-center gap-1.5 text-xs font-black text-sky-600 hover:text-sky-700 uppercase tracking-widest bg-white shadow-sm border border-slate-100 px-4 py-2 rounded-xl shrink-0">
                    <ThumbsUp size={12} />
                    Helpful
                  </button>
                </div>

              </div>
            </div>

            {/* Sidebar Columns */}
            <div className="space-y-8">
              {/* Converters Widget */}
              <div className="bg-slate-900 text-white rounded-3xl p-8 border border-white/5 shadow-xl space-y-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full blur-[50px]"></div>
                <div className="space-y-2 relative z-10">
                  <h3 className="text-xl font-black uppercase tracking-tight text-white">Join Winbox today</h3>
                  <p className="text-xs text-slate-400 font-semibold leading-relaxed">
                    Create your login portfolio cleanly to browse live dealer streams and hot slot libraries instantly.
                  </p>
                </div>
                <div className="space-y-3 relative z-10 text-[10px] uppercase tracking-widest font-black">
                  <Link to="/register" className="w-full bg-sky-500 hover:bg-sky-600 text-center py-4 rounded-xl flex items-center justify-center gap-2 transition-all">
                    Register Free
                  </Link>
                  <Link to="/login" className="w-full bg-white/10 hover:bg-white text-white hover:text-slate-950 text-center py-4 rounded-xl flex items-center justify-center gap-2 border border-white/10 transition-all">
                    Log in Securely
                  </Link>
                  <Link to="/download" className="w-full bg-white/5 hover:bg-white/15 text-center py-4 rounded-xl flex items-center justify-center gap-2 border border-white/5 transition-all text-xs">
                    Download APK
                  </Link>
                </div>
              </div>

              {/* Related guides */}
              <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl space-y-6">
                <h3 className="text-xs font-black uppercase tracking-widest text-slate-400">Other Official Guides</h3>
                <div className="space-y-4">
                  {relatedPosts.map((post) => (
                    <Link 
                      key={post.slug} 
                      to={`/blog/${post.slug}`}
                      className="block group space-y-2 pb-4 border-b border-slate-50 last:border-0 last:pb-0"
                    >
                      <span className="text-[10px] font-black uppercase text-sky-600 block">{post.category}</span>
                      <h4 className="text-xs font-black text-slate-800 leading-snug group-hover:text-sky-500 transition-colors uppercase tracking-tight">
                        {post.title}
                      </h4>
                      <p className="text-[10px] text-slate-500 font-medium line-clamp-2 leading-relaxed">
                        {post.excerpt}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </>
  );
};

// Helper function to dynamically add React Router Link inside specific mentions for elite silo link structure!
function highlightAndLink(text: string): ReactNode {
  const loginRegex = /Winbox login|Winbox login system|login credentials/gi;
  const registerRegex = /Winbox Register|Winbox registration|Winbox credentials/gi;
  const downloadRegex = /Winbox App|Winbox Download|Android APK|compatible iOS app|winbox iOS/gi;
  const faqRegex = /frequently asked questions|FAQ system|FAQ support|FAQ page/gi;
  const genericRegex = /Winbox/gi;

  // Let's perform standard manual string replacement for simplicity but keeping it robust
  // Since we also want to display standard text, let's look for exact phrase occurrences
  let elements: ReactNode[] = [text];

  // We can do a simpler fallback linking for standard brand mentions such as Winbox back to homepage
  // To avoid circular loops or complex regex matches, let's simply identify clear key phrases
  // and replace them with Link tags where appropriate in a lightweight manner.
  if (text.includes("Winbox Download")) {
    const parts = text.split("Winbox Download");
    return (
      <span>
        {parts[0]}
        <Link to="/download" className="text-sky-600 font-bold hover:underline">Winbox Download</Link>
        {parts[1]}
      </span>
    );
  } else if (text.includes("Winbox Register")) {
    const parts = text.split("Winbox Register");
    return (
      <span>
        {parts[0]}
        <Link to="/register" className="text-sky-600 font-bold hover:underline">Winbox Register</Link>
        {parts[1]}
      </span>
    );
  } else if (text.includes("Winbox Login")) {
    const parts = text.split("Winbox Login");
    return (
      <span>
        {parts[0]}
        <Link to="/login" className="text-sky-600 font-bold hover:underline">Winbox Login</Link>
        {parts[1]}
      </span>
    );
  } else if (text.includes("FAQ system")) {
    const parts = text.split("FAQ system");
    return (
      <span>
        {parts[0]}
        <Link to="/faq" className="text-sky-600 font-bold hover:underline">FAQ System</Link>
        {parts[1]}
      </span>
    );
  } else if (text.includes("Winbox")) {
    const parts = text.split("Winbox");
    // Only link the first occurrence to avoid dilution
    return (
      <span>
        {parts[0]}
        <Link to="/" className="text-sky-600 font-extrabold hover:underline">Winbox</Link>
        {parts.slice(1).join("Winbox")}
      </span>
    );
  }

  return text;
}
