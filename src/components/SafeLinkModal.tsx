import React, { useState } from 'react';
import { ProjectSystem } from '../types';
import { X, Lock, ExternalLink, Copy, Check, ShieldCheck, AlertTriangle } from 'lucide-react';

interface SafeLinkModalProps {
  system: ProjectSystem | null;
  onClose: () => void;
  onOpenLiveSandbox: (system: ProjectSystem) => void;
}

export const SafeLinkModal: React.FC<SafeLinkModalProps> = ({
  system,
  onClose,
  onOpenLiveSandbox,
}) => {
  if (!system) return null;

  const [copied, setCopied] = useState(false);

  const copyUrl = () => {
    navigator.clipboard.writeText(system.viewOnlyUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-lg bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden">
        
        {/* Header */}
        <div className="px-6 py-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-amber-950/60 border border-amber-500/30 text-amber-400">
              <Lock className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base font-bold text-white">رابط المعاينة الآمن (View-Only)</h2>
              <p className="text-xs text-slate-400 font-mono">{system.titleEn}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-4">
          
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
            <span className="text-xs text-slate-400 font-medium block">رابط النظام المخصص للمعاينة التوضيحية:</span>
            <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-900 border border-slate-700/80 font-mono text-xs text-cyan-300">
              <Lock className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span className="truncate flex-1" dir="ltr">{system.viewOnlyUrl}</span>
              <button
                onClick={copyUrl}
                className="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs flex items-center gap-1 shrink-0 cursor-pointer"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'تم النسخ' : 'نسخ'}</span>
              </button>
            </div>
          </div>

          {/* Security details checklist */}
          <div className="space-y-2 text-xs text-slate-300">
            <div className="flex items-start gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span><strong>وضع القراءة فقط:</strong> جلسات التصفح مقفلة بصلاحيات Viewer فقط بدون أزرار تعديل.</span>
            </div>
            <div className="flex items-start gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span><strong>حجب الأكواد:</strong> المستودعات البرمجية والمفاتيح السرية معزولة تماماً في بيئة الإنتاج.</span>
            </div>
            <div className="flex items-start gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span><strong>بيانات تجريبية آمنة:</strong> البيانات المعروضة في الرابط هي بيانات عينة معزولة (Sandbox).</span>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-slate-950 border-t border-slate-800 flex items-center justify-between gap-3">
          <button
            onClick={() => {
              onClose();
              onOpenLiveSandbox(system);
            }}
            className="text-xs text-cyan-400 hover:underline cursor-pointer"
          >
            أو جرب المحاكي التفاعلي المدمج
          </button>
          
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold cursor-pointer"
          >
            حسناً، فهمت
          </button>
        </div>

      </div>
    </div>
  );
};
