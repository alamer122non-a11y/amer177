import React from 'react';
import { ShieldCheck, Lock, Eye, KeyRound, FileCode, CheckCircle2 } from 'lucide-react';

export const SecurityNoticeBanner: React.FC = () => {
  return (
    <section className="py-10 bg-slate-950 border-t border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/50 border border-amber-500/30 text-xs text-amber-300 mb-3">
            <Lock className="w-3.5 h-3.5 text-amber-400" />
            <span>سياسة حماية حقوق الأنظمة والملكية الفكرية</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            لماذا جميع الأنظمة والروابط معروضة بوضع (View-Only)؟
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
            وفقاً للمعايير الهندسية والأمنية لحماية الأكواد المصدرية والبيانات الخاصة بالعملاء، تم تأمين كافة المنصات البرمجية لتكون للمعاينة البصرية والتفاعلية فقط.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          
          <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/30 transition-all">
            <div className="w-10 h-10 rounded-xl bg-cyan-950 border border-cyan-800/60 text-cyan-400 flex items-center justify-center mb-3.5">
              <Eye className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-white mb-1.5">
              صلاحيات العرض المقيدة (View-Only)
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              تتيح روابط الأنظمة تصفح الشاشات واللوحات التنفيذية، بينما يتم حظر أزرار الإضافة والتعديل والحذف لحماية قواعد البيانات الحية واستقرار النظام.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-emerald-500/30 transition-all">
            <div className="w-10 h-10 rounded-xl bg-emerald-950 border border-emerald-800/60 text-emerald-400 flex items-center justify-center mb-3.5">
              <Lock className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-white mb-1.5">
              حجب المستودعات والأكواد المصدرية
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              الأكواد المصدرية، معمارية الخوارزميات، ومفاتيح الربط البرمجية (API Keys) محمية بالكامل وخاضعة لحقوق الملكية الفكرية، ولا يمكن استعراضها أو تصديرها.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-amber-500/30 transition-all">
            <div className="w-10 h-10 rounded-xl bg-amber-950 border border-amber-800/60 text-amber-400 flex items-center justify-center mb-3.5">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-white mb-1.5">
              بيئات رملية آمنة (Safe Sandboxes)
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              تحتوي المعاينات على محاكيات حية وبيانات تجريبية تحاكي البيئة الإنتاجية الحقيقية مع مقاييس سرعة استجابة فعلية دون المساس ببيانات المؤسسات الفعلية.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
