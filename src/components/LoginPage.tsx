import { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { LogIn, Send, Eye, EyeOff, ChevronRight, ChevronLeft } from 'lucide-react';

export const LoginPage = () => {
  return (
    <div className="min-h-[calc(100vh-8rem)] bg-[#f8fbff] flex flex-col relative overflow-hidden pt-6">
      <main className="flex-grow w-full h-[calc(100vh-9.5rem)] relative z-10">
        <iframe 
          src="https://h5.wbwin02.com/#/Login" 
          title="Winbox Login"
          className="w-full h-full border-0"
          allow="fullscreen"
        />
      </main>
    </div>
  );
};
