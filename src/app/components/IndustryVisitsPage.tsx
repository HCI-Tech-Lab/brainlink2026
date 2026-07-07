import React from 'react';
import { ArrowRight } from 'lucide-react';

const instMeta: Record<string, { abbr: string; color: string; textColor?: string }> = {
  'MIT Media Lab':                   { abbr: 'MIT',     color: '#A31F34' },
  'Carnegie Mellon University (CMU)':{ abbr: 'CMU',     color: '#C41230' },
  'Purdue University':               { abbr: 'Purdue',  color: '#C28E0E' },
  'University of South Australia':   { abbr: 'UniSA',   color: '#E21A32' },
  'University of Calgary':           { abbr: 'UCal',    color: '#D41E30' },
  'Simon Fraser University (SFU)':   { abbr: 'SFU',     color: '#CC0000' },
  'University of Central Florida':   { abbr: 'UCF',     color: '#FFC904', textColor: '#000' },
  'New York University':             { abbr: 'NYU',     color: '#57068C' },
};

const institutions = [
  { name: 'MIT Media Lab',                    scholars: ['Hiroshi Ishii'],                  field: 'Tangible UI · Physical AI',              track: '02' },
  { name: 'Carnegie Mellon University (CMU)', scholars: ['Anind K. Dey', 'Scott Hudson'],   field: 'Context-Aware Computing · HCI · AI',     track: '01 & 03' },
  { name: 'Purdue University',                scholars: ['Karthik Ramani'],                 field: 'Physical AI · 3D Interaction',           track: '02' },
  { name: 'University of South Australia',    scholars: ['Mark Billinghurst'],              field: 'HCI · AR/VR · Empathic Computing',       track: '01' },
  { name: 'University of Calgary',            scholars: ['Kangsoo Kim'],                    field: 'Electrical & Software Engineering',      track: 'Organizer' },
  { name: 'Simon Fraser University (SFU)',    scholars: ['Wolfgang Stuerzlinger'],          field: '3D Spatial Interaction · HCI',           track: '03' },
  { name: 'University of Central Florida',    scholars: ['Greg Welch'],                     field: 'AR/VR · Cognitive Science',              track: '01' },
  { name: 'New York University',              scholars: ['Ken Perlin'],                     field: 'Computer Graphics · Interactive Tech',   track: '04' },
];

const conferences = [
  { name: 'ACM UIST 2026',   type: 'Joint Workshop',  note: 'Spatial AI & next-gen interaction' },
  { name: 'ACM UbiComp 2027',type: 'Korea-Hosted',    note: 'BrainLink network as organizing backbone' },
  { name: 'ACM CHI',         type: 'Ongoing',         note: 'Human-centric Spatial AI sessions' },
  { name: 'IEEE ISMAR',      type: 'Ongoing',         note: 'Omnimodal AI-XR ecosystem workshops' },
  { name: 'ACM NeurIPS',     type: 'Ongoing',         note: 'AI-driven HCI & spatial computing' },
];

function LogoMark({ name, size = 'md' }: { name: string; size?: 'sm' | 'md' | 'lg' }) {
  const meta = instMeta[name];
  if (!meta) return null;
  const sz = size === 'lg' ? 'w-16 h-16 text-xs' : size === 'sm' ? 'w-7 h-7 text-[8px]' : 'w-10 h-10 text-[9px]';
  return (
    <div
      className={`${sz} flex items-center justify-center font-black leading-none text-center flex-shrink-0`}
      style={{ backgroundColor: meta.color, color: meta.textColor ?? '#fff' }}
    >
      {meta.abbr}
    </div>
  );
}

