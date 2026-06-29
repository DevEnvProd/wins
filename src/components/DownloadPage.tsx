import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Download, Smartphone, Apple, ShieldCheck, CheckCircle2, FileDown } from 'lucide-react';
import { Footer } from './Footer';

export const DownloadPage = () => {
  useEffect(() => {
    document.title = "Winbox Download - Get Official Winbox Mobile App for Android & iOS";
  }, []);

  return (
    <>
      <div className="min-h-screen bg-gray-50/50 pt-10 pb-20">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header Breadcrumb */}
        <div className="mb-8 text-xs text-gray-400 uppercase tracking-widest font-black">
          <Link to="/" className="hover:text-sky-500 transition-colors">Winbox</Link>
          <span className="mx-2">&gt;</span>
          <span className="text-gray-600">Download</span>
        </div>

        {/* Catchy SEO H1 & Subtitle */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-gold-outline mb-4">
            Winbox Download Guide
          </h1>
          <p className="text-gray-500 font-bold max-w-xl mx-auto text-sm md:text-base">
            Get the latest official version of the <Link to="/" className="text-sky-600 hover:underline">Winbox</Link> application for Android (APK) & Apple iOS. Setup securely and play your favorite online casino games instantly.
          </p>
        </div>

        {/* Side-by-Side Download Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Android Download */}
          <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xl shadow-gray-100/50 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center text-green-500">
                <Smartphone size={32} />
              </div>
              <div className="space-y-2">
                <h2 className="text-2xl font-black text-gray-800 uppercase tracking-tight">Android APK</h2>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Download the raw APK file directly to your device. Compatible with Android 5.0 and above. Fast download speed with built-in auto-updates.
                </p>
              </div>
            </div>
            <div className="mt-8">
              <a 
                href="https://m.wbwin02.com/d" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full bg-green-500 hover:bg-green-600 hover:shadow-lg hover:shadow-green-100 text-white font-black uppercase py-4 rounded-2xl flex items-center justify-center gap-3 transition-all text-xs tracking-widest"
              >
                <FileDown size={18} />
                Download Android APK
              </a>
            </div>
          </div>

          {/* iOS Download */}
          <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xl shadow-gray-100/50 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="w-16 h-16 bg-sky-50 rounded-2xl flex items-center justify-center text-sky-500">
                <Apple size={32} />
              </div>
              <div className="space-y-2">
                <h2 className="text-2xl font-black text-gray-800 uppercase tracking-tight">Apple iOS</h2>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Configure the mobile web app with a home screen shortcut or install via our designated Enterprise Provisioning Profile for maximum stability.
                </p>
              </div>
            </div>
            <div className="mt-8">
              <a 
                href="https://m.wbwin02.com/d" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full bg-sky-500 hover:bg-sky-600 hover:shadow-lg hover:shadow-sky-100 text-white font-black uppercase py-4 rounded-2xl flex items-center justify-center gap-3 transition-all text-xs tracking-widest"
              >
                <Apple size={18} />
                Install iOS App
              </a>
            </div>
          </div>
        </div>

        {/* Installation Steps */}
        <div className="bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-xl shadow-gray-100/50 mb-12">
          <h2 className="text-2xl font-black text-gray-800 uppercase tracking-tight mb-8 text-center">
            How to Install Winbox App
          </h2>
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="w-10 h-10 bg-sky-50 rounded-full flex items-center justify-center text-sky-600 shrink-0 font-black text-sm">
                1
              </div>
              <div className="space-y-2 pt-1">
                <h3 className="font-bold text-gray-800">Visit Download portal</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Click on either the Android or iOS installation button above to open our official provisioning backend.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-10 h-10 bg-sky-50 rounded-full flex items-center justify-center text-sky-600 shrink-0 font-black text-sm">
                2
              </div>
              <div className="space-y-2 pt-1">
                <h3 className="font-bold text-gray-800">Allow installation block (Android)</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Go to Settings &gt; Security &gt; Install Unknown Apps and enable permission for your browser. This is standard for raw Android APKs package files.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-10 h-10 bg-sky-50 rounded-full flex items-center justify-center text-sky-600 shrink-0 font-black text-sm">
                3
              </div>
              <div className="space-y-2 pt-1">
                <h3 className="font-bold text-gray-800">Verify & Register</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Once the installation completes, launch the app. If you don't have an account, complete your <Link to="/register" className="text-sky-600 font-bold hover:underline">Winbox registration</Link> instantly, or use your existing credentials at the <Link to="/login" className="text-sky-600 font-bold hover:underline">Winbox Login</Link> portal.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Security & Support Callout */}
        <div className="bg-sky-50 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 justify-between text-sky-900">
          <div className="flex gap-4 items-start text-left">
            <div className="p-3 bg-white/50 rounded-xl text-sky-600 shrink-0 mt-1">
              <ShieldCheck size={24} />
            </div>
            <div className="space-y-1">
              <h4 className="font-black uppercase tracking-wider text-xs">100% Virus Free & Secure</h4>
              <p className="text-xs opacity-80 leading-relaxed">
                All application binaries are strictly compiled, signed, and tested monthly for zero vulnerabilities. Always download through our verified <Link to="/" className="font-bold hover:underline">Winbox</Link> homepage.
              </p>
            </div>
          </div>
          <Link to="/" className="bg-white hover:bg-sky-100 text-sky-900 font-black text-[10px] md:text-xs uppercase tracking-widest px-6 py-3 rounded-xl shadow-md transition-all shrink-0">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
    <Footer />
  </>
  );
};
