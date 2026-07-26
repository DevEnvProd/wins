import { useParams, Navigate } from 'react-router-dom';
import { pagesData } from '../../data/pages';
import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ContentPageProps {
  pageSlug?: string;
}

export const ContentPage = ({ pageSlug }: ContentPageProps) => {
  const params = useParams<{ slug: string }>();
  const slug = pageSlug || params.slug;
  
  if (!slug || !pagesData[slug]) {
    return <Navigate to="/" replace />;
  }

  const page = pagesData[slug];

  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-xs font-bold text-gray-400 mb-8 uppercase tracking-widest">
          <Link to="/" className="hover:text-sky-500 transition-colors">Home</Link>
          <ChevronRight size={12} />
          <span className="text-gray-900">{page.title}</span>
        </nav>

        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter mb-4">
            {page.title}
          </h1>
          <p className="text-lg md:text-xl text-sky-600 font-medium">
            {page.subtitle}
          </p>
        </motion.div>

        {/* Content Body */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-gray-200/50 border border-gray-100"
        >
          {page.content}
        </motion.div>

      </div>
    </div>
  );
};
