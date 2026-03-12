/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { HeroSlider } from './components/HeroSlider';
import { PartnerSlider } from './components/PartnerSlider';
import { PromoCards } from './components/PromoCards';
import { StepsSection } from './components/StepsSection';
import { CountdownBanner } from './components/CountdownBanner';
import { GamesSection } from './components/GamesSection';
import { WhyUsSection } from './components/WhyUsSection';
import { Testimonials } from './components/Testimonials';
import { SEOContent } from './components/SEOContent';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { FloatingElements } from './components/FloatingElements';
import { LoginPage } from './components/LoginPage';
import { RegisterPage } from './components/RegisterPage';
import { PartnershipPage } from './components/PartnershipPage';
import { TermsAndConditionsPage } from './components/TermsAndConditionsPage';

const LandingPage = () => (
  <>
    <main>
      <HeroSlider />
      <div className="max-w-7xl mx-auto px-4 py-12 text-center">
        <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter text-gold-outline mb-6 leading-none">
          Winbox - The best online casino & gaming platform in Malaysia
        </h1>
        <p className="text-gray-500 font-black uppercase tracking-[0.3em] text-xs md:text-sm max-w-2xl mx-auto leading-relaxed">
          Official Winbox Platform. Download iOS & Android APK to explore 
          the best Slots, Live Casino & Sports Betting games today.
        </p>
      </div>
      <StepsSection />
      <CountdownBanner />
      <GamesSection />
      <PromoCards />
      <WhyUsSection />
      <SEOContent />
      <PartnerSlider />
      <Testimonials />
      <FAQSection />
    </main>
    <Footer />
  </>
);

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-sky-100 selection:text-sky-600 pt-32">
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/partnership" element={<PartnershipPage />} />
          <Route path="/terms" element={<TermsAndConditionsPage />} />
        </Routes>
        <FloatingElements />
      </div>
    </BrowserRouter>
  );
}
