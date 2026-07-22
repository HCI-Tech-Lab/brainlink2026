import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const keynotes = [
  {
    speaker: 'Mark Billinghurst',
    affil: 'University of Adelaide / University of Auckland',
    title: 'Empathic Computing: Designing Human-Centric Spatial AI',
    track: 'Session 1',
  },
  {
    speaker: 'Ken Perlin',
    affil: 'New York University',
    title: 'AI-enhanced Migratory User Interfaces for Collaborative Mixed Reality',
    track: 'Session 1',
  },
  {
    speaker: 'Anind K. Dey',
    affil: 'University of Washington',
    title: 'Leveraging omnimodal AI to understand personal health',
    track: 'Session 2',
  },
  {
    speaker: 'Scott Hudson',
    affil: 'Carnegie Mellon University',
    title: 'Human Aspects of Human-AI Collaboration in Generative Design Systems',
    track: 'Session 2',
  },
  {
    speaker: 'Wolfgang Stuerzlinger',
    affil: 'Simon Fraser University',
    title: 'Efficient Input Modalities and Interaction Techniques for Omnimodal AI-XR',
    track: 'Session 2',
  },
  {
    speaker: 'Greg Welch',
    affil: 'University of Central Florida',
    title: 'Beyond XR',
    track: 'Session 3',
  },
  {
    speaker: 'Karthik Ramani',
    affil: 'Purdue University',
    title: 'TBA',
    track: 'Session 3',
  },
];

const tracks = [
  { n: '01', title: 'Context-Aware AI & Empathic XR', agenda: 'Predicting XR user experience with omnimodal AI' },
  { n: '02', title: 'Spatio-Temporal & Material Traces', agenda: 'AI for transcending time, space, and material' },
  { n: '03', title: '3D Spatial Intelligence & Augmented UI', agenda: 'Intelligent toolkits for XR interaction authoring' },
  { n: '04', title: 'Grand Challenges · Intelligent Spaces', agenda: 'Multidisciplinary roadmap & brain circulation plan' },
];

const formats = [
  { n: '01', label: 'Elevator Pitch', tag: 'Day 1 · Opening' },
  { n: '02', label: 'Turn Table', tag: 'Day 1 · Bottleneck Sharing' },
  { n: '03', label: 'Panel Discussion', tag: 'Day 1–2 · After Lectures' },
  { n: '04', label: 'Vision Activity', tag: 'Day 2–3 · Grand Challenges' },
  { n: '05', label: 'Poster & Mentoring', tag: 'Day 3 · Morning' },
  { n: '06', label: 'Joint Research Planning', tag: 'Day 3 · Closing' },
];

export function WorkshopsPage() {
  return (
    <div className="bg-white py-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex items-center gap-4 mb-16">
          <div className="w-6 h-px bg-blue-600" />
          <span className="text-blue-600 text-xs font-bold uppercase tracking-widest">Exchange Program</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-10 leading-none" style={{ fontFamily: 'Syne, sans-serif' }}>
          Program
        </h2>

        {/* Conference audience image */}
        <div className="relative h-48 overflow-hidden mb-16 -mx-6 md:-mx-16">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxhY2FkZW1pYyUyMGNvbmZlcmVuY2UlMjBsZWN0dXJlJTIwaGFsbCUyMHByZXNlbnRlciUyMHN0YWdlJTIwZGFya3xlbnwxfHx8fDE3ODI5NzQ0NjF8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Conference audience"
            className="w-full h-full object-cover grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-white" />
        </div>

        {/* Keynotes — editorial list, NO descriptions */}
        <div className="mb-16 border-t border-slate-100">
          <div className="text-slate-400 text-xs uppercase tracking-widest py-4">Keynote Lectures</div>
          <div className="divide-y divide-slate-50">
            {keynotes.map((k) => (
              <div key={k.speaker} className="py-6 grid md:grid-cols-3 gap-4 items-center group hover:bg-slate-50 px-2 transition-all">
                <div className="md:col-span-2">
                  <div className="font-black text-slate-900 text-base mb-0.5" style={{ fontFamily: 'Syne, sans-serif' }}>{k.speaker}</div>
                  {k.title && <div className="text-blue-600 text-sm italic">"{k.title}"</div>}
                </div>
                <div className="text-right">
                  <div className="text-slate-400 text-xs">{k.affil}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Session formats — compact icon grid */}
        <div>
          <div className="text-slate-400 text-xs uppercase tracking-widest mb-6">Session Formats</div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-slate-100">
            {formats.map((f) => (
              <div key={f.n} className="bg-white p-5 group hover:bg-blue-600 transition-all duration-200">
                <div className="text-3xl font-black text-slate-100 group-hover:text-blue-300 mb-2 leading-none transition-colors" style={{ fontFamily: 'Syne, sans-serif' }}>{f.n}</div>
                <div className="font-black text-slate-900 group-hover:text-white text-sm transition-colors">{f.label}</div>
                <div className="text-slate-400 group-hover:text-blue-100 text-xs mt-1 transition-colors">{f.tag}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
