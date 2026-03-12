import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, Plus, X } from 'lucide-react';

export const FAQSection = () => {
  const categories = [
    { id: 'general', label: 'General Questions' },
    { id: 'account', label: 'Account & Registration' },
    { id: 'payment', label: 'Deposits & Withdrawals' },
    { id: 'games', label: 'Games & Software' },
    { id: 'security', label: 'Security & Fair Play' },
  ];

  const faqs = [
    { category: 'general', question: 'What is Winbox 666?', answer: 'Winbox 666 is a premier online casino platform in Malaysia, offering a wide range of games including slots, live casino, and sports betting with a focus on security and player experience.' },
    { category: 'general', question: 'Is Winbox 666 legal in Malaysia?', answer: 'Winbox 666 operates under international gaming licenses from Gaming Curacao and PAGCOR, ensuring a regulated and fair gaming environment for all players.' },
    { category: 'general', question: 'How do I contact customer support?', answer: 'Our professional support team is available 24/7 via live chat, WhatsApp, and Telegram to assist you with any inquiries or technical issues.' },
    
    { category: 'account', question: 'How do I create an account?', answer: 'Simply click the "Register" button, provide your basic details, and verify your phone number to start your journey with Winbox 666.' },
    { category: 'account', question: 'I forgot my password, what should I do?', answer: 'Click on the "Forgot Password" link on the login page to reset it via your registered email or phone number, or contact our 24/7 support.' },
    { category: 'account', question: 'Can I have more than one account?', answer: 'To ensure fair play and security, each player is permitted only one account. Multiple accounts may lead to suspension.' },

    { category: 'payment', question: 'What payment methods are supported?', answer: 'We support various secure payment methods including FPX online banking, Touch n Go e-wallet, Visa, Mastercard, and USDT cryptocurrency.' },
    { category: 'payment', question: 'How long does it take to withdraw my winnings?', answer: 'Withdrawals are processed swiftly, typically within 15-30 minutes, depending on the chosen payment method and verification status.' },
    { category: 'payment', question: 'Is there a minimum deposit amount?', answer: 'Yes, the minimum deposit is typically RM20, allowing players to start enjoying our games with a small initial commitment.' },

    { category: 'games', question: 'What types of games are available?', answer: 'We offer a massive selection including live dealer baccarat, roulette, thousands of slot titles, sportsbooks, horse racing, and 4D lottery.' },
    { category: 'games', question: 'Can I play on my mobile phone?', answer: 'Absolutely! Winbox 666 is fully optimized for mobile browsers, and we also offer a dedicated app for both iOS and Android devices.' },
    { category: 'games', question: 'Are the games fair?', answer: 'Yes, all our games are provided by world-class developers and are regularly audited by independent labs like iTech Labs and GLI to ensure fairness.' },

    { category: 'security', question: 'How does Winbox 666 protect my data?', answer: 'We use advanced SSL encryption and security protocols from iovation and ThreatMetrix to ensure your personal and financial data remains private.' },
    { category: 'security', question: 'What is Gaming Curacao and PAGCOR?', answer: 'These are leading international regulatory bodies that license and oversee online gaming operations to ensure they meet strict standards of integrity.' },
    { category: 'security', question: 'Do you use RNG for your games?', answer: 'Yes, all our virtual games use certified Random Number Generators (RNG) to guarantee that every outcome is completely random and unbiased.' },
  ];

  const [activeCategory, setActiveCategory] = useState('general');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const filteredFaqs = faqs.filter(faq => faq.category === activeCategory);

  return (
    <div className="bg-gray-50/50 py-24">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-black text-center mb-20 uppercase tracking-tight text-gold-outline">Frequently Asked Questions</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Categories Sidebar */}
          <div className="lg:col-span-4 space-y-4">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id);
                  setOpenIndex(0);
                }}
                className={`w-full flex justify-between items-center p-6 rounded-xl transition-all duration-300 text-left group ${
                  activeCategory === cat.id 
                    ? 'bg-white shadow-xl shadow-sky-100 text-sky-600' 
                    : 'bg-white/40 text-gray-400 hover:bg-white hover:text-gray-600'
                }`}
              >
                <span className="font-bold tracking-wide">{cat.label}</span>
                <ChevronRight 
                  size={18} 
                  className={`transition-transform duration-300 ${activeCategory === cat.id ? 'translate-x-1' : 'opacity-0 group-hover:opacity-100'}`} 
                />
              </button>
            ))}
          </div>

          {/* FAQ Content */}
          <div className="lg:col-span-8 space-y-4">
            {filteredFaqs.map((faq, i) => (
              <div 
                key={i} 
                className={`bg-white rounded-xl transition-all duration-300 ${
                  openIndex === i ? 'shadow-xl shadow-sky-100' : 'hover:shadow-md'
                }`}
              >
                <button 
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex justify-between items-center p-8 text-left group"
                >
                  <span className={`font-bold text-lg transition-colors ${openIndex === i ? 'text-sky-600' : 'text-gray-700 group-hover:text-sky-500'}`}>
                    {faq.question}
                  </span>
                  <div className={`p-1 rounded-full transition-colors ${openIndex === i ? 'bg-sky-50 text-sky-600' : 'text-gray-400'}`}>
                    {openIndex === i ? <X size={24} /> : <Plus size={24} />}
                  </div>
                </button>
                
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-8">
                        <div className="w-full h-px bg-gray-100 mb-6" />
                        <p className="text-gray-500 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
