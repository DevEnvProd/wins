import { MessageCircle, Instagram, Facebook, Twitter } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-sky-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 space-y-16">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Column 1: Description & Contact */}
          <div className="space-y-12">
            <div className="space-y-6">
              <div className="text-2xl font-bold text-white flex items-center gap-2">
                <div className="bg-white text-sky-900 p-1 rounded-md">W</div>
                <span>Winbox888</span>
              </div>
              <p className="text-sm leading-relaxed opacity-70">
                Winbox888 is a premier licensed casino gaming platform dedicated to providing a world-class entertainment experience. 
                As a fully regulated entity, we prioritize player security, fair play, and transparency across all our gaming offerings. 
                Whether you enjoy slots, live dealer games, or sports betting, Winbox888 ensures a safe and rewarding environment for every enthusiast.
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-2xl font-black uppercase tracking-widest mb-4 text-gold-outline">Contact Us</h4>
              <div className="flex gap-4">
                <a 
                  href="https://wa.me/601172359556" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer"
                >
                  <MessageCircle size={20} />
                </a>
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                  <Instagram size={20} />
                </div>
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                  <Facebook size={20} />
                </div>
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                  <Twitter size={20} />
                </div>
              </div>
            </div>
          </div>
          
          {/* Column 2: License & Security */}
          <div className="space-y-12">
            <div className="space-y-4">
              <h4 className="text-2xl font-black uppercase tracking-widest mb-4 text-gold-outline">Winbox License</h4>
              <div className="flex gap-4 flex-wrap">
                <img 
                  src="https://illuminatelabs.space/asset/images/licensed_gaming_curacao.png" 
                  alt="Gaming Curacao License" 
                  className="h-10 object-contain opacity-90 hover:opacity-100 transition-opacity"
                  referrerPolicy="no-referrer"
                />
                <img 
                  src="https://illuminatelabs.space/asset/images/licensed_Pagcor.avif" 
                  alt="PAGCOR License" 
                  className="h-10 object-contain opacity-90 hover:opacity-100 transition-opacity"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="text-2xl font-black uppercase tracking-widest mb-4 text-gold-outline">Winbox Security</h4>
              <div className="flex gap-4 flex-wrap">
                <img 
                  src="https://illuminatelabs.space/asset/images/security_iovation.png" 
                  alt="iovation" 
                  className="h-10 object-contain opacity-90 hover:opacity-100 transition-opacity"
                  referrerPolicy="no-referrer"
                />
                <img 
                  src="https://illuminatelabs.space/asset/images/security_ThreatMetrix.png" 
                  alt="ThreatMetrix" 
                  className="h-10 object-contain opacity-90 hover:opacity-100 transition-opacity"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>

          {/* Column 3: Certification & Bank Payment */}
          <div className="space-y-12">
            <div className="space-y-4">
              <h4 className="text-2xl font-black uppercase tracking-widest mb-4 text-gold-outline">Winbox Certification</h4>
              <div className="flex flex-wrap items-center gap-6 opacity-90">
                <img 
                  src="https://illuminatelabs.space/asset/images/cert_bmmtestlabs.png" 
                  alt="BMM Testlabs" 
                  className="h-8 object-contain hover:scale-110 transition-transform"
                  referrerPolicy="no-referrer"
                />
                <img 
                  src="https://illuminatelabs.space/asset/images/cert_itechlabs.svg" 
                  alt="iTech Labs" 
                  className="h-8 object-contain hover:scale-110 transition-transform"
                  referrerPolicy="no-referrer"
                />
                <img 
                  src="https://illuminatelabs.space/asset/images/cert_gaminglaboratoriesinternational.png" 
                  alt="GLI" 
                  className="h-8 object-contain hover:scale-110 transition-transform"
                  referrerPolicy="no-referrer"
                />
                <img 
                  src="https://illuminatelabs.space/asset/images/cert_godaddy.png" 
                  alt="GoDaddy" 
                  className="h-8 object-contain hover:scale-110 transition-transform"
                  referrerPolicy="no-referrer"
                />
                <img 
                  src="https://illuminatelabs.space/asset/images/cert_dmca.png" 
                  alt="DMCA" 
                  className="h-8 object-contain hover:scale-110 transition-transform"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-2xl font-black uppercase tracking-widest mb-4 text-gold-outline">Supported Bank Payment</h4>
              <div className="flex flex-wrap items-center gap-6 opacity-90">
                <img 
                  src="https://illuminatelabs.space/asset/images/payment_fpx.avif" 
                  alt="FPX" 
                  className="h-8 object-contain hover:scale-110 transition-transform"
                  referrerPolicy="no-referrer"
                />
                <img 
                  src="https://illuminatelabs.space/asset/images/payment_touchngo.svg" 
                  alt="Touch n Go" 
                  className="h-8 object-contain hover:scale-110 transition-transform"
                  referrerPolicy="no-referrer"
                />
                <img 
                  src="https://illuminatelabs.space/asset/images/payment_visa.png" 
                  alt="Visa" 
                  className="h-8 object-contain hover:scale-110 transition-transform"
                  referrerPolicy="no-referrer"
                />
                <img 
                  src="https://illuminatelabs.space/asset/images/payment_mastercard.png" 
                  alt="Mastercard" 
                  className="h-8 object-contain hover:scale-110 transition-transform"
                  referrerPolicy="no-referrer"
                />
                <img 
                  src="https://illuminatelabs.space/asset/images/payment_usdt.png" 
                  alt="USDT" 
                  className="h-8 object-contain hover:scale-110 transition-transform"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="pt-12 border-t border-white/10 text-center space-y-4">
          <div className="flex flex-wrap justify-center gap-6 text-[10px] font-bold uppercase opacity-60">
            <a href="#" className="hover:opacity-100">Promo</a>
            <a href="#" className="hover:opacity-100">Winbox Partnership</a>
            <a href="#" className="hover:opacity-100">Register</a>
            <a href="#" className="hover:opacity-100">Login</a>
            <a href="#" className="hover:opacity-100">Download</a>
            <a href="#" className="hover:opacity-100">Game</a>
            <a href="#" className="hover:opacity-100">Ambassador</a>
            <a href="#" className="hover:opacity-100">Agent</a>
            <a href="#" className="hover:opacity-100">4D Result</a>
            <a href="#" className="hover:opacity-100">Help</a>
            <a href="/terms" className="hover:opacity-100">Terms & Conditions</a>
            <a href="#" className="hover:opacity-100">Contact Us</a>
          </div>
          <p className="text-xs opacity-40">
            © 2026 winbox88my4.com | All Rights Reserved | Winbox
          </p>
        </div>
      </div>
    </footer>
  );
};
