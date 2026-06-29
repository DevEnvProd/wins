import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { HelpCircle, ChevronRight, MessageSquare, ArrowRight } from 'lucide-react';
import { Footer } from './Footer';

export const FAQPage = () => {
  const [activeTab, setActiveTab] = useState('general');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  useEffect(() => {
    document.title = "Winbox FAQ - Official Support, Account & Payment FAQs";
  }, []);

  const categories = [
    { id: 'general', label: 'General Info' },
    { id: 'account', label: 'Account Setup' },
    { id: 'payment', label: 'Deposits & Withdrawals' },
    { id: 'security', label: 'Game Legitimacy' }
  ];

  const faqs = [
    { 
      category: 'general', 
      question: 'What is Winbox?', 
      answer: (
        <span>
          <Link to="/" className="text-sky-600 font-bold hover:underline">Winbox</Link> is a premier online casino platform in Malaysia. 
          As one of the region's most prominent gambling applications, it brings together world-class betting providers 
          including casino games, sportsbook packages, and live lottery slots.
        </span>
      )
    },
    { 
      category: 'general', 
      question: 'Is Winbox licensed in Malaysia?', 
      answer: (
        <span>
          Yes, <Link to="/" className="text-sky-600 font-bold hover:underline">Winbox</Link> operates under fully vetted, certified 
          international gaming licenses from PAGCOR and Gaming Curacao. This guarantees absolute compliance, rigorous code checks, and audited RNG values.
        </span>
      )
    },
    { 
      category: 'account', 
      question: 'How do I create a new Winbox account?', 
      answer: (
        <span>
          Registering is incredibly simple. You can visit the official <Link to="/register" className="text-sky-600 font-bold hover:underline">Winbox Register</Link> page, 
          supply your fundamental credentials (mobile phone confirmation, real username and name) and your VIP profile opens instantly.
        </span>
      )
    },
    { 
      category: 'account', 
      question: 'Can I log into Winbox on multiple devices simultaneously?', 
      answer: (
        <span>
          To protect user transaction parameters, active gameplay streams, and balance values, a singular profile can only possess one active session. 
          Visit the dedicated <Link to="/login" className="text-sky-600 font-bold hover:underline">Winbox Login</Link> section to clear state discrepancies and access your hub.
        </span>
      )
    },
    { 
      category: 'payment', 
      question: 'What is the minimum amount allowed for Deposits/Withdrawals?', 
      answer: (
        <span>
          The default minimum credit limit for deposits sits at RM20. All ledger allocations run through instant bank channels 
          and vetted cryptocurrency APIs. Full rules are available inside the <Link to="/terms" className="text-sky-600 font-bold hover:underline">Winbox Terms</Link> document.
        </span>
      )
    },
    { 
      category: 'security', 
      question: 'How do I know the games are completely fair?', 
      answer: (
        <span>
          Every single gaming provider integrated on <Link to="/" className="text-sky-600 font-bold hover:underline">Winbox</Link> is monitored 
          by independent labs like iTech Labs and GLI. Every spin, deal, and sports payout outcome is guaranteed by authenticated Random Number Generation.
        </span>
      )
    }
  ];

  const filteredFaqs = faqs.filter(faq => faq.category === activeTab);

  return (
    <>
      <div className="min-h-screen bg-gray-50/50 pt-10 pb-20">
      <div className="max-w-4xl mx-auto px-4">
        {/* Breadcrumbs */}
        <div className="mb-8 text-xs text-gray-400 uppercase tracking-widest font-black">
          <Link to="/" className="hover:text-sky-500 transition-colors">Winbox</Link>
          <span className="mx-2">&gt;</span>
          <span className="text-gray-600">FAQ</span>
        </div>

        {/* Header Title */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-gold-outline mb-4">
            Winbox Frequently Asked Questions
          </h1>
          <p className="text-gray-500 font-bold max-w-xl mx-auto text-sm">
            Everything you need to know about registration, login safety, gameplay options and account management on <Link to="/" className="text-sky-600 hover:underline">Winbox</Link>.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveTab(cat.id);
                setOpenIndex(0);
              }}
              className={`px-6 py-3 rounded-2xl text-xs font-black uppercase tracking-wider transition-all border ${
                activeTab === cat.id
                  ? 'bg-sky-500 text-white border-sky-500 shadow-md shadow-sky-100'
                  : 'bg-white text-gray-500 border-gray-100 hover:border-gray-300'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* FAQ Grid list */}
        <div className="space-y-4 mb-16">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50/50 transition-colors"
                >
                  <span className="font-bold text-gray-800 text-sm md:text-base">
                    {faq.question}
                  </span>
                  <ChevronRight 
                    className={`text-gray-400 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-90 text-sky-500' : ''}`} 
                    size={18} 
                  />
                </button>
                
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-1 text-sm text-gray-500 leading-relaxed border-t border-gray-50">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Still Have Questions? */}
        <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xl shadow-gray-100/50 text-center">
          <HelpCircle className="mx-auto text-sky-500 mb-4" size={40} />
          <h3 className="text-xl font-black text-gray-800 uppercase tracking-tight mb-2">Can't Find What You Need?</h3>
          <p className="text-sm text-gray-500 max-w-md mx-auto mb-6 leading-relaxed">
            Our specialized support desk operates 24/7. Find solutions or connect directly on our <Link to="/" className="text-sky-600 font-bold hover:underline">Winbox</Link> web interface.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/login" 
              className="bg-sky-500 hover:bg-sky-600 hover:shadow-lg hover:shadow-sky-100 text-white font-black uppercase text-xs tracking-widest px-8 py-4 rounded-xl flex items-center justify-center gap-2 transition-all"
            >
              Winbox Login
              <ArrowRight size={14} />
            </Link>
            <Link 
              to="/" 
              className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-black uppercase text-xs tracking-widest px-8 py-4 rounded-xl transition-all"
            >
              Visit Homepage
            </Link>
          </div>
        </div>

      </div>
    </div>
    <Footer />
  </>
  );
};
