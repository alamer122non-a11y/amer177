import React from 'react';
import { ProjectSystem } from '../types';
import { 
  Lock, 
  ExternalLink, 
  Eye, 
  Layers, 
  Cpu, 
  CheckCircle2, 
  Activity, 
  ShieldCheck, 
  Server,
  Sparkles
} from 'lucide-react';

interface SystemCardProps {
  system: ProjectSystem;
  onOpenPreview: (system: ProjectSystem) => void;
  onOpenArchitecture: (system: ProjectSystem) => void;
  onOpenSafeLink: (system: ProjectSystem) => void;
}

export const SystemCard: React.FC<SystemCardProps> = ({
  system,
  onOpenPreview,
  onOpenArchitecture,
  onOpenSafeLink,
}) => {
  return (
    <div className="group relative rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-slate-700/80 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-lg hover:shadow-cyan-950/20">
      
      {/* Top Banner Accent Line */}
      <div className="h-1 w-full bg-gradient-to-r from-cyan-500 via-sky-400 to-indigo-500 opacity-60 group-hover:opacity-100 transition-opacity" />

      <div className="p-5 sm:p-6 flex-1 flex flex-col">
        
        {/* Badges & Security Pill */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3.5">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-slate-800 text-cyan-400 border border-slate-700/80">
              {system.categoryName}
            </span>
            <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium bg-emerald-950/50 text-emerald-300 border border-emerald-500/30">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              {system.statusName}
            </span>
          </div>

          {/* Strict View-Only Tag */}
          <div 
            title="هذا النظام معروض بوضع القراءة والمعاينة فقط بدون إتاحة الأكواد أو صلاحيات التعديل"
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-medium bg-amber-950/40 text-amber-300 border border-amber-500/30"
          >
            <Lock className="w-3 h-3 text-amber-400" />
            <span>عرض فقط (View-Only)</span>
          </div>
        </div>

        {/* Titles */}
        <div className="mb-3">
          <h2 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors tracking-tight">
            {system.title}
          </h2>
          <p className="text-xs text-slate-400 font-mono mt-0.5" dir="ltr">
            {system.titleEn}
          </p>
        </div>

        {/* Subtitle / summary */}
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
          {system.subtitle}
        </p>

        {/* Highlight metric ribbon */}
        <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 flex items-center justify-between mb-4 text-xs">
          <div className="flex items-center gap-2">
            <Activity className="w-4 h-4 text-cyan-400" />
            <span className="text-slate-400">{system.highlightStat.label}:</span>
            <span className="text-white font-bold font-mono">{system.highlightStat.value}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-slate-400">الجاهزية:</span>
            <span className="text-emerald-400 font-semibold font-mono">{system.metrics.uptime}</span>
          </div>
        </div>

        {/* Key Features */}
        <div className="space-y-1.5 mb-5 flex-1">
          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
            أبرز القدرات الوظيفية:
          </span>
          {system.features.slice(0, 3).map((feat, idx) => (
            <div key={idx} className="flex items-start gap-2 text-xs text-slate-300 leading-normal">
              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
              <span>{feat}</span>
            </div>
          ))}
        </div>

        {/* Tech Stack Chips */}
        <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800/80 mb-5">
          {system.technologies.slice(0, 6).map((tech, idx) => (
            <span
              key={idx}
              className="px-2 py-0.5 rounded-md bg-slate-800/80 text-slate-300 text-[11px] font-mono border border-slate-700/50"
            >
              {tech}
            </span>
          ))}
          {system.technologies.length > 6 && (
            <span className="px-2 py-0.5 rounded-md bg-slate-800/40 text-slate-400 text-[11px]">
              +{system.technologies.length - 6}
            </span>
          )}
        </div>

      </div>

      {/* Action Footer */}
      <div className="p-4 sm:p-5 bg-slate-950/80 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-2.5">
        
        {/* Left: Architecture specs button */}
        <button
          onClick={() => onOpenArchitecture(system)}
          className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white text-xs font-medium transition-colors cursor-pointer"
          title="عرض المعمارية الهندسية ومواصفات السيرفر وقواعد البيانات"
        >
          <Cpu className="w-3.5 h-3.5 text-slate-400" />
          <span>المواصفات التقنية</span>
        </button>

        {/* Right buttons: Safe Link & Live Preview */}
        <div className="flex items-center gap-2">
          
          <button
            onClick={() => onOpenSafeLink(system)}
            className="flex items-center gap-1 px-3 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-cyan-300 text-xs font-medium transition-colors cursor-pointer"
            title="رابط المعاينة الخارجية بوضع القراءة فقط"
          >
            <Lock className="w-3 h-3 text-amber-400" />
            <span>رابط العرض</span>
          </button>

          <button
            onClick={() => onOpenPreview(system)}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-xs sm:text-sm font-bold transition-all shadow-md shadow-cyan-950 hover:shadow-cyan-600/30 active:scale-95 cursor-pointer"
            title="فتح المعاينة التفاعلية للنظام بوضع العرض فقط"
          >
            <Eye className="w-4 h-4" />
            <span>معاينة النظام (View-Only)</span>
          </button>

        </div>

      </div>

    </div>
  );
};
