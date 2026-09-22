import React, { useState } from 'react';
import { ProjectSystem, SystemCategory } from '../types';
import { X, Lock, KeyRound, Plus, Trash2, Edit3, RotateCcw, Check, AlertCircle, Eye, EyeOff } from 'lucide-react';

interface OwnerPortalModalProps {
  isOpen: boolean;
  onClose: () => void;
  systems: ProjectSystem[];
  onUpdateSystems: (newSystems: ProjectSystem[]) => void;
  onResetSystems: () => void;
}

export const OwnerPortalModal: React.FC<OwnerPortalModalProps> = ({
  isOpen,
  onClose,
  systems,
  onUpdateSystems,
  onResetSystems,
}) => {
  if (!isOpen) return null;

  const [pin, setPin] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authError, setAuthError] = useState(false);
  const [activeTab, setActiveTab] = useState<'list' | 'add'>('list');

  // Form state for adding new system
  const [title, setTitle] = useState('');
  const [titleEn, setTitleEn] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [category, setCategory] = useState<SystemCategory>('enterprise');
  const [viewOnlyUrl, setViewOnlyUrl] = useState('');
  const [description, setDescription] = useState('');
  const [techs, setTechs] = useState('');
  const [features, setFeatures] = useState('');

  const [showPassword, setShowPassword] = useState(false);

  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault();
    // Passcode set to 127122 as requested, completely hidden from public UI
    if (pin.trim() === '127122') {
      setIsAuthenticated(true);
      setAuthError(false);
    } else {
      setAuthError(true);
    }
  };

  const handleAddNewSystem = (e: React.FormEvent) => {
    e.preventDefault();
    const newSystem: ProjectSystem = {
      id: `sys-${Date.now()}`,
      title: title || 'نظام سحابي جديد',
      titleEn: titleEn || 'New Cloud Enterprise System',
      subtitle: subtitle || 'منظومة سحابية تم تطويرها وهندستها بأعلى معايير الأمان',
      category: category,
      categoryName: category === 'enterprise' ? 'أنظمة المؤسسات' : 'حلول مخصصة',
      status: 'production',
      statusName: 'منظومة حية بالإنتاج',
      description: description || 'تم بناء النظام لخدمة العمليات المتقدمة وربط الفروع والخدمات السحابية.',
      features: features ? features.split('\n').filter(Boolean) : ['إدارة قواعد بيانات متزامنة', 'معمارية سحابية متقدمة', 'حماية وأمان معتمد'],
      technologies: techs ? techs.split(',').map(t => t.trim()) : ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
      architecture: {
        frontend: 'واجهة مستخدم تفاعلية آمنة',
        backend: 'خوادم معالجة مخصصة',
        database: 'قاعدة بيانات علائقية مشفرة',
        caching: 'ذاكرة تخزين مؤقت سريعة',
        security: 'تشفير شامل وصلاحيات مقيدة',
        throughput: 'معالجة عالية الكثافة'
      },
      metrics: {
        uptime: '99.98%',
        latency: '35ms',
        testCoverage: '92%',
        securityAudit: 'Verified Secure'
      },
      viewOnlyUrl: viewOnlyUrl || 'https://demo.viewonly.systems/custom',
      isProtectedView: true,
      previewType: 'custom',
      tags: ['Custom System', 'Enterprise', 'View-Only'],
      year: '2026',
      clientSector: 'قطاع الأعمال والمؤسسات',
      highlightStat: {
        label: 'معدل المعالجة',
        value: '+100K'
      }
    };

    onUpdateSystems([newSystem, ...systems]);
    setActiveTab('list');
    // reset form
    setTitle('');
    setTitleEn('');
    setSubtitle('');
    setViewOnlyUrl('');
    setDescription('');
    setTechs('');
    setFeatures('');
  };

  const handleDeleteSystem = (id: string) => {
    if (confirm('هل أنت متأكد من حذف هذا النظام من قائمة العرض؟')) {
      onUpdateSystems(systems.filter(s => s.id !== id));
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="px-6 py-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-slate-800 text-cyan-400">
              <Lock className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base font-bold text-white">بوابة إدارة الأنظمة (خاصة بالمهندس العامر)</h2>
              <p className="text-xs text-slate-400">إضافة وتعديل روابط الأنظمة المعروضة</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        {!isAuthenticated ? (
          <div className="p-8 text-center max-w-sm mx-auto space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-slate-800/80 border border-slate-700 flex items-center justify-center text-cyan-400 mx-auto">
              <KeyRound className="w-7 h-7" />
            </div>
            <h3 className="text-base font-bold text-white">التحقق من هوية المالك</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              هذه المنطقة مخصصة للمهندس العامر فقط لتحديث قائمة الأنظمة. للزوار، جميع الأنظمة معروضة بوضع القراءة فقط.
            </p>

            <form onSubmit={handleAuth} className="space-y-3 pt-2">
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={pin}
                  onChange={(e) => setPin(e.target.value)}
                  placeholder="أدخل رمز الدخول السري للمالك..."
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-center font-mono text-white tracking-widest focus:outline-none focus:border-cyan-500 text-sm"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 transition-colors p-1"
                  title={showPassword ? 'إخفاء الرمز' : 'إظهار الرمز'}
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>

              {authError && (
                <div className="text-rose-400 text-xs flex items-center justify-center gap-1.5 p-2 rounded-lg bg-rose-950/40 border border-rose-900/50">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>رمز الدخول غير صحيح. الوصول مقيد للمالك فقط.</span>
                </div>
              )}

              <button
                type="submit"
                className="w-full py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-bold transition-colors cursor-pointer"
              >
                تأكيد الدخول
              </button>
            </form>
          </div>
        ) : (
          <div className="flex-1 flex flex-col overflow-hidden">
            {/* Tabs */}
            <div className="px-6 py-2.5 bg-slate-950/60 border-b border-slate-800 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveTab('list')}
                  className={`px-3 py-1.5 rounded-lg font-semibold transition-colors cursor-pointer ${
                    activeTab === 'list' ? 'bg-slate-800 text-cyan-400' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  قائمة الأنظمة ({systems.length})
                </button>
                <button
                  onClick={() => setActiveTab('add')}
                  className={`px-3 py-1.5 rounded-lg font-semibold transition-colors cursor-pointer ${
                    activeTab === 'add' ? 'bg-slate-800 text-cyan-400' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  + إضافة نظام جديد
                </button>
              </div>

              <button
                onClick={onResetSystems}
                title="استعادة الأنظمة الافتراضية"
                className="flex items-center gap-1 text-[11px] text-slate-400 hover:text-amber-400 transition-colors"
              >
                <RotateCcw className="w-3 h-3" />
                <span>استعادة الافتراضي</span>
              </button>
            </div>

            {/* TAB CONTENT */}
            <div className="p-6 overflow-y-auto flex-1 text-xs space-y-4">
              {activeTab === 'list' ? (
                <div className="space-y-2.5">
                  {systems.map((sys) => (
                    <div
                      key={sys.id}
                      className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between gap-3"
                    >
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-white truncate">{sys.title}</span>
                          <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-800 text-cyan-400">
                            {sys.categoryName}
                          </span>
                        </div>
                        <span className="text-[11px] text-slate-500 font-mono block truncate" dir="ltr">
                          {sys.viewOnlyUrl}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        <button
                          onClick={() => handleDeleteSystem(sys.id)}
                          className="p-1.5 rounded-lg hover:bg-rose-950 text-slate-400 hover:text-rose-400 transition-colors"
                          title="حذف هذا النظام"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                /* ADD NEW SYSTEM FORM */
                <form onSubmit={handleAddNewSystem} className="space-y-3">
                  <div>
                    <label className="block text-slate-300 font-medium mb-1">اسم النظام بالعربية *</label>
                    <input
                      type="text"
                      required
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      placeholder="مثال: نظام إدارة الصيدليات والمخازن الذكية"
                      className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-300 font-medium mb-1">الاسم بالإنجليزية</label>
                    <input
                      type="text"
                      value={titleEn}
                      onChange={(e) => setTitleEn(e.target.value)}
                      placeholder="e.g. Smart Pharmacy & Inventory System"
                      className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500 font-mono"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-slate-300 font-medium mb-1">التصنيف</label>
                      <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value as SystemCategory)}
                        className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-cyan-500"
                      >
                        <option value="enterprise">أنظمة المؤسسات (ERP)</option>
                        <option value="healthcare">الرعاية الصحية</option>
                        <option value="logistics">اللوجستيات وتتبع الأساطيل</option>
                        <option value="fintech">المالية ونقاط البيع</option>
                        <option value="ecommerce">التجارة الإلكترونية</option>
                        <option value="ai">الذكاء الاصطناعي</option>
                        <option value="edtech">التعليم الرقمي</option>
                        <option value="proptech">العقارات والأصول</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-slate-300 font-medium mb-1">رابط المعاينة الآمن (View-Only Link)</label>
                      <input
                        type="url"
                        value={viewOnlyUrl}
                        onChange={(e) => setViewOnlyUrl(e.target.value)}
                        placeholder="https://demo.viewonly.systems/your-app"
                        className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500 font-mono"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-slate-300 font-medium mb-1">التقنيات المستخدمة (مفصولة بفاصلة)</label>
                    <input
                      type="text"
                      value={techs}
                      onChange={(e) => setTechs(e.target.value)}
                      placeholder="React, TypeScript, Node.js, PostgreSQL, Docker"
                      className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500 font-mono"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-300 font-medium mb-1">الوصف العام والمجال</label>
                    <textarea
                      rows={2}
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder="وصف مختصر للوظائف المعمارية للنظام..."
                      className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500"
                    ></textarea>
                  </div>
                  <div className="pt-2 flex justify-end gap-2">
                    <button
                      type="button"
                      onClick={() => setActiveTab('list')}
                      className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 hover:text-white"
                    >
                      إلغاء
                    </button>
                    <button
                      type="submit"
                      className="px-5 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold cursor-pointer"
                    >
                      حفظ النظام وإضافته للبورتفوليو
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
