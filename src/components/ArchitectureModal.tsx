import React from 'react';
import { ProjectSystem } from '../types';
import { 
  X, 
  Cpu, 
  Database, 
  Server, 
  ShieldCheck, 
  Zap, 
  Layers, 
  Lock, 
  CheckCircle2, 
  HardDrive,
  Network
} from 'lucide-react';

interface ArchitectureModalProps {
  system: ProjectSystem | null;
  onClose: () => void;
  onOpenPreview: (system: ProjectSystem) => void;
}

export const ArchitectureModal: React.FC<ArchitectureModalProps> = ({
  system,
  onClose,
  onOpenPreview,
}) => {
  if (!system) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md overflow-y-auto animate-fadeIn">
      
      <div className="relative w-full max-w-3xl bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden my-8">
        
        {/* Top Header */}
        <div className="px-6 py-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-cyan-950 border border-cyan-800 text-cyan-400">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold text-white">
                المعمارية الهندسية ومواصفات النظام
              </h2>
              <p className="text-xs text-slate-400 font-mono" dir="ltr">
                {system.titleEn}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
          
          {/* Strict Protected Notice */}
          <div className="p-3.5 rounded-xl bg-slate-950 border border-amber-500/30 flex items-start gap-3">
            <Lock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <div className="text-xs text-slate-300 leading-relaxed">
              <span className="font-bold text-amber-300">ملاحظة الخصوصية والحماية: </span>
              توضح هذه الصفحة البنية المعمارية العامة ومواصفات الموثوقية دون كشف الشيفرات المصدرية أو أسرار الاعتماد، بما يحفظ حقوق الملكية الفكرية وسرية الأنظمة.
            </div>
          </div>

          {/* System Overview */}
          <div>
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">نبذة عن النظام ومجال التطبيق</h3>
            <p className="text-sm text-slate-200 leading-relaxed bg-slate-950/60 p-4 rounded-xl border border-slate-800">
              {system.description}
            </p>
          </div>

          {/* Architectural Layers Grid */}
          <div>
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">طبقات المعمارية البرمجية (System Stack Topology)</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
              
              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                <div className="flex items-center gap-2 text-cyan-400 font-bold mb-1.5">
                  <Layers className="w-4 h-4" />
                  <span>طبقة الواجهات (Client & Frontend):</span>
                </div>
                <p className="text-slate-300 leading-relaxed">{system.architecture.frontend}</p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                <div className="flex items-center gap-2 text-sky-400 font-bold mb-1.5">
                  <Server className="w-4 h-4" />
                  <span>طبقة الخدمات والخوادم (Backend & Microservices):</span>
                </div>
                <p className="text-slate-300 leading-relaxed">{system.architecture.backend}</p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                <div className="flex items-center gap-2 text-indigo-400 font-bold mb-1.5">
                  <Database className="w-4 h-4" />
                  <span>قواعد البيانات والأرشفة (Databases & Storage):</span>
                </div>
                <p className="text-slate-300 leading-relaxed">{system.architecture.database}</p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                <div className="flex items-center gap-2 text-emerald-400 font-bold mb-1.5">
                  <Zap className="w-4 h-4" />
                  <span>الذاكرة الوسيطة والتسريع (Caching & Queues):</span>
                </div>
                <p className="text-slate-300 leading-relaxed">{system.architecture.caching}</p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                <div className="flex items-center gap-2 text-amber-400 font-bold mb-1.5">
                  <ShieldCheck className="w-4 h-4" />
                  <span>الأمان والامتثال والتحكم (Security & RBAC):</span>
                </div>
                <p className="text-slate-300 leading-relaxed">{system.architecture.security}</p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                <div className="flex items-center gap-2 text-purple-400 font-bold mb-1.5">
                  <Network className="w-4 h-4" />
                  <span>سعة المعالجة المتزامنة (Concurrency & Throughput):</span>
                </div>
                <p className="text-slate-300 leading-relaxed">{system.architecture.throughput}</p>
              </div>

            </div>
          </div>

          {/* Quality & Reliability Metrics */}
          <div>
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">مقاييس الجودة والاعتمادية</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-[11px] text-slate-400 block mb-1">نسبة التوفر (Uptime)</span>
                <span className="text-base font-bold text-emerald-400 font-mono">{system.metrics.uptime}</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-[11px] text-slate-400 block mb-1">زمن الاستجابة</span>
                <span className="text-base font-bold text-cyan-400 font-mono">{system.metrics.latency}</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-[11px] text-slate-400 block mb-1">تغطية الاختبارات</span>
                <span className="text-base font-bold text-white font-mono">{system.metrics.testCoverage}</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-[11px] text-slate-400 block mb-1">الفحص الأمني</span>
                <span className="text-xs font-bold text-emerald-400 mt-1 block">{system.metrics.securityAudit}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-slate-950 border-t border-slate-800 flex items-center justify-between">
          <span className="text-xs text-slate-400 font-mono">القطاع المستهدف: {system.clientSector}</span>
          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 text-xs font-medium cursor-pointer"
            >
              إغلاق
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenPreview(system);
              }}
              className="px-4 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-bold cursor-pointer"
            >
              فتح المعاينة التفاعلية
            </button>
          </div>
        </div>

      </div>

    </div>
  );
};
