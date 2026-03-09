import { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  Send, 
  Eye, 
  EyeOff, 
  Download,
  CheckCircle2,
  HelpCircle,
  ChevronLeft
} from 'lucide-react';

const REGISTER_URL = "https://h5.wbwin02.com/#/login/register?QXZhdGFySWQlM0QyOCUyNkF2YXRhckltZyUzRCUyNTJGVXNlckF2YXRhciUyNTJGMjAyNiUyNTJGMDMlMjUyRjA2JTI1MkY2NTkxRTE1NkJDRUQ0MEY2QjdDQjMwQ0FBNTQzNkI1OC5qcGclMjZGdWxsTmFtZSUzRFBMQVlFUjE3NzI4MDk0NDglMjZVSUQlM0RTWSoqKjg4OCUyNlVzZXJJZCUzRFdCUFNZVzg4ODc1MzExNjElMjZhcGNvZGUlM0QlMjZ0ZWxlZ3JhbVJlZ2lzdGVyJTNEZmFsc2U%3D";

export const RegisterPage = () => {
  return (
    <div className="min-h-screen bg-[#f8fbff] flex flex-col relative overflow-hidden pt-24">
      <main className="flex-grow w-full h-[calc(100vh-6rem)] relative z-10">
        <iframe 
          src={REGISTER_URL}
          title="Winbox Register"
          className="w-full h-full border-0"
          allow="fullscreen"
        />
      </main>
    </div>
  );
};
