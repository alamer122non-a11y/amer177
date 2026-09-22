import React from 'react';
import { ShieldCheck, Lock, Mail, Terminal, Sparkles, SlidersHorizontal } from 'lucide-react';

interface HeaderProps {
  onOpenContact: () => void;
  onOpenOwnerPortal: () => void;
  onOpenResume: () => void;
  systemCount: number;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenContact,
  onOpenOwnerPortal,
  onOpenResume,
  systemCount,
}) => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-800/80 bg-slate-950/85 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand & Persona */}
        <div className="flex items-center gap-3.5">
          <div className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-cyan-500/20 via-blue-600/20 to-indigo-600/20 border border-cyan-500/40 shadow-inner">
            <Terminal className="w-5 h-5 text-cyan-400" />
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-lg font-bold text-white tracking-tight">م. العامر</h1>
              <span className="text-xs px-2 py-0.5 rounded-full bg-cyan-950/80 text-cyan-400 border border-cyan-800/60 font-medium">
                هندسة النظم والحلول
              </span>
            </div>
            <p className="text-xs text-slate-400 font-mono">Principal Systems Architect & Lead Engineer</p>
          </div>
        </div>

        {/* View-Only Security Indicator */}
        <div className="hidden lg:flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 text-xs">
          <Lock className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
          <span className="font-medium">جميع الأنظمة بوضع العرض الآمن فقط (View-Only Mode)</span>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
          <span className="text-emerald-400/80">الأكواد محمية ومحجوبة</span>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2.5">
          <button
            onClick={onOpenResume}
            className="hidden sm:flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white text-xs font-medium transition-all active:scale-95 cursor-pointer"
            title="السيرة المعمارية ومصفوفة إنجاز الأنظمة"
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>مصفوفة الخبرات</span>
          </button>

          <button
            id="header-contact-btn"
            onClick={onOpenContact}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-xs sm:text-sm font-semibold transition-all shadow-lg shadow-cyan-950/50 hover:shadow-cyan-500/20 active:scale-95 cursor-pointer"
          >
            <Mail className="w-4 h-4" />
            <span>طلب ترخيص / استشارة</span>
          </button>

          <button
            id="header-owner-portal-btn"
            onClick={onOpenOwnerPortal}
            title="إدارة الأنظمة (خاص بالمالك م. العامر)"
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white text-xs font-medium transition-all active:scale-95 cursor-pointer"
          >
            <SlidersHorizontal className="w-3.5 h-3.5 text-slate-400" />
            <span className="hidden sm:inline">إدارة الأنظمة</span>
          </button>
        </div>

      </div>
    </header>
  );
};
