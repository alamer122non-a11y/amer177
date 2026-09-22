import React from 'react';
import { Terminal, Mail, Lock, ShieldCheck, Heart } from 'lucide-react';

interface FooterProps {
  onOpenContact: () => void;
  onOpenOwnerPortal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenContact, onOpenOwnerPortal }) => {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-900">
          
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400">
              <Terminal className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-white text-sm">بورتفوليو م. العامر للأنظمة البرمجية</div>
              <p className="text-slate-400 text-xs">هندسة وبناء النظم السحابية والحلول المؤسسية المتقدمة</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 font-mono">
              <Mail className="w-3.5 h-3.5 text-cyan-400" />
              <span>alamer122non@gmail.com</span>
            </div>

            <button
              onClick={onOpenContact}
              className="text-cyan-400 hover:text-cyan-300 font-semibold cursor-pointer"
            >
              طلب استشارة أو ترخيص
            </button>

            <span className="text-slate-700">|</span>

            <button
              onClick={onOpenOwnerPortal}
              className="text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              بوابة المالك
            </button>
          </div>

        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-400">
          <div className="flex items-center gap-2">
            <Lock className="w-3 h-3 text-amber-500" />
            <span>كافة الحقوق والأنظمة البرمجية محفوظة © {new Date().getFullYear()} — الروابط مخصصة للعرض والمعاينة التفاعلية فقط (View-Only).</span>
          </div>
          <div>
            هندسة معمارية سحابية موثوقة وعالية الأداء
          </div>
        </div>

      </div>
    </footer>
  );
};
