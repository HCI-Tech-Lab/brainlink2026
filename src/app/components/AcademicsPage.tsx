import React, { useState } from 'react';

const topics = [
  {
    n: '01',
    title: 'Context-Aware AI\n& Empathic XR',
    tags: ['Omnimodal Data Modeling', 'Biosignal-Based Empathy', 'Healthcare / Wellness XR'],
    discussion: 'Predicting future XR user experience with omnimodal AI data',
  },
  {
    n: '02',
    title: 'Spatio-Temporal\n& Material Traces',
    tags: ['TeleAbsence', 'Physical AI · Real-Time 3D', 'Tangible Interfaces'],
    discussion: 'Omnimodal AI for transcending time, space, and material',
  },
  {
    n: '03',
    title: '3D Spatial Intelligence\n& Augmented UI',
    tags: ['Intuitive 3D Manipulation', 'Cognitive Load Reduction', 'Generative AI Authoring'],
    discussion: 'Intelligent toolkits for XR interaction authoring',
  },
  {
    n: '04',
    title: 'Grand Challenges\nFuture Intelligent Spaces',
    tags: ['Multi-Sensory Architecture', 'Human-AI-Space Communication', 'Brain Circulation Action Plan'],
    discussion: 'Multidisciplinary roadmap for shared grand challenges',
  },
];

export function AcademicsPage() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div className="bg-[#060D1F] py-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">

        <div className="flex items-center gap-4 mb-16">
          <div className="w-6 h-px bg-blue-500" />
          <span className="text-blue-400 text-xs font-bold uppercase tracking-widest">Overview</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-black text-white mb-16 leading-none" style={{ fontFamily: 'Syne, sans-serif' }}>
          Research<br />Topics
        </h2>

        <div className="grid md:grid-cols-2 gap-px bg-white/10 mb-0">
          {topics.map((t, i) => (
            <button
              key={i}
              onClick={() => setSelected(selected === i ? null : i)}
              className={`text-left p-8 group transition-all duration-300 ${selected === i ? 'bg-blue-600' : 'bg-[#0D1635] hover:bg-[#0D1A3A]'}`}
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-6xl font-black leading-none text-white/10 group-hover:text-white/20 transition-colors" style={{ fontFamily: 'Syne, sans-serif' }}>{t.n}</span>
                <div className={`text-xs font-bold px-2 py-0.5 ${selected === i ? 'bg-white/20 text-white' : 'bg-blue-600/20 text-blue-400 border border-blue-500/30'}`}>
                  Track {t.n}
                </div>
              </div>
              <h3 className="text-2xl font-black text-white mb-5 whitespace-pre-line leading-snug" style={{ fontFamily: 'Syne, sans-serif' }}>
                {t.title}
              </h3>
              <div className="space-y-1.5">
                {t.tags.map((tag) => (
                  <div key={tag} className="flex items-center gap-2">
                    <div className={`w-1 h-1 flex-shrink-0 ${selected === i ? 'bg-blue-200' : 'bg-blue-500'}`} />
                    <span className={`text-xs ${selected === i ? 'text-blue-100' : 'text-slate-500'}`}>{tag}</span>
                  </div>
                ))}
              </div>
            </button>
          ))}
        </div>

        {selected !== null && (
          <div className="border border-blue-500/40 border-t-0 bg-[#060D1F] px-8 py-5">
            <span className="text-blue-400 text-[10px] uppercase tracking-widest mr-3">Discussion Agenda</span>
            <span className="text-white text-sm">{topics[selected].discussion}</span>
          </div>
        )}

      </div>
    </div>
  );
}
