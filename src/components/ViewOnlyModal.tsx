import React, { useState } from 'react';
import { ProjectSystem } from '../types';
import { 
  X, 
  Lock, 
  ShieldAlert, 
  Monitor, 
  Tablet, 
  Smartphone, 
  ExternalLink, 
  RotateCw, 
  AlertCircle, 
  CheckCircle2, 
  Sliders, 
  BarChart3, 
  DollarSign, 
  Users, 
  Package, 
  FileText, 
  Plus, 
  Edit3, 
  Trash2, 
  HeartPulse, 
  Truck, 
  Bot, 
  Sparkles, 
  ShoppingCart, 
  GraduationCap, 
  Building2, 
  Search, 
  Calendar,
  Send,
  Printer
} from 'lucide-react';

interface ViewOnlyModalProps {
  system: ProjectSystem | null;
  onClose: () => void;
  onOpenContact: () => void;
}

type DeviceMode = 'desktop' | 'tablet' | 'mobile';

export const ViewOnlyModal: React.FC<ViewOnlyModalProps> = ({
  system,
  onClose,
  onOpenContact,
}) => {
  if (!system) return null;

  const [device, setDevice] = useState<DeviceMode>('desktop');
  const [activeTab, setActiveTab] = useState<'simulation' | 'external'>('simulation');
  const [subTab, setSubTab] = useState<string>('overview');
  const [readOnlyNotice, setReadOnlyNotice] = useState<string | null>(null);
  const [aiQuery, setAiQuery] = useState('');
  const [aiAnswer, setAiAnswer] = useState<string | null>(null);

  const triggerBlockedAction = (actionName: string) => {
    setReadOnlyNotice(`⚠️ تم حظر [${actionName}]: هذا النظام متاح بوضع المعاينة والعرض فقط (View-Only). لا يمكن تعديل أو حفظ أي بيانات لحماية النظام.`);
    setTimeout(() => {
      setReadOnlyNotice(null);
    }, 4500);
  };

  const handleSimulateAi = (question: string) => {
    setAiQuery(question);
    setAiAnswer('جاري استرجاع البند من الوثيقة القانونية عبر البحث الدلالي...');
    setTimeout(() => {
      setAiAnswer('بناءً على وثيقة العقد الممسوحة: يلتزم الطرف الثاني بتسليم المخرجات خلال 45 يوماً من تاريخ التوقيع، وتخضع جميع الدفعات لخصم 5% كضمان حسن تنفيذ (البند 14.2).');
    }, 700);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/90 backdrop-blur-md overflow-hidden animate-fadeIn">
      
      {/* Modal Container */}
      <div className="relative w-full max-w-7xl h-[95vh] flex flex-col bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden">
        
        {/* Top View-Only Security Alert Banner */}
        <div className="bg-gradient-to-r from-amber-950 via-slate-900 to-amber-950 px-4 py-2 border-b border-amber-500/30 flex items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-amber-300">
            <Lock className="w-4 h-4 text-amber-400 shrink-0" />
            <span className="font-bold">وضع المعاينة والعرض فقط (View-Only Mode)</span>
            <span className="hidden md:inline text-amber-200/70">
              — هذا النظام للعرض التوضيحي والمعاينة التفاعلية فقط؛ الكود المصدري محجوب وصلاحيات التعديل مقفلة بالكامل.
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-emerald-950/80 text-emerald-400 border border-emerald-500/40 text-[11px] font-mono">
              Live Demo: Safe Sandbox
            </span>
            <button
              onClick={onClose}
              className="p-1 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Modal Header & Navigation Bar */}
        <div className="px-4 py-3 bg-slate-950 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3">
          
          {/* Title & Status */}
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-cyan-950/80 border border-cyan-800/80 text-cyan-400">
              <Lock className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
                {system.title}
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-800 text-cyan-300 border border-slate-700">
                  {system.categoryName}
                </span>
              </h2>
              <p className="text-[11px] text-slate-400 font-mono">
                Session: ReadOnly-Visitor-Encrypted | Uptime: {system.metrics.uptime}
              </p>
            </div>
          </div>

          {/* Device Switcher (Desktop, Tablet, Mobile) */}
          <div className="flex items-center gap-1 p-1 rounded-xl bg-slate-900 border border-slate-800">
            <button
              onClick={() => setDevice('desktop')}
              className={`p-1.5 rounded-lg text-xs flex items-center gap-1.5 transition-all cursor-pointer ${
                device === 'desktop' ? 'bg-cyan-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
              }`}
              title="عرض شاشة الحاسب (Desktop)"
            >
              <Monitor className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">حاسب</span>
            </button>
            <button
              onClick={() => setDevice('tablet')}
              className={`p-1.5 rounded-lg text-xs flex items-center gap-1.5 transition-all cursor-pointer ${
                device === 'tablet' ? 'bg-cyan-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
              }`}
              title="عرض جهاز لوحي (Tablet)"
            >
              <Tablet className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">لوحي</span>
            </button>
            <button
              onClick={() => setDevice('mobile')}
              className={`p-1.5 rounded-lg text-xs flex items-center gap-1.5 transition-all cursor-pointer ${
                device === 'mobile' ? 'bg-cyan-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
              }`}
              title="عرض هاتف محمول (Mobile)"
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">هاتف</span>
            </button>
          </div>

          {/* Action to switch between interactive sandbox and external safe link */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('simulation')}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                activeTab === 'simulation'
                  ? 'bg-slate-800 text-cyan-400 border border-cyan-500/40'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              المحاكي التفاعلي المباشر
            </button>
            <button
              onClick={() => setActiveTab('external')}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                activeTab === 'external'
                  ? 'bg-slate-800 text-cyan-400 border border-cyan-500/40'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              رابط العرض السحابي
            </button>
          </div>

        </div>

        {/* Read-Only Restrictive Action Toast Alert */}
        {readOnlyNotice && (
          <div className="bg-rose-950/90 border-b border-rose-500/50 px-4 py-2.5 flex items-center justify-between text-xs text-rose-200 animate-slideDown">
            <div className="flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" />
              <span className="font-medium">{readOnlyNotice}</span>
            </div>
            <button
              onClick={() => setReadOnlyNotice(null)}
              className="text-rose-400 hover:text-white px-2 py-0.5 rounded bg-rose-900/50 text-[11px]"
            >
              إغلاق
            </button>
          </div>
        )}

        {/* Workspace Frame Area */}
        <div className="flex-1 bg-slate-950/95 overflow-y-auto p-3 sm:p-6 flex flex-col items-center justify-start">
          
          <div
            className={`w-full transition-all duration-300 rounded-2xl border border-slate-800 bg-slate-900 shadow-2xl overflow-hidden flex flex-col ${
              device === 'desktop'
                ? 'max-w-6xl h-full min-h-[580px]'
                : device === 'tablet'
                ? 'max-w-2xl h-full min-h-[580px]'
                : 'max-w-sm h-full min-h-[580px]'
            }`}
          >
            
            {/* Simulated Browser / System Navigation Chrome */}
            <div className="px-4 py-2.5 bg-slate-950 border-b border-slate-800 flex items-center justify-between gap-3">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/70 inline-block"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70 inline-block"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70 inline-block"></span>
              </div>

              {/* Secure Address Bar */}
              <div className="flex-1 max-w-md mx-auto px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-[11px] text-slate-300 font-mono flex items-center justify-between">
                <div className="flex items-center gap-1.5 truncate">
                  <Lock className="w-3 h-3 text-emerald-400 shrink-0" />
                  <span className="text-emerald-400 font-semibold">https://</span>
                  <span className="text-slate-300 truncate">secure-view.alamer-systems.com/{system.id}</span>
                </div>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-amber-950/80 text-amber-300 border border-amber-600/40 shrink-0">
                  READ ONLY
                </span>
              </div>

              <div className="text-[11px] text-slate-400 flex items-center gap-1 font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                <span>ONLINE</span>
              </div>
            </div>

            {/* TAB: EXTERNAL SAFE LINK VIEW */}
            {activeTab === 'external' ? (
              <div className="p-6 sm:p-10 flex flex-col items-center justify-center text-center flex-1">
                <div className="w-16 h-16 rounded-2xl bg-cyan-950/80 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-4 shadow-xl">
                  <ExternalLink className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  رابط المعاينة السحابية الآمن (View-Only Cloud Demo)
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 max-w-md mb-6 leading-relaxed">
                  هذا الرابط موجه مباشرة إلى خادم العرض التجريبي بوضع القراءة فقط؛ تم تأمين الجلسة لمنع أي تعديل على قواعد البيانات أو استعراض الشيفرة البرمجية.
                </p>

                <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-cyan-400 flex items-center gap-3 mb-6 max-w-lg w-full justify-between">
                  <div className="flex items-center gap-2 truncate">
                    <Lock className="w-4 h-4 text-amber-400 shrink-0" />
                    <span className="truncate">{system.viewOnlyUrl}</span>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 shrink-0">
                    محمي ومفحوص
                  </span>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-3">
                  <button
                    onClick={() => triggerBlockedAction('تعديل الرابط المباشر')}
                    className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium cursor-pointer"
                  >
                    فحص شهادة الأمان (SSL & RBAC)
                  </button>
                  <button
                    onClick={() => setActiveTab('simulation')}
                    className="px-5 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-bold shadow-md cursor-pointer"
                  >
                    العودة للمحاكي التفاعلي المباشر
                  </button>
                </div>
              </div>
            ) : (
              /* TAB: INTERACTIVE SIMULATION */
              <div className="flex-1 flex flex-col overflow-y-auto">
                
                {/* Simulated System Top Sub-Nav */}
                <div className="px-4 py-2.5 bg-slate-950/60 border-b border-slate-800/80 flex items-center justify-between gap-3 text-xs">
                  <div className="flex items-center gap-2 font-bold text-slate-200">
                    <span className="text-cyan-400">{system.title.split(' ')[0]}</span>
                    <span className="text-slate-500">|</span>
                    <span className="text-slate-400 text-[11px]">لوحة التحكم التفاعلية</span>
                  </div>

                  {/* Simulator action buttons demonstrating view-only restrictions */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => triggerBlockedAction('إضافة سجل جديد')}
                      className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-cyan-950/60 hover:bg-cyan-900/60 text-cyan-300 border border-cyan-800/50 text-[11px] font-medium transition-colors cursor-pointer"
                    >
                      <Plus className="w-3 h-3" />
                      <span>إضافة جديد</span>
                    </button>
                    <button
                      onClick={() => triggerBlockedAction('تعديل البيانات')}
                      className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-[11px] font-medium transition-colors cursor-pointer"
                    >
                      <Edit3 className="w-3 h-3" />
                      <span>تعديل</span>
                    </button>
                  </div>
                </div>

                {/* DYNAMIC CONTENT PER SYSTEM TYPE */}
                <div className="p-4 sm:p-6 flex-1 space-y-6">
                  
                  {/* TYPE: ERP SYSTEM */}
                  {system.previewType === 'erp' && (
                    <div className="space-y-6">
                      {/* Metric widgets */}
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                          <span className="text-[11px] text-slate-400 block mb-1">المبيعات الشهرية</span>
                          <span className="text-base sm:text-lg font-bold text-emerald-400 font-mono">1,420,890 ر.س</span>
                          <span className="text-[10px] text-emerald-400/80 block mt-1">+14.2% مقارنة بالسابق</span>
                        </div>
                        <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                          <span className="text-[11px] text-slate-400 block mb-1">حجم المخزون النشط</span>
                          <span className="text-base sm:text-lg font-bold text-white font-mono">28,450 صنف</span>
                          <span className="text-[10px] text-cyan-400 block mt-1">4 فروع ومستودعات</span>
                        </div>
                        <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                          <span className="text-[11px] text-slate-400 block mb-1">الفواتير الضريبية</span>
                          <span className="text-base sm:text-lg font-bold text-white font-mono">4,120 فاتورة</span>
                          <span className="text-[10px] text-slate-400 block mt-1">مطابقة ومعتمدة 100%</span>
                        </div>
                        <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                          <span className="text-[11px] text-slate-400 block mb-1">الربح الصافي التقديري</span>
                          <span className="text-base sm:text-lg font-bold text-cyan-400 font-mono">318,400 ر.س</span>
                          <span className="text-[10px] text-slate-400 block mt-1">هامش ربحي 22.4%</span>
                        </div>
                      </div>

                      {/* Live Data Table with Read-Only Badge */}
                      <div className="rounded-xl border border-slate-800 bg-slate-950 overflow-hidden">
                        <div className="px-4 py-3 border-b border-slate-800 flex items-center justify-between">
                          <span className="text-xs font-bold text-white">آخر الفواتير والمعاملات الصادرة (للقراءة فقط)</span>
                          <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-400 font-mono">
                            Auto-Sync: 45ms
                          </span>
                        </div>
                        <div className="overflow-x-auto">
                          <table className="w-full text-right text-xs">
                            <thead className="bg-slate-900/60 text-slate-400 text-[11px] border-b border-slate-800">
                              <tr>
                                <th className="p-3">رقم الفاتورة</th>
                                <th className="p-3">العميل / المؤسسة</th>
                                <th className="p-3">الفرع</th>
                                <th className="p-3">المبلغ</th>
                                <th className="p-3">الحالة</th>
                                <th className="p-3 text-left">الإجراء</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-800/60 text-slate-300">
                              {[
                                { id: 'INV-2026-981', client: 'مجموعة المدى للمقاولات', branch: 'الفرع الرئيسي - الرياض', amount: '84,500 ر.س', status: 'مدفوعة بالكامل' },
                                { id: 'INV-2026-982', client: 'شركة الفنار للتوزيع', branch: 'مستودع جدة المركزي', amount: '128,000 ر.س', status: 'معتمدة - آجل' },
                                { id: 'INV-2026-983', client: 'سلسلة أسواق الواحة', branch: 'فرع الخبر والدمام', amount: '34,200 ر.س', status: 'مدفوعة بالكامل' },
                              ].map((row, idx) => (
                                <tr key={idx} className="hover:bg-slate-900/40">
                                  <td className="p-3 font-mono text-cyan-400">{row.id}</td>
                                  <td className="p-3 font-medium text-white">{row.client}</td>
                                  <td className="p-3 text-slate-400">{row.branch}</td>
                                  <td className="p-3 font-bold font-mono text-emerald-400">{row.amount}</td>
                                  <td className="p-3">
                                    <span className="px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-400 text-[10px] border border-emerald-500/30">
                                      {row.status}
                                    </span>
                                  </td>
                                  <td className="p-3 text-left">
                                    <button
                                      onClick={() => triggerBlockedAction('تعديل الفاتورة')}
                                      className="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 text-[10px] cursor-pointer"
                                    >
                                      عرض
                                    </button>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* TYPE: CLINIC SYSTEM */}
                  {system.previewType === 'clinic' && (
                    <div className="space-y-6">
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                          <span className="text-[11px] text-slate-400 block mb-1">المراجعين اليوم</span>
                          <span className="text-base sm:text-lg font-bold text-cyan-400 font-mono">142 مريض</span>
                        </div>
                        <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                          <span className="text-[11px] text-slate-400 block mb-1">العيادات النشطة</span>
                          <span className="text-base sm:text-lg font-bold text-emerald-400 font-mono">12 عيادة</span>
                        </div>
                        <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                          <span className="text-[11px] text-slate-400 block mb-1">الوصفات المصروفة</span>
                          <span className="text-base sm:text-lg font-bold text-white font-mono">89 وصفة</span>
                        </div>
                        <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                          <span className="text-[11px] text-slate-400 block mb-1">فحوصات المختبر</span>
                          <span className="text-base sm:text-lg font-bold text-amber-400 font-mono">34 عينة</span>
                        </div>
                      </div>

                      {/* Doctor Queue Simulation */}
                      <div className="rounded-xl border border-slate-800 bg-slate-950 p-4">
                        <h4 className="text-xs font-bold text-white mb-3">قائمة الانتظار السريرية (طبيب باطنية واستشاري)</h4>
                        <div className="space-y-2">
                          {[
                            { name: 'محمد عبد الله الشمري', time: '10:15 ص', clinic: 'عيادة الباطنية 2', doctor: 'د. طارق العتيبي', status: 'في غرفة الفحص' },
                            { name: 'سارة خالد الدوسري', time: '10:30 ص', clinic: 'عيادة الأطفال', doctor: 'د. منى الهاجري', status: 'بانتظار التحليل' },
                            { name: 'أحمد فهد القحطاني', time: '10:45 ص', clinic: 'عيادة القلب', doctor: 'د. زياد السبيعي', status: 'مؤكد في الاستقبال' },
                          ].map((item, idx) => (
                            <div key={idx} className="p-3 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-between text-xs">
                              <div className="flex items-center gap-3">
                                <HeartPulse className="w-4 h-4 text-rose-400" />
                                <div>
                                  <span className="font-bold text-white block">{item.name}</span>
                                  <span className="text-[11px] text-slate-400">{item.clinic} - {item.doctor}</span>
                                </div>
                              </div>
                              <div className="flex items-center gap-2">
                                <span className="text-[11px] text-slate-400 font-mono">{item.time}</span>
                                <span className="px-2 py-0.5 rounded-full bg-cyan-950 text-cyan-300 text-[10px]">
                                  {item.status}
                                </span>
                                <button
                                  onClick={() => triggerBlockedAction('فتح السجل السريري')}
                                  className="px-2 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 text-[10px]"
                                >
                                  معاينة الملف
                                </button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* TYPE: FLEET LOGISTICS */}
                  {system.previewType === 'fleet' && (
                    <div className="space-y-6">
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                          <span className="text-[11px] text-slate-400 block mb-1">الشاحنات على الطريق</span>
                          <span className="text-base sm:text-lg font-bold text-emerald-400 font-mono">184 شاحنة</span>
                        </div>
                        <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                          <span className="text-[11px] text-slate-400 block mb-1">الشحنات المكتملة</span>
                          <span className="text-base sm:text-lg font-bold text-cyan-400 font-mono">1,890 شحنة</span>
                        </div>
                        <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                          <span className="text-[11px] text-slate-400 block mb-1">متوسط كفاءة الوقود</span>
                          <span className="text-base sm:text-lg font-bold text-white font-mono">94.2%</span>
                        </div>
                        <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                          <span className="text-[11px] text-slate-400 block mb-1">تنبيهات الصيانة</span>
                          <span className="text-base sm:text-lg font-bold text-amber-400 font-mono">2 تنبيه</span>
                        </div>
                      </div>

                      {/* Fleet Telemetry stream */}
                      <div className="rounded-xl border border-slate-800 bg-slate-950 p-4">
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="text-xs font-bold text-white flex items-center gap-2">
                            <Truck className="w-4 h-4 text-cyan-400" />
                            <span>تتبع حركة الأسطول اللحظي (IoT Live Telemetry)</span>
                          </h4>
                          <span className="text-[10px] text-slate-400 font-mono">MQTT: Connected</span>
                        </div>
                        <div className="space-y-2.5">
                          {[
                            { plate: 'أ د ر 5041', route: 'الرياض ➔ الدمام (السريع)', speed: '88 كم/س', temp: '-19°C (مبردة)', fuel: '78%', status: 'على المسار المحدد' },
                            { plate: 'ب ص ك 9912', route: 'جدة ➔ مكة المكرمة', speed: '62 كم/س', temp: '24°C (جاف)', fuel: '85%', status: 'تفريغ حمولة' },
                            { plate: 'ح ع م 3180', route: 'المدينة المنورة ➔ ينبع', speed: '90 كم/س', temp: '-18°C (مبردة)', fuel: '45%', status: 'على المسار المحدد' },
                          ].map((truck, idx) => (
                            <div key={idx} className="p-3 rounded-lg bg-slate-900 border border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs">
                              <div>
                                <span className="font-mono font-bold text-cyan-300 block">{truck.plate}</span>
                                <span className="text-[11px] text-slate-400">{truck.route}</span>
                              </div>
                              <div className="flex items-center gap-3 text-[11px]">
                                <span className="font-mono text-white">السرعة: {truck.speed}</span>
                                <span className="font-mono text-cyan-400">الحرارة: {truck.temp}</span>
                                <span className="font-mono text-emerald-400">الوقود: {truck.fuel}</span>
                              </div>
                              <button
                                onClick={() => triggerBlockedAction('إعادة توجيه الشاحنة')}
                                className="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 text-[10px] cursor-pointer"
                              >
                                خريطة المسار
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* TYPE: POS FINFLOW */}
                  {system.previewType === 'pos' && (
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                        {/* Items Grid */}
                        <div className="md:col-span-8 rounded-xl border border-slate-800 bg-slate-950 p-4">
                          <h4 className="text-xs font-bold text-white mb-3">شاشة الكاشير السريعة (معاينة الأصناف)</h4>
                          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                            {[
                              { name: 'قهوة اسبريسو مختصة', price: '16.00 ر.س', code: 'ITM-01' },
                              { name: 'وجبة غداء فاخرة', price: '45.00 ر.س', code: 'ITM-02' },
                              { name: 'ساندوتش دجاج مشوي', price: '24.00 ر.س', code: 'ITM-03' },
                              { name: 'عصير طبيعي طازج', price: '14.00 ر.س', code: 'ITM-04' },
                              { name: 'حلى كيك الشوكولاتة', price: '22.00 ر.س', code: 'ITM-05' },
                              { name: 'مياه معدنية 500 مل', price: '3.00 ر.س', code: 'ITM-06' },
                            ].map((item, idx) => (
                              <button
                                key={idx}
                                onClick={() => triggerBlockedAction('إضافة صنف إلى الفاتورة')}
                                className="p-3 rounded-lg bg-slate-900 border border-slate-800 hover:border-cyan-500/50 text-right transition-all cursor-pointer"
                              >
                                <span className="text-[10px] text-slate-500 font-mono block">{item.code}</span>
                                <span className="text-xs font-bold text-white block mt-0.5">{item.name}</span>
                                <span className="text-xs text-emerald-400 font-mono font-bold block mt-1">{item.price}</span>
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Cart & ZATCA Receipt Preview */}
                        <div className="md:col-span-4 rounded-xl border border-slate-800 bg-slate-950 p-4 flex flex-col justify-between">
                          <div>
                            <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-3">
                              <span className="text-xs font-bold text-white">الفاتورة الضريبية المبسطة</span>
                              <span className="text-[10px] text-emerald-400 font-mono">#08942</span>
                            </div>
                            <div className="space-y-1.5 text-xs text-slate-300">
                              <div className="flex justify-between">
                                <span>المجموع الفرعي:</span>
                                <span className="font-mono">85.00 ر.س</span>
                              </div>
                              <div className="flex justify-between">
                                <span>ضريبة القيمة المضافة (15%):</span>
                                <span className="font-mono">12.75 ر.س</span>
                              </div>
                              <div className="flex justify-between font-bold text-white pt-2 border-t border-slate-800">
                                <span>الإجمالي النهائي:</span>
                                <span className="font-mono text-emerald-400 text-sm">97.75 ر.س</span>
                              </div>
                            </div>
                            <div className="mt-4 p-3 rounded bg-slate-900 border border-slate-800 text-center">
                              <span className="text-[10px] text-slate-400 block mb-1">رمز الاستجابة السريع المشفر (ZATCA QR)</span>
                              <div className="w-20 h-20 mx-auto bg-slate-800 border border-slate-700 rounded flex items-center justify-center text-[10px] text-slate-400 font-mono">
                                [QR CODE]
                              </div>
                            </div>
                          </div>

                          <div className="mt-4 space-y-2">
                            <button
                              onClick={() => triggerBlockedAction('طباعة إيصال بيع')}
                              className="w-full py-2 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-bold transition-colors cursor-pointer"
                            >
                              إصدار الفاتورة وطباعة (تجريبي)
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* TYPE: DOCUBRAIN AI */}
                  {system.previewType === 'docubrain' && (
                    <div className="space-y-5">
                      <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                        <div className="flex items-center gap-2 mb-2 text-cyan-400">
                          <Bot className="w-5 h-5" />
                          <h4 className="text-xs font-bold text-white">محاكي استعلام المستندات والعقود بالذكاء الاصطناعي</h4>
                        </div>
                        <p className="text-xs text-slate-400 mb-4">
                          اختر أحد الأسئلة النموذجية لمعاينة استخراج البنود من العقود المشفرة:
                        </p>

                        <div className="flex flex-wrap gap-2 mb-4">
                          <button
                            onClick={() => handleSimulateAi('ما هي شروط تسليم المشروع وغرامات التأخير؟')}
                            className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 text-xs cursor-pointer"
                          >
                            ما هي شروط تسليم المشروع وغرامات التأخير؟
                          </button>
                          <button
                            onClick={() => handleSimulateAi('ما هي صلاحيات فسخ العقد دون إشعار مسبق؟')}
                            className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 text-xs cursor-pointer"
                          >
                            ما هي صلاحيات فسخ العقد دون إشعار مسبق؟
                          </button>
                          <button
                            onClick={() => handleSimulateAi('ما هو الحد الأقصى للمسؤولية المالية والتعويض؟')}
                            className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 text-xs cursor-pointer"
                          >
                            ما هو الحد الأقصى للمسؤولية المالية والتعويض؟
                          </button>
                        </div>

                        {aiAnswer && (
                          <div className="p-3.5 rounded-xl bg-cyan-950/40 border border-cyan-500/30 text-xs space-y-2 animate-fadeIn">
                            <div className="flex items-center gap-2 text-cyan-400 font-bold">
                              <Sparkles className="w-4 h-4" />
                              <span>استجابة المحرك الذكي (مستخرجة من العقد رقم #CT-409):</span>
                            </div>
                            <p className="text-slate-200 leading-relaxed">{aiAnswer}</p>
                            <span className="text-[10px] text-slate-500 font-mono block">
                              Source Match Score: 98.4% | Model: Vector Embeddings + RAG
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* GENERIC SYSTEM SIMULATION (Ecommerce, PropTech, EdTech) */}
                  {(system.previewType === 'ecommerce' || system.previewType === 'edtech' || system.previewType === 'proptech' || system.previewType === 'custom') && (
                    <div className="space-y-6">
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                          <span className="text-[11px] text-slate-400 block mb-1">العمليات النشطة</span>
                          <span className="text-base sm:text-lg font-bold text-cyan-400 font-mono">1,240 سجل</span>
                        </div>
                        <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                          <span className="text-[11px] text-slate-400 block mb-1">سرعة الاستجابة</span>
                          <span className="text-base sm:text-lg font-bold text-emerald-400 font-mono">{system.metrics.latency}</span>
                        </div>
                        <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                          <span className="text-[11px] text-slate-400 block mb-1">التوافق والأمان</span>
                          <span className="text-base sm:text-lg font-bold text-white font-mono">Enterprise A+</span>
                        </div>
                        <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                          <span className="text-[11px] text-slate-400 block mb-1">جاهزية النظام</span>
                          <span className="text-base sm:text-lg font-bold text-cyan-400 font-mono">{system.metrics.uptime}</span>
                        </div>
                      </div>

                      <div className="p-4 rounded-xl border border-slate-800 bg-slate-950">
                        <h4 className="text-xs font-bold text-white mb-2">الوحدات الوظيفية المتاحة بالمعاينة (View-Only)</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {system.features.map((feat, idx) => (
                            <div key={idx} className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-between text-xs">
                              <span className="text-slate-300">{feat}</span>
                              <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-800 text-slate-400">نشط</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Bottom Security Watermark in Simulation Canvas */}
                  <div className="mt-8 p-3 rounded-xl bg-slate-950/80 border border-slate-800/80 text-center text-xs text-slate-500 flex items-center justify-center gap-2">
                    <Lock className="w-3.5 h-3.5 text-amber-500" />
                    <span>جلسة معاينة مقيدة (View-Only Mode) — لا يتوفر وصول إلى الكود المصدري أو صلاحيات الكتابة.</span>
                  </div>

                </div>

              </div>
            )}

          </div>

        </div>

        {/* Modal Bottom Bar */}
        <div className="px-4 py-3 bg-slate-950 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="text-slate-400 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span>لطلب ترخيص هذا النظام أو تخصيصه لمؤسستك، تواصل مع المهندس العامر.</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 text-xs font-medium cursor-pointer"
            >
              إغلاق المعاينة
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenContact();
              }}
              className="px-4 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-bold cursor-pointer"
            >
              طلب ترخيص النظام
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
