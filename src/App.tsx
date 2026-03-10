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
      <h1 className="sr-only">Winbox - Daily Live Lucky Draw & Trusted Online Casino Platform</h1>
      <HeroSlider />
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
