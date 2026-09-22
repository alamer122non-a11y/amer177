import React, { useState } from 'react';
import { ShieldAlert, Lock, CheckCircle2, Copy, Check, Mail, ExternalLink, Cpu, Database, Server, Layers } from 'lucide-react';

interface HeroProps {
  onOpenContact: () => void;
  onOpenResume: () => void;
  systemCount: number;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact, onOpenResume, systemCount }) => {
  const [copied, setCopied] = useState(false);
  const email = 'alamer122non@gmail.com';

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative pt-10 pb-8 sm:pt-16 sm:pb-12 border-b border-slate-800/60 overflow-hidden">
      {/* Background Subtle Glow Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(14,165,233,0.15),rgba(255,255,255,0))] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Tagline */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-700/60 text-xs text-slate-300 mb-6 shadow-sm">
          <span className="flex h-2 w-2 rounded-full bg-cyan-400"></span>
          <span>معرض الأنظمة البرمجية المكتملة والمشاريع الحية</span>
          <span className="text-slate-600">|</span>
          <span className="text-cyan-400 font-mono">الإنتاج الفعلي 2024 - 2026</span>
        </div>

        {/* Main Title & Bio */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <div className="lg:col-span-8">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight">
              بورتفوليو النظم السحابية والتطبيقات المؤسسية
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400">
                بإشراف وهندسة م. العامر
              </span>
            </h1>

            <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl">
              أهلاً بكم في المعرض التقني المتكامل لكافة الأنظمة والتطبيقات البرمجية الكبرى التي قمنا بتطويرها وهندستها. نوفر حلولاً مصممة لمجالات إدارة المؤسسات (ERP)، الرعاية الصحية، سلاسل التوريد واللوجستيات، الفوترة ونقاط البيع، والذكاء الاصطناعي المؤسسي.
            </p>

            {/* Strict View-Only Notice Callout */}
            <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-slate-900 via-slate-900 to-cyan-950/30 border border-cyan-500/30 shadow-lg">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 shrink-0 mt-0.5 border border-cyan-500/20">
                  <Lock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white flex items-center gap-2">
                    سياسة العرض والمعاينة الآمنة (View-Only Mode)
                    <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                      محمي ومؤمن
                    </span>
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    جميع روابط الأنظمة والمعاينات التفاعلية المرفقة مخصصة <strong>للرؤية والمعاينة التجريبية فقط (View-Only)</strong>؛ لا يمكن لأي طرف تعديل البيانات، تغيير التهيئات، أو رؤية الأكواد المصدرية والمستودعات البرمجية حفاظاً على حقوق الملكية الفكرية وسرية الأنظمة.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact & Email Bar */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 text-sm font-mono">
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>{email}</span>
                <button
                  onClick={copyEmail}
                  title="نسخ البريد الإلكتروني"
                  className="mr-2 p-1 rounded hover:bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              <button
                onClick={onOpenContact}
                className="px-5 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-sm font-semibold transition-all shadow-md shadow-cyan-900/40 cursor-pointer active:scale-95"
              >
                تواصل مباشر للمشاريع والتراخيص
              </button>

              <button
                onClick={onOpenResume}
                className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 text-sm font-medium transition-all cursor-pointer flex items-center gap-1.5"
              >
                <Layers className="w-4 h-4 text-cyan-400" />
                <span>مصفوفة الخبرات والمعمارية</span>
              </button>
            </div>
          </div>

          {/* Quick Metrics & System Highlights Column */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-3.5">
            
            <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/30 transition-all">
              <div className="flex items-center justify-between text-slate-400 mb-2">
                <span className="text-xs">الأنظمة المطورة</span>
                <Server className="w-4 h-4 text-cyan-400" />
              </div>
              <div className="text-2xl font-black text-white">{systemCount}+ أنظمة</div>
              <p className="text-[11px] text-slate-400 mt-1">أنظمة مؤسسية جاهزة للعرض</p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500/30 transition-all">
              <div className="flex items-center justify-between text-slate-400 mb-2">
                <span className="text-xs">حالة التشغيل</span>
                <Cpu className="w-4 h-4 text-emerald-400" />
              </div>
              <div className="text-2xl font-black text-emerald-400">99.98%</div>
              <p className="text-[11px] text-slate-400 mt-1">جاهزية واستقرار الخوادم</p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-indigo-500/30 transition-all">
              <div className="flex items-center justify-between text-slate-400 mb-2">
                <span className="text-xs">المعالجة اللحظية</span>
                <Database className="w-4 h-4 text-indigo-400" />
              </div>
              <div className="text-2xl font-black text-white">+12M</div>
              <p className="text-[11px] text-slate-400 mt-1">حركات وسجلات معالجة</p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-amber-500/30 transition-all">
              <div className="flex items-center justify-between text-slate-400 mb-2">
                <span className="text-xs">مستوى الحماية</span>
                <Lock className="w-4 h-4 text-amber-400" />
              </div>
              <div className="text-2xl font-black text-amber-400">View-Only</div>
              <p className="text-[11px] text-slate-400 mt-1">حماية تامة للأكواد</p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
