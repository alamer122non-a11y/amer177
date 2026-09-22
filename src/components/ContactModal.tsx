import React, { useState } from 'react';
import { X, Mail, Send, CheckCircle2, User, Building, MessageSquare, Phone, Lock } from 'lucide-react';
import { ProjectSystem } from '../types';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedSystem?: ProjectSystem | null;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  selectedSystem,
}) => {
  if (!isOpen) return null;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [topic, setTopic] = useState(
    selectedSystem ? `طلب ترخيص / معاينة نظام: ${selectedSystem.title}` : 'طلب ترخيص أو بناء نظام مخصص'
  );
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Open mailto link as fallback to direct email
    const subject = encodeURIComponent(`[استفسار أنظمة] ${topic} - ${name}`);
    const body = encodeURIComponent(
      `الاسم: ${name}\nالشركة/المؤسسة: ${company}\nالبريد: ${email}\nالهاتف: ${phone}\nالموضوع: ${topic}\n\nالرسالة:\n${message}`
    );
    window.location.href = `mailto:alamer122non@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-lg bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden">
        
        {/* Header */}
        <div className="px-6 py-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-cyan-950 border border-cyan-800 text-cyan-400">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base font-bold text-white">تواصل مع م. العامر</h2>
              <p className="text-xs text-slate-400 font-mono">alamer122non@gmail.com</p>
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
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-white">تم تجهيز وإرسال الطلب بنجاح</h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                شكراً لتواصلك. تم فتح تطبيق البريد لإرسال رسالتك إلى <strong className="text-cyan-400">alamer122non@gmail.com</strong>، وسنقوم بالرد عليكم خلال أقل من 24 ساعة عمل.
              </p>
              <button
                onClick={onClose}
                className="mt-4 px-6 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold"
              >
                إغلاق النافذة
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-300 font-medium mb-1">الاسم الكامل *</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="مثال: عبد العزيز المنصور"
                    className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500"
                  />
                </div>
                <div>
                  <label className="block text-slate-300 font-medium mb-1">البريد الإلكتروني *</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="example@company.com"
                    className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500 font-mono"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-300 font-medium mb-1">الشركة أو الجهة</label>
                  <input
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="اسم الشركة أو المؤسسة"
                    className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500"
                  />
                </div>
                <div>
                  <label className="block text-slate-300 font-medium mb-1">رقم الهاتف / واتساب</label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+966 5X XXX XXXX"
                    className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500 font-mono"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-300 font-medium mb-1">نوع الطلب أو الاستفسار *</label>
                <select
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-cyan-500"
                >
                  <option value="طلب ترخيص أحد الأنظمة المعروضة">طلب ترخيص أحد الأنظمة المعروضة (View-Only License)</option>
                  <option value="طلب بناء نظام مخصص لمؤسستنا">طلب بناء نظام مخصص من الصفر لمؤسستنا</option>
                  <option value="طلب جلسة استشارة معمارية وتقنية">طلب جلسة استشارة معمارية وتقنية</option>
                  <option value="استفسار عام حول المشاريع">استفسار عام حول المشاريع والأعمال السابقة</option>
                </select>
              </div>

              <div>
                <label className="block text-slate-300 font-medium mb-1">تفاصيل الرسالة أو متطلبات المشروع</label>
                <textarea
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="اكتب نبذة عن احتياجك، عدد المستخدمين المتوقع، أو النظام الذي ترغب بترخيصه..."
                  className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500"
                ></textarea>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                <a
                  href={`https://wa.me/?text=${encodeURIComponent(`السلام عليكم م. العامر، أرغب بالاستفسار عن ${topic}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-emerald-900/60 hover:bg-emerald-800 text-emerald-300 border border-emerald-500/40 font-semibold flex items-center justify-center gap-2 transition-colors text-xs"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                  <span>تواصل عبر واتساب</span>
                </a>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md shadow-cyan-950"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>إرسال عبر البريد الإلكتروني</span>
                </button>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};
