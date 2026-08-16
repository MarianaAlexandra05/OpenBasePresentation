import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { integrationsData } from '../data/mockData';
import { Sparkles, Terminal, Code, GitBranch, Cpu, Radio, Zap } from 'lucide-react';

export function IntegrationsOrbit() {
  const { t } = useLanguage();
  const [selectedCat, setSelectedCat] = useState('all');
  const [activeItem, setActiveItem] = useState(integrationsData[0]);

  const categories = [
    { id: 'all', label: 'Todos' },
    { id: 'agents', label: t.filterAgents },
    { id: 'editors', label: t.filterEditors },
    { id: 'terminals', label: t.filterTerminals },
    { id: 'source', label: t.filterSource },
    { id: 'runtime', label: t.filterRuntime }
  ];

  const filteredItems = selectedCat === 'all' 
    ? integrationsData 
    : integrationsData.filter(item => item.category === selectedCat);

  return (
    <section id="integrations" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 text-sky-400 text-xs font-bold tracking-widest uppercase mb-3">
          <span className="w-1.5 h-1.5 bg-sky-400 rounded-sm"></span>
          <span>{t.intEyebrow}</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
          {t.intTitle}{' '}
          <span className="it text-sky-300 font-normal">{t.intTitleItalic}</span>
        </h2>
        <p className="text-slate-300 text-base sm:text-lg mt-4 leading-relaxed">
          {t.intDesc}
        </p>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCat(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer border ${
                selectedCat === cat.id
                  ? 'bg-blue-600/30 border-sky-400 text-white shadow-lg shadow-blue-500/20'
                  : 'bg-white/[0.04] border-white/[0.08] text-slate-400 hover:text-white hover:bg-white/[0.08]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Orbit & Grid Stage */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto">
        
        {/* Hub Orbit Centerpiece */}
        <div className="lg:col-span-7 relative h-[420px] rounded-3xl bg-slate-950/60 border border-white/[0.08] flex items-center justify-center overflow-hidden p-6">
          
          {/* Subtle concentric orbit rings */}
          <div className="absolute w-[360px] h-[360px] rounded-full border border-white/[0.06] pointer-events-none animate-spin-slow"></div>
          <div className="absolute w-[240px] h-[240px] rounded-full border border-sky-500/15 pointer-events-none"></div>

          {/* Central Openbase Hub Tile */}
          <div className="relative z-10 w-24 h-24 rounded-2xl bg-gradient-to-br from-blue-600 via-sky-600 to-indigo-700 p-1 shadow-2xl shadow-blue-500/40 flex flex-col items-center justify-center text-center">
            <div className="w-10 h-10 rounded-xl bg-slate-950 flex items-center justify-center mb-1">
              <svg viewBox="0 0 40 40" fill="none" className="w-7 h-7">
                <rect width="40" height="40" rx="8" fill="#0A0E1A" />
                <path d="M12 12C12 9.79 13.79 8 16 8H21V18H12V12Z" fill="#0078D4" />
                <path d="M21 18H30V24C30 26.21 28.21 28 26 28H21V18Z" fill="#38BDF8" />
                <path d="M23 8H30V15L21 18L23 8Z" fill="#0EA5E9" />
                <path d="M12 21L21 18L19 28H12V21Z" fill="#0284C7" />
              </svg>
            </div>
            <span className="text-[10px] font-extrabold text-white tracking-wider">OPENBASE</span>
          </div>

          {/* Floating Orbit Satellites */}
          {integrationsData.slice(0, 8).map((item, idx) => {
            const angle = (idx / 8) * 2 * Math.PI;
            const radius = 135;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;

            const isMatching = selectedCat === 'all' || item.category === selectedCat;

            return (
              <button
                key={item.id}
                onClick={() => setActiveItem(item)}
                style={{
                  transform: `translate(${x}px, ${y}px)`
                }}
                className={`absolute w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 cursor-pointer shadow-lg ${
                  activeItem?.id === item.id
                    ? 'bg-sky-500 text-white scale-125 z-20 shadow-sky-500/50 ring-2 ring-white'
                    : isMatching
                    ? 'bg-slate-900/90 border border-white/[0.15] text-slate-200 hover:scale-110 hover:border-sky-400'
                    : 'bg-slate-900/40 border border-white/[0.05] text-slate-500 opacity-40'
                }`}
                title={item.name}
              >
                <span className="text-xs font-bold font-mono">
                  {item.name.substring(0, 2).toUpperCase()}
                </span>
              </button>
            );
          })}
        </div>

        {/* Right Info Box */}
        <div className="lg:col-span-5 space-y-4">
          {activeItem ? (
            <div className="glass-card p-7 rounded-2xl border border-white/[0.12] text-left">
              <div className="flex items-center gap-3 mb-4">
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center font-bold text-white text-base shadow-md"
                  style={{ backgroundColor: activeItem.color || '#0284C7' }}
                >
                  {activeItem.name.substring(0, 2).toUpperCase()}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{activeItem.name}</h3>
                  <span className="text-xs font-mono text-sky-400 uppercase tracking-wider">
                    {activeItem.category.toUpperCase()}
                  </span>
                </div>
              </div>

              <p className="text-sm text-slate-300 mb-6 leading-relaxed">
                {activeItem.desc}
              </p>

              <div className="p-3.5 rounded-xl bg-slate-950/80 border border-white/[0.06] text-xs font-mono space-y-2">
                <div className="flex justify-between text-slate-400">
                  <span>Protocolo:</span>
                  <span className="text-emerald-400">Win32 JSON Unit IPC</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Latencia de Eventos:</span>
                  <span className="text-sky-400">&lt; 5 ms</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Soporte Windows:</span>
                  <span className="text-white">x64 / ARM64 Nativo</span>
                </div>
              </div>
            </div>
          ) : null}

          {/* Quick List grid */}
          <div className="grid grid-cols-2 gap-2 text-left">
            {filteredItems.slice(0, 4).map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveItem(item)}
                className="p-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.06] flex items-center gap-2 text-xs font-medium text-slate-300 hover:text-white transition-all cursor-pointer text-left"
              >
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }}></div>
                <span className="truncate">{item.name}</span>
              </button>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
