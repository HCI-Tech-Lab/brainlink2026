import React from 'react';
import { ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const keywords = [
  'Omnimodal AI', 'Extended Reality', 'Empathic Computing',
  'Spatial AI', 'Physical AI', 'Tangible Interfaces',
  'Context-Aware HCI', 'Brain Circulation', 'Grand Challenges',
];

const stats = [
  { value: '100+', label: 'Participants' },
  { value: '16', label: 'Overseas Scholars' },
  { value: '4', label: 'Research Tracks' },
  { value: '3', label: 'Days' },
];

const keynotes = [
  { speaker: 'Mark Billinghurst', affil: 'Univ. of South Australia', title: 'Empathic Computing: Designing Human-Centric Spatial AI' },
  { speaker: 'Scott Hudson', affil: 'Carnegie Mellon University', title: 'The Next User Interface: From Desktop to a World of Spatial AI' },
  { speaker: 'Ken Perlin', affil: 'New York University', title: 'The Future of Being There: Avatars, Agents, and Communication in a Blended World' },
];

export function HomePage() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 64, behavior: 'smooth' });
  };

  return (
    <div className="bg-[#060D1F]">

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden px-6 md:px-16">
        {/* grid bg */}
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)', backgroundSize: '80px 80px' }} />
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto w-full pt-24 pb-16">
          {/* eyebrow */}
          <div className="flex items-center gap-3 mb-10">
            <div className="w-8 h-px bg-blue-500" />
            <span className="text-blue-400 text-xs font-bold uppercase tracking-[0.2em]">BrainLink 2026</span>
          </div>

          {/* Main title */}
          <h1 className="text-3xl md:text-4xl lg:text-8xl font-black text-white leading-none mb-6" style={{ fontFamily: 'Syne, sans-serif' }}>
            Omnimodal<br />
            <span className="text-blue-400">AI·XR</span><br />
            Convergence
          </h1>

          <p className="text-slate-500 text-sm uppercase tracking-widest mb-16 ml-1">
            For Future Intelligent Spaces: Cognition, Empathy & Augmented Interaction
          </p>

          {/* Facts row */}
          <div className="flex flex-wrap gap-6 mb-14 border-t border-white/10 pt-10">
            {[
              { label: 'Date', value: 'Aug 9–11, 2026' },
              { label: 'Venue', value: 'Sheraton Grand Incheon Hotel, Korea' },
              { label: 'Host', value: 'KAIST' },
              { label: 'Invited From', value: 'USA · Australia · New Zealand · Canada · Korea, Republic of' },
            ].map((f) => (
              <div key={f.label} className="min-w-[160px]">
                <div className="text-slate-600 text-xs uppercase tracking-widest mb-1">{f.label}</div>
                <div className="text-white text-sm font-semibold">{f.value}</div>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => scrollTo('academics')}
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold transition-all"
            >
              Research Topics <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => scrollTo('committees')}
              className="px-6 py-3 border border-white/20 hover:border-white/50 text-white text-sm font-semibold transition-all"
            >
              FeaturedSpeakers
            </button>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="border-y border-white/10 py-10 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4">
          {stats.map((s, i) => (
            <div key={i} className={`py-6 px-8 text-center ${i < stats.length - 1 ? 'border-r border-white/10' : ''}`}>
              <div className="text-5xl font-black text-white mb-1" style={{ fontFamily: 'Syne, sans-serif' }}>{s.value}</div>
              <div className="text-slate-500 text-xs uppercase tracking-widest">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── KEYWORDS ── light section */}
      {/* <section className="bg-white py-20 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-6 h-px bg-blue-500" />
            <button className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-bold uppercase tracking-[0.2em] text-blue-700 transition-colors hover:bg-blue-600 hover:text-white hover:border-blue-600">
              Research Areas
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            {keywords.map((kw, i) => (
              <span
                key={kw}
                className={`px-4 py-2 text-sm font-semibold border transition-all duration-200 cursor-default hover:bg-blue-600 hover:text-white hover:border-blue-600 ${
                  i === 0 ? 'bg-blue-600 text-white border-blue-600' : 'bg-transparent text-slate-700 border-slate-200'
                }`}
              >
                {kw}
              </span>
            ))}
          </div> /*}

          {/* Three pillars */}
          {/* <div className="grid md:grid-cols-3 gap-0 mt-16 border border-slate-100">
            {[
              { n: '01', title: 'Cognition', desc: 'Context-aware AI learning biosignals, behavioral patterns, and spatial context to model user intent.' },
              { n: '02', title: 'Empathy', desc: 'Systems that sense emotional states and respond with adaptive, human-centered interaction across physical and virtual environments.' },
              { n: '03', title: 'Augmented Interaction', desc: 'Beyond visualization — 3D spatial interfaces and Physical AI that reshape how humans act within intelligent spaces.' },
            ].map((p, i) => (
              <div key={i} className={`p-8 ${i < 2 ? 'border-r border-slate-100' : ''}`}>
                <div className="text-slate-200 text-6xl font-black mb-6 leading-none" style={{ fontFamily: 'Syne, sans-serif' }}>{p.n}</div>
                <h3 className="text-2xl font-black text-slate-900 mb-3" style={{ fontFamily: 'Syne, sans-serif' }}>{p.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

  

    </div>
  );
}
