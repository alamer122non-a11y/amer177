import React from 'react';
import { X, Award, FileText, Printer, CheckCircle2, Cpu, Server, Database, ShieldCheck, Mail, Lock, Layers } from 'lucide-react';
import { ProjectSystem } from '../types';

interface ResumeMatrixModalProps {
  isOpen: boolean;
  onClose: () => void;
  systems: ProjectSystem[];
  onOpenContact: () => void;
}

export const ResumeMatrixModal: React.FC<ResumeMatrixModalProps> = ({
  isOpen,
  onClose,
  systems,
  onOpenContact,
}) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/90 backdrop-blur-md overflow-y-auto animate-fadeIn">
      <div className="relative w-full max-w-4xl bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden my-6 flex flex-col max-h-[92vh]">
        
        {/* Header */}
        <div className="px-6 py-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-cyan-950 border border-cyan-800 text-cyan-400">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold text-white">السيرة المعمارية ومصفوفة إنجاز الأنظمة</h2>
              <p className="text-xs text-slate-400">ملخص الخبرات الهندسية ومواصفات المشاريع المنفذة</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium transition-colors cursor-pointer"
              title="طباعة أو حفظ بصيغة PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">طباعة / PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Body Content */}
        <div className="p-6 overflow-y-auto space-y-6 text-xs text-slate-300">
          
          {/* Persona Card */}
          <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base sm:text-lg font-bold text-white">م. العامر</h3>
                <span className="px-2.5 py-0.5 rounded-full bg-cyan-950 text-cyan-400 border border-cyan-800 text-[11px] font-medium">
                  Principal Software & Systems Architect
                </span>
              </div>
              <p className="text-slate-400 mt-1 leading-relaxed">
                مهندس برمجيات متخصص في بناء وتطوير الأنظمة السحابية المعقدة (Enterprise Distributed Systems)، المعماريات متناهية الصغر (Microservices)، وقواعد البيانات فائقة التزامن للقطاعات المالية، الطبية، واللوجستية.
              </p>
              <div className="flex flex-wrap items-center gap-4 mt-3 text-slate-400 font-mono text-[11px]">
                <span>البريد: alamer122non@gmail.com</span>
                <span>•</span>
                <span>الخبرة: +8 سنوات في هندسة النظم</span>
                <span>•</span>
                <span>الاعتمادية: 99.98% Uptime SLA</span>
              </div>
            </div>

            <button
              onClick={() => {
                onClose();
                onOpenContact();
              }}
              className="px-4 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold shrink-0 transition-colors cursor-pointer shadow-md shadow-cyan-950"
            >
              طلب استشارة أو توظيف للمشاريع
            </button>
          </div>

          {/* Core Competencies Grid */}
          <div>
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
              المجالات والقدرات التقنية الأساسية (Core Competencies)
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-1.5">
                <div className="flex items-center gap-2 text-cyan-400 font-bold">
                  <Cpu className="w-4 h-4" />
                  <span>معمارية النظم السحابية</span>
                </div>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  تصميم أنظمة Microservices موزعة، إدارة الأحمال العالية، ومحاذاة الموارد التلقائية (Auto-Scaling).
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-1.5">
                <div className="flex items-center gap-2 text-indigo-400 font-bold">
                  <Database className="w-4 h-4" />
                  <span>قواعد البيانات والأرشفة</span>
                </div>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  ضبط أداء PostgreSQL، الفهارس المتقدمة، التضمين الشعاعي (pgvector)، والبيانات اللحظية عبر Redis.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-1.5">
                <div className="flex items-center gap-2 text-amber-400 font-bold">
                  <ShieldCheck className="w-4 h-4" />
                  <span>الأمان والامتثال الدولي</span>
                </div>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  تطبيق معايير الفاتورة الإلكترونية ZATCA، معايير HIPAA الطبية، تشفير التخزين والنقل AES-256.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-1.5">
                <div className="flex items-center gap-2 text-emerald-400 font-bold">
                  <Server className="w-4 h-4" />
                  <span>الحوسبة السريعة وإنترنت الأشياء</span>
                </div>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  بروتوكولات MQTT لتتبع الأساطيل، مزامنة PWA دون إنترنت (Offline-First)، وبوابات الدفع.
                </p>
              </div>
            </div>
          </div>

          {/* Systems Capability Matrix Table */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                مصفوفة الأنظمة المنجزة وحالة التشغيل (Systems Delivery Matrix)
              </h4>
              <div className="flex items-center gap-1.5 text-amber-400 font-mono text-[11px]">
                <Lock className="w-3 h-3" />
                <span>جميع الأنظمة تعمل بوضع المعاينة الآمنة (View-Only)</span>
              </div>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-950 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-right text-xs">
                  <thead className="bg-slate-900 text-slate-400 text-[11px] border-b border-slate-800">
                    <tr>
                      <th className="p-3">اسم المنظومة</th>
                      <th className="p-3">القطاع</th>
                      <th className="p-3">التقنيات الأساسية</th>
                      <th className="p-3">سعة المعالجة</th>
                      <th className="p-3">الجاهزية SLA</th>
                      <th className="p-3 text-left">صلاحية المعاينة</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60 text-slate-300">
                    {systems.map((sys) => (
                      <tr key={sys.id} className="hover:bg-slate-900/40">
                        <td className="p-3 font-bold text-white">
                          <div>{sys.title.split('(')[0]}</div>
                          <span className="text-[10px] text-slate-500 font-mono" dir="ltr">{sys.titleEn}</span>
                        </td>
                        <td className="p-3 text-slate-400">{sys.categoryName}</td>
                        <td className="p-3 font-mono text-[11px] text-cyan-300">
                          {sys.technologies.slice(0, 3).join(', ')}
                        </td>
                        <td className="p-3 font-mono text-white font-semibold">
                          {sys.highlightStat.value} {sys.highlightStat.label}
                        </td>
                        <td className="p-3 font-mono text-emerald-400 font-semibold">
                          {sys.metrics.uptime}
                        </td>
                        <td className="p-3 text-left">
                          <span className="px-2 py-0.5 rounded-full bg-amber-950/80 text-amber-300 border border-amber-500/40 text-[10px] font-mono">
                            View-Only
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="px-6 py-3 bg-slate-950 border-t border-slate-800 flex items-center justify-between text-xs">
          <span className="text-slate-400">للحصول على نسخة مخصصة من السيرة الذاتية أو تفاصيل معمارية إضافية، يرجى التواصل عبر البريد.</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-medium cursor-pointer"
          >
            إغلاق
          </button>
        </div>

      </div>
    </div>
  );
};
