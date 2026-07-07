import React from 'react';

const outcomes = [
  {
    n: '01',
    title: 'Brain Circulation',
    keywords: ['Paper', 'PhD & Postdoc Dispatch', 'Bi-Annual Online Seminar'],
  },
  {
    n: '02',
    title: 'Conference Linkage',
    keywords: ['ACM UIST 2026', 'ACM UbiComp 2027 (Korea)', 'CHI · ISMAR · NeurIPS'],
  },
  {
    n: '03',
    title: 'Research Capacity',
    keywords: ['Korea → Global Agenda-Setter', 'International Joint Research', 'Next-Gen Researcher Mentoring'],
  },
  {
    n: '04',
    title: 'Industry-Academia',
    keywords: ['Joint Research Connection', 'Human-Centric AI Ethics', 'Tech Commercialization'],
  },
];

const community = [
  { label: 'Global Spatial AI Research Network', sub: 'Official research network formation' },
  { label: 'Joint Conference Programs', sub: 'UbiComp 2027 · CHI · VR · UIST · ISMAR' },
  { label: 'Paper Publication', sub: 'Omnimodal AI global research agenda' },
  { label: 'Ongoing Online Exchange', sub: 'Bi-annual seminar · joint research tasks' },
];

const timeline = [
  { date: 'Aug 2026', label: 'BrainLink Exchange', note: 'KAIST', highlight: true },
  { date: 'Late 2026', label: 'ACM UIST 2026', note: 'Joint Workshop' },
  { date: 'Late 2026', label: 'IEEE ISMAR', note: 'Joint Workshop' },
  { date: '2027', label: 'ACM UbiComp', note: 'Korea-Hosted', highlight: true },
  { date: 'Ongoing', label: 'ACM CHI · NeurIPS · VR', note: 'Continued Sessions' },
];

export function PlacementsPage() {
  return (
    <div className="bg-[#060D1F] py-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex items-center gap-4 mb-16">
          <div className="w-6 h-px bg-blue-500" />
          <span className="text-blue-400 text-xs font-bold uppercase tracking-widest">Expected Outcomes</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-black text-white mb-16 leading-none" style={{ fontFamily: 'Syne, sans-serif' }}>
          Impact &<br />Follow-up
        </h2>

        {/* Outcome grid — icon + number + keywords, NO paragraphs */}
        <div className="grid md:grid-cols-2 gap-px bg-white/10 mb-16">
          {outcomes.map((o) => (
            <div key={o.n} className="bg-[#0D1635] p-8 group hover:bg-blue-600 transition-all duration-300">
              <div className="text-6xl font-black text-white/10 group-hover:text-blue-400 mb-4 leading-none transition-colors" style={{ fontFamily: 'Syne, sans-serif' }}>
                {o.n}
              </div>
              <h3 className="text-2xl font-black text-white mb-5" style={{ fontFamily: 'Syne, sans-serif' }}>{o.title}</h3>
              <div className="space-y-2">
                {o.keywords.map((kw) => (
                  <div key={kw} className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-blue-400 group-hover:bg-blue-200 flex-shrink-0 transition-colors" />
                    <span className="text-slate-400 group-hover:text-blue-100 text-sm transition-colors">{kw}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Community plan — compact list */}
        <div className="mb-16">
          <div className="text-slate-600 text-xs uppercase tracking-widest mb-6">Post-Event · Community Formation</div>
          <div className="divide-y divide-white/10">
            {community.map((c, i) => (
              <div key={i} className="flex items-center gap-6 py-4 group hover:bg-white/3 px-2 transition-all">
                <div className="text-3xl font-black text-white/10 w-10 flex-shrink-0 leading-none" style={{ fontFamily: 'Syne, sans-serif' }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div className="flex-1">
                  <div className="text-white font-bold text-sm">{c.label}</div>
                  <div className="text-slate-500 text-xs">{c.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        
  

      </div>
    </div>
  );
}
