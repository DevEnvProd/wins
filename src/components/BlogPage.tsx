import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { BookOpen, Search, ArrowRight, Clock, Tag, ExternalLink, RefreshCw } from 'lucide-react';
import { blogPosts, BlogPost } from '../data/blogData';
import { Footer } from './Footer';

export const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {
    document.title = "Official Winbox Guide Hub - Ultimate SEO Content Cluster";
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const categories = ['All', ...Array.from(new Set(blogPosts.map((post) => post.category)))];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.primaryKeyword.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <div className="min-h-screen bg-slate-50/50 pt-10 pb-20">
        <div className="max-w-7xl mx-auto px-4">
          
          {/* Breadcrumb Navigation */}
          <div className="mb-8 text-xs text-slate-400 uppercase tracking-widest font-black flex items-center gap-2">
            <Link to="/" className="hover:text-sky-500 transition-colors">Winbox</Link>
            <span>&gt;</span>
            <span className="text-slate-600">Blog Module</span>
          </div>

          {/* Epic Header Area */}
          <div className="text-center mb-16 space-y-6">
            <div className="inline-flex items-center gap-2 bg-sky-50 text-sky-600 px-4 py-2 rounded-full border border-sky-100 text-xs font-black uppercase tracking-widest">
              <BookOpen size={14} />
              Verified Brand Resources
            </div>
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-gold-outline max-w-4xl mx-auto leading-none">
              Winbox Official Guide Hub
            </h1>
            <p className="text-slate-500 font-bold max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
              Explore our structured topical content cluster. Master setup steps, account security protocols, 
              game directories, and registration tutorials to amplify your authentic <Link to="/" className="text-sky-600 hover:underline font-extrabold">Winbox</Link> experience.
            </p>
          </div>

          {/* Search & Category Filter Section */}
          <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-xl shadow-slate-100/40 mb-12 flex flex-col md:flex-row gap-6 justify-between items-center">
            {/* Search inputs */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input
                type="text"
                placeholder="Search topics or keywords (e.g., winbox login)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-100 rounded-2xl text-xs font-bold text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all"
              />
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap gap-2 w-full md:w-auto justify-start md:justify-end">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-wider transition-all ${
                    activeCategory === cat
                      ? 'bg-sky-500 text-white shadow-md shadow-sky-100'
                      : 'bg-slate-50 text-slate-500 hover:bg-slate-100'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Content Cluster Grid */}
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 animate-fade-in">
              {filteredPosts.map((post) => (
                <div 
                  key={post.slug}
                  className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-lg shadow-slate-100/30 flex flex-col justify-between hover:shadow-2xl hover:shadow-sky-100/20 transition-all hover:-translate-y-1 duration-300"
                >
                  <div className="p-8 space-y-6">
                    {/* Header meta badge */}
                    <div className="flex items-center justify-between text-[10px] font-black uppercase tracking-wider">
                      <span className="text-sky-600 bg-sky-50 px-3 py-1.5 rounded-lg border border-sky-100">{post.category}</span>
                      <div className="flex items-center gap-1.5 text-slate-400">
                        <Clock size={12} />
                        {post.readTime}
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h3 className="text-lg font-black text-slate-900 leading-snug uppercase tracking-tight group-hover:text-sky-500">
                        <Link to={`/blog/${post.slug}`} className="hover:text-sky-500 transition-colors">
                          {post.title}
                        </Link>
                      </h3>
                      <p className="text-xs text-slate-500 leading-relaxed font-medium line-clamp-3">
                        {post.excerpt}
                      </p>
                    </div>

                    {/* Direct SEO Metrics indicators for search transparency */}
                    <div className="pt-4 border-t border-slate-50 space-y-2">
                      <div className="flex items-center gap-2 text-[10px] uppercase font-bold text-slate-400">
                        <Tag size={10} className="text-sky-500 shrink-0" />
                        <span>Focus Keyword:</span>
                        <strong className="text-slate-700">{post.primaryKeyword}</strong>
                      </div>
                      <div className="flex items-center gap-2 text-[10px] uppercase font-bold text-slate-400">
                        <ExternalLink size={10} className="text-emerald-500 shrink-0" />
                        <span>Silo Target:</span>
                        <span className="bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded text-[9px] font-black">{post.targetSupportingPage}</span>
                      </div>
                    </div>
                  </div>

                  {/* Read More link anchor */}
                  <div className="p-8 pt-0">
                    <Link
                      to={`/blog/${post.slug}`}
                      className="w-full bg-slate-50 hover:bg-sky-500 text-slate-700 hover:text-white font-black uppercase tracking-widest text-[10px] py-3.5 rounded-2xl flex items-center justify-center gap-2 transition-all transition-colors duration-200"
                    >
                      Read full guide
                      <ArrowRight size={12} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-3xl p-12 text-center border border-slate-100 shadow-xl max-w-lg mx-auto mb-20 space-y-4">
              <RefreshCw className="mx-auto text-sky-400 animate-spin-slow" size={40} />
              <h3 className="text-lg font-black text-slate-850 uppercase tracking-tight">No Matching Guides</h3>
              <p className="text-xs text-slate-500 leading-relaxed font-semibold">
                No articles matches your query. Please broaden your scope or visit our basic conversion modules directly below.
              </p>
              <button 
                onClick={() => { setSearchTerm(''); setActiveCategory('All'); }}
                className="bg-sky-500 text-white font-black text-[10px] uppercase tracking-widest px-6 py-3 rounded-xl hover:bg-sky-600 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}

          {/* Bottom Conversion Silo Block */}
          <div className="bg-slate-900 rounded-[2.5rem] p-10 md:p-16 relative overflow-hidden text-center text-white space-y-8 shadow-2xl">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            <div className="space-y-3 relative z-10">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-gold-outline leading-tight">
                Connect Directly to Winbox
              </h2>
              <p className="text-slate-400 text-xs md:text-sm font-bold max-w-xl mx-auto uppercase tracking-wide">
                Avoid insecure loops and phished mirrors. Take advantage of our fully verified portals.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto relative z-10 text-[10px] font-black uppercase tracking-widest">
              <Link to="/login" className="bg-white/10 hover:bg-white text-white hover:text-slate-900 border border-white/10 rounded-2xl py-4 transition-all">
                Winbox Login
              </Link>
              <Link to="/register" className="bg-sky-500 hover:bg-sky-600 text-white rounded-2xl py-4 transition-all shadow-lg shadow-sky-500/20">
                Winbox Register
              </Link>
              <Link to="/download" className="bg-white/10 hover:bg-white text-white hover:text-slate-900 border border-white/10 rounded-2xl py-4 transition-all">
                Winbox Download
              </Link>
              <Link to="/faq" className="bg-white/10 hover:bg-white text-white hover:text-slate-900 border border-white/10 rounded-2xl py-4 transition-all">
                Faq Support
              </Link>
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </>
  );
};
