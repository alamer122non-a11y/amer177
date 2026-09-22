import React, { useState, useEffect } from 'react';
import { ShieldCheck, Activity, Wifi, Server, CheckCircle2, Lock } from 'lucide-react';

export const InfrastructurePulse: React.FC = () => {
  // Simulate live slight ping fluctuations for realism
  const [pings, setPings] = useState({
    riyadh: 14,
    jeddah: 16,
    frankfurt: 38,
    uptime: '99.98%'
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setPings({
        riyadh: 12 + Math.floor(Math.random() * 5),
        jeddah: 15 + Math.floor(Math.random() * 4),
        frankfurt: 36 + Math.floor(Math.random() * 6),
        uptime: '99.98%'
      });
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-slate-950 border-b border-slate-800/80 py-2 px-4 text-xs">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
        
        {/* Left: Live regional nodes */}
        <div className="flex items-center gap-4 text-slate-400 overflow-x-auto">
          <div className="flex items-center gap-1.5 shrink-0">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="font-semibold text-white">حالة الخوادم السحابية:</span>
          </div>

          <div className="flex items-center gap-1.5 shrink-0 font-mono">
            <Server className="w-3.5 h-3.5 text-cyan-400" />
            <span>عقدة الرياض:</span>
            <span className="text-emerald-400 font-bold">{pings.riyadh}ms</span>
          </div>

          <div className="hidden sm:flex items-center gap-1.5 shrink-0 font-mono">
            <Server className="w-3.5 h-3.5 text-sky-400" />
            <span>عقدة جدة:</span>
            <span className="text-emerald-400 font-bold">{pings.jeddah}ms</span>
          </div>

          <div className="hidden md:flex items-center gap-1.5 shrink-0 font-mono">
            <Server className="w-3.5 h-3.5 text-indigo-400" />
            <span>عقدة فرانكفورت:</span>
            <span className="text-emerald-400 font-bold">{pings.frankfurt}ms</span>
          </div>
        </div>

        {/* Right: Security & SLA verification */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="flex items-center gap-1.5 text-emerald-400 bg-emerald-950/40 px-2.5 py-0.5 rounded-full border border-emerald-500/30">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>جاهزية SLA: {pings.uptime}</span>
          </div>

          <div className="hidden lg:flex items-center gap-1 text-slate-400">
            <Lock className="w-3 h-3 text-amber-400" />
            <span>تشفير 256-bit | وضع القراءة محكم</span>
          </div>
        </div>

      </div>
    </div>
  );
};
