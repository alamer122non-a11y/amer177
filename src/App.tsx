import React, { useState, useMemo, useEffect } from 'react';
import { ProjectSystem, SystemCategory } from './types';
import { getStoredSystems, saveSystems, resetToDefaultSystems } from './data/systemsData';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { FilterBar } from './components/FilterBar';
import { SystemCard } from './components/SystemCard';
import { ViewOnlyModal } from './components/ViewOnlyModal';
import { ArchitectureModal } from './components/ArchitectureModal';
import { SafeLinkModal } from './components/SafeLinkModal';
import { ContactModal } from './components/ContactModal';
import { OwnerPortalModal } from './components/OwnerPortalModal';
import { ResumeMatrixModal } from './components/ResumeMatrixModal';
import { InfrastructurePulse } from './components/InfrastructurePulse';
import { SecurityNoticeBanner } from './components/SecurityNoticeBanner';
import { Footer } from './components/Footer';
import { Sparkles, AlertCircle, Layers, Lock, ShieldAlert, X } from 'lucide-react';

export default function App() {
  const [systems, setSystems] = useState<ProjectSystem[]>(() => getStoredSystems());
  const [selectedCategory, setSelectedCategory] = useState<SystemCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Modals state
  const [previewSystem, setPreviewSystem] = useState<ProjectSystem | null>(null);
  const [architectureSystem, setArchitectureSystem] = useState<ProjectSystem | null>(null);
  const [safeLinkSystem, setSafeLinkSystem] = useState<ProjectSystem | null>(null);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isOwnerPortalOpen, setIsOwnerPortalOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  // Security Toast for source code protection
  const [securityToast, setSecurityToast] = useState<string | null>(null);

  // Anti-inspection listener to reinforce View-Only policy
  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      // Don't fully block, but notify visitor about View-Only protected source code
      setSecurityToast('🔒 تنبيه الملكية الفكرية: الأكواد المصدرية محمية ومحجوبة. الأنظمة معروضة بوضع المعاينة التفاعلية فقط (View-Only).');
      setTimeout(() => setSecurityToast(null), 4000);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey && e.key === 'u') || e.key === 'F12') {
        setSecurityToast('🛡️ وضع الأمان: الشيفرات المصدرية مقفلة ومحمية بحقوق الملكية الفكرية للمهندس العامر.');
        setTimeout(() => setSecurityToast(null), 4000);
      }
    };

    window.addEventListener('contextmenu', handleContextMenu);
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('contextmenu', handleContextMenu);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // Filtered systems calculation
  const filteredSystems = useMemo(() => {
    return systems.filter((sys) => {
      // Category filter
      if (selectedCategory !== 'all' && sys.category !== selectedCategory) {
        return false;
      }

      // Search query filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const inTitle = sys.title.toLowerCase().includes(q) || sys.titleEn.toLowerCase().includes(q);
        const inSubtitle = sys.subtitle.toLowerCase().includes(q);
        const inDesc = sys.description.toLowerCase().includes(q);
        const inTech = sys.technologies.some((t) => t.toLowerCase().includes(q));
        const inTags = sys.tags.some((t) => t.toLowerCase().includes(q));
        const inSector = sys.clientSector.toLowerCase().includes(q);

        if (!inTitle && !inSubtitle && !inDesc && !inTech && !inTags && !inSector) {
          return false;
        }
      }

      return true;
    });
  }, [systems, selectedCategory, searchQuery]);

  const handleUpdateSystems = (newSystems: ProjectSystem[]) => {
    setSystems(newSystems);
    saveSystems(newSystems);
  };

  const handleResetSystems = () => {
    const defaults = resetToDefaultSystems();
    setSystems(defaults);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-['Cairo',sans-serif]">
      
      {/* Live Regional Infrastructure Telemetry */}
      <InfrastructurePulse />

      {/* Top sticky header */}
      <Header
        onOpenContact={() => setIsContactOpen(true)}
        onOpenOwnerPortal={() => setIsOwnerPortalOpen(true)}
        onOpenResume={() => setIsResumeOpen(true)}
        systemCount={systems.length}
      />

      {/* Hero section */}
      <Hero
        onOpenContact={() => setIsContactOpen(true)}
        onOpenResume={() => setIsResumeOpen(true)}
        systemCount={systems.length}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Filters and search */}
        <FilterBar
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          filteredCount={filteredSystems.length}
          totalCount={systems.length}
        />

        {/* Systems Grid */}
        {filteredSystems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2 pb-12">
            {filteredSystems.map((system) => (
              <SystemCard
                key={system.id}
                system={system}
                onOpenPreview={(sys) => setPreviewSystem(sys)}
                onOpenArchitecture={(sys) => setArchitectureSystem(sys)}
                onOpenSafeLink={(sys) => setSafeLinkSystem(sys)}
              />
            ))}
          </div>
        ) : (
          /* Empty Search State */
          <div className="py-16 text-center rounded-2xl bg-slate-900/50 border border-slate-800 my-8">
            <div className="w-12 h-12 rounded-2xl bg-slate-800 text-slate-400 flex items-center justify-center mx-auto mb-3">
              <AlertCircle className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-white mb-1">لم يتم العثور على أنظمة مطابقة</h3>
            <p className="text-xs text-slate-400 max-w-sm mx-auto mb-4">
              لم نعثر على أي نظام يطابق بحثك الحالي "{searchQuery}". يمكنك مسح البحث أو تغيير التصنيف.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="px-4 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-semibold"
            >
              عرض جميع الأنظمة
            </button>
          </div>
        )}

      </main>

      {/* View-Only Security Notice Banner */}
      <SecurityNoticeBanner />

      {/* Footer */}
      <Footer
        onOpenContact={() => setIsContactOpen(true)}
        onOpenOwnerPortal={() => setIsOwnerPortalOpen(true)}
      />

      {/* Floating Security / IP Toast Notice */}
      {securityToast && (
        <div className="fixed bottom-5 left-5 right-5 sm:right-auto sm:max-w-md z-50 p-3.5 rounded-2xl bg-slate-900/95 border border-cyan-500/40 text-xs text-slate-200 shadow-2xl flex items-center justify-between gap-3 animate-slideUp backdrop-blur-md">
          <div className="flex items-center gap-2.5">
            <Lock className="w-4 h-4 text-cyan-400 shrink-0" />
            <span className="leading-snug">{securityToast}</span>
          </div>
          <button
            onClick={() => setSecurityToast(null)}
            className="p-1 rounded-lg text-slate-400 hover:text-white"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Interactive Live View-Only Sandbox Simulation Modal */}
      <ViewOnlyModal
        system={previewSystem}
        onClose={() => setPreviewSystem(null)}
        onOpenContact={() => setIsContactOpen(true)}
      />

      {/* Architecture & Engineering Specs Modal */}
      <ArchitectureModal
        system={architectureSystem}
        onClose={() => setArchitectureSystem(null)}
        onOpenPreview={(sys) => {
          setArchitectureSystem(null);
          setPreviewSystem(sys);
        }}
      />

      {/* Safe View-Only Link Details Modal */}
      <SafeLinkModal
        system={safeLinkSystem}
        onClose={() => setSafeLinkSystem(null)}
        onOpenLiveSandbox={(sys) => {
          setSafeLinkSystem(null);
          setPreviewSystem(sys);
        }}
      />

      {/* Contact & System Licensing Inquiry Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        selectedSystem={previewSystem || architectureSystem}
      />

      {/* Architect Resume & Systems Matrix Modal */}
      <ResumeMatrixModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        systems={systems}
        onOpenContact={() => {
          setIsResumeOpen(false);
          setIsContactOpen(true);
        }}
      />

      {/* Owner Portal Modal for Eng. Al-Amer */}
      <OwnerPortalModal
        isOpen={isOwnerPortalOpen}
        onClose={() => setIsOwnerPortalOpen(false)}
        systems={systems}
        onUpdateSystems={handleUpdateSystems}
        onResetSystems={handleResetSystems}
      />

    </div>
  );
}
