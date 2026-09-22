import React from 'react';
import { Search, Filter, Layers, CheckCircle2 } from 'lucide-react';
import { SystemCategory } from '../types';

interface FilterBarProps {
  selectedCategory: SystemCategory;
  onSelectCategory: (category: SystemCategory) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  filteredCount: number;
  totalCount: number;
}

const CATEGORIES: { id: SystemCategory; label: string }[] = [
  { id: 'all', label: 'جميع الأنظمة' },
  { id: 'enterprise', label: 'أنظمة المؤسسات (ERP)' },
  { id: 'healthcare', label: 'الرعاية الصحية والعيادات' },
  { id: 'logistics', label: 'اللوجستيات وتتبع الأساطيل' },
  { id: 'fintech', label: 'المالية ونقاط البيع' },
  { id: 'ecommerce', label: 'التجارة وسلاسل التوريد' },
  { id: 'ai', label: 'الذكاء الاصطناعي والمستندات' },
  { id: 'edtech', label: 'التعليم الرقمي والتدريب' },
  { id: 'proptech', label: 'إدارة الأصول والعقارات' },
];

export const FilterBar: React.FC<FilterBarProps> = ({
  selectedCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  filteredCount,
  totalCount,
}) => {
  return (
    <div className="py-6 space-y-4">
      
      {/* Top search & counter row */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
        
        {/* Search input */}
        <div className="relative flex-1 max-w-md">
          <Search className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            id="systems-search-input"
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="ابحث باسم النظام، التقنية المستخدمة، أو المجال..."
            className="w-full pr-10 pl-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-cyan-500 transition-colors"
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange('')}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white px-1.5 py-0.5 rounded bg-slate-800"
            >
              مسح
            </button>
          )}
        </div>

        {/* Counter & Status */}
        <div className="flex items-center gap-2 text-xs text-slate-400 bg-slate-900/60 px-3.5 py-2 rounded-xl border border-slate-800/80 shrink-0">
          <Layers className="w-4 h-4 text-cyan-400" />
          <span>يتم عرض <strong className="text-white font-semibold">{filteredCount}</strong> من أصل <strong className="text-white font-semibold">{totalCount}</strong> نظام</span>
        </div>

      </div>

      {/* Category Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {CATEGORIES.map((cat) => {
          const isSelected = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-medium whitespace-nowrap transition-all cursor-pointer ${
                isSelected
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                  : 'bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 hover:border-slate-700'
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

    </div>
  );
};
