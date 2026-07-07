import React from 'react';
import groupPhoto from '../../imports/image-1.png';

const goals = [
  {
    n: '01',
    icon: '⚡',
    title: 'Omnimodal AI Inflection Point',
    keywords: ['Vision · Hearing · Touch', 'Biosignals + Spatial Context', 'Beyond Generative AI'],
  },
  {
    n: '02',
    icon: '🔬',
    title: 'Multidisciplinary Grand Challenges',
    keywords: ['MIT · CMU · Purdue', 'Physical AI · Empathic XR', 'Human-Centered Design Roadmap'],
  },
  {
    n: '03',
    icon: '🌐',
    title: 'Global Brain Circulation Ecosystem',
    keywords: ['Scholar ↔ Researcher 1:1', 'PhD & Postdoc Exchange', 'Long-Term Joint Research'],
  },
  {
    n: '04',
    icon: '🎯',
    title: 'Top Conference Linkage',
    keywords: ['ACM UIST 2026', 'ACM UbiComp 2027', 'Korea as Global AI Hub'],
  },
];

const fields = [
  'Human-centric AI', 'Virtual Fusion (XR)', 'Omnimodal AI',
  'Empathic Computing', 'Spatial AI', 'Physical AI', 'Context-Aware HCI',
];

export function AboutPage() {
  return (
    <div
      className="relative bg-white"
      style={{
        backgroundImage: `url(${groupPhoto})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Overlay — white fade, content sits on top */}
      <div className="absolute inset-0 bg-white/88" />

      <div className="relative z-10 px-6 md:px-16 py-20 max-w-7xl mx-auto">

        <div className="flex items-center gap-4 mb-10">
          <div className="w-6 h-px bg-blue-600" />
          <span className="text-blue-600 text-xs font-bold uppercase tracking-widest">Necessity & Goals</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-14 leading-none" style={{ fontFamily: 'Syne, sans-serif' }}>About</h2>

        {/* Goal grid */}
        <div className="grid md:grid-cols-2 gap-px bg-slate-200/60 mb-16">
          {goals.map((g) => (
            <div key={g.n} className="bg-white/90 backdrop-blur-sm p-8 group hover:bg-blue-600 transition-all duration-300">
              <div className="flex items-start justify-between mb-6">
                <span className="text-7xl font-black text-slate-100 group-hover:text-blue-500 leading-none transition-colors" style={{ fontFamily: 'Syne, sans-serif' }}>{g.n}</span>
                <span className="text-3xl">{g.icon}</span>
              </div>
              <h3 className="text-xl font-black text-slate-900 group-hover:text-white mb-5 leading-snug transition-colors" style={{ fontFamily: 'Syne, sans-serif' }}>
                {g.title}
              </h3>
              <div className="space-y-2">
                {g.keywords.map((kw) => (
                  <div key={kw} className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-blue-500 group-hover:bg-blue-200 flex-shrink-0 transition-colors" />
                    <span className="text-slate-500 group-hover:text-blue-100 text-sm transition-colors">{kw}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Field tags */}
        <div className="border-t border-slate-200 pt-10">
          <div className="text-slate-400 text-xs uppercase tracking-widest mb-5">National Strategic Technology Fields</div>
          <div className="flex flex-wrap gap-2">
            {fields.map((f, i) => (
              <span key={f} className={`px-3 py-1.5 text-xs font-semibold border transition-all hover:bg-blue-600 hover:text-white hover:border-blue-600 cursor-default ${i < 2 ? 'bg-blue-600 text-white border-blue-600' : 'bg-white/80 border-slate-200 text-slate-600'}`}>
                {f}
              </span>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