export function IndustryVisitsPage() {
  return (
    <div className="bg-white py-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex items-center gap-4 mb-16">
          <div className="w-6 h-px bg-blue-600" />
          <span className="text-blue-600 text-xs font-bold uppercase tracking-widest">Global Collaboration</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-20 leading-none" style={{ fontFamily: 'Syne, sans-serif' }}>
          Collaborations
        </h2>

        {/* Institution grid */}
        <div className="border-t border-slate-100 mb-20">
          <div className="text-slate-400 text-xs uppercase tracking-widest py-4 mb-4">Participating Institutions</div>
          <div className="divide-y divide-slate-50">
            {institutions.map((inst, i) => (
              <div key={i} className="flex items-center gap-6 py-5 group hover:bg-slate-50 transition-all px-2">
                <LogoMark name={inst.name} size="md" />
                <div className="flex-1 min-w-0">
                  <div className="font-black text-slate-900 text-sm" style={{ fontFamily: 'Syne, sans-serif' }}>{inst.name}</div>
                  <div className="text-slate-400 text-xs mt-0.5">{inst.field}</div>
                </div>
                <div className="hidden md:flex flex-wrap gap-1.5 items-center">
                  {inst.scholars.map((s) => (
                    <span key={s} className="text-xs font-semibold text-slate-600 border border-slate-200 px-2 py-0.5">{s}</span>
                  ))}
                </div>
                <div className="text-xs text-blue-600 font-bold whitespace-nowrap w-16 text-right">
                  {inst.track === 'Organizer' ? 'Org.' : `Track ${inst.track}`}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Logo wall */}
        <div className="mb-20 border border-slate-100 p-8">
          <div className="text-slate-400 text-xs uppercase tracking-widest mb-8">Institution Marks</div>
          <div className="flex flex-wrap gap-6 items-center">
            {Object.entries(instMeta).map(([name, meta]) => (
              <div key={name} className="flex flex-col items-center gap-2">
                <div
                  className="w-14 h-14 flex items-center justify-center font-black text-xs text-center leading-tight"
                  style={{ backgroundColor: meta.color, color: meta.textColor ?? '#fff' }}
                >
                  {meta.abbr}
                </div>
              </div>
            ))}
            {/* KAIST */}
            <div className="flex flex-col items-center gap-2">
              <div className="w-14 h-14 bg-[#1E3A8A] flex items-center justify-center font-black text-xs text-white text-center leading-tight">
                KAIST
              </div>
            </div>
          </div>
        </div>

        {/* Conference linkage */}
        <div>
          <div className="flex items-center gap-4 mb-8">
            <span className="text-slate-900 font-black text-2xl" style={{ fontFamily: 'Syne, sans-serif' }}>Conference Linkage</span>
            <div className="flex-1 h-px bg-slate-100" />
          </div>
          <div className="divide-y divide-slate-50">
            {conferences.map((conf, i) => (
              <div key={i} className="flex items-center gap-6 py-5 px-2 hover:bg-slate-50 transition-all">
                <div className="w-28 flex-shrink-0">
                  <div className={`inline-block text-xs font-bold px-2 py-0.5 ${conf.type === 'Korea-Hosted' ? 'bg-blue-600 text-white' : conf.type === 'Joint Workshop' ? 'bg-slate-900 text-white' : 'border border-slate-200 text-slate-500'}`}>
                    {conf.type}
                  </div>
                </div>
                <div className="font-black text-slate-900 w-40 flex-shrink-0" style={{ fontFamily: 'Syne, sans-serif' }}>{conf.name}</div>
                <div className="flex items-center gap-2 text-slate-500 text-sm">
                  <ArrowRight className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" />
                  {conf.note}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom callout */}
        <div className="mt-16 border-t border-slate-900 pt-10">
          <div className="grid md:grid-cols-3 gap-0 border border-slate-100">
            {[
              { n: '8', l: 'Institutions' },
              { n: '3', l: 'Countries' },
              { n: '5', l: 'Conferences Linked' },
            ].map((item, i) => (
              <div key={i} className={`py-8 text-center ${i < 2 ? 'border-r border-slate-100' : ''}`}>
                <div className="text-5xl font-black text-blue-600 mb-1" style={{ fontFamily: 'Syne, sans-serif' }}>{item.n}</div>
                <div className="text-slate-400 text-xs uppercase tracking-widest">{item.l}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
