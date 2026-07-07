import React, { useState } from 'react';
import { Navigation } from './components/Navigation';
import { HomePage } from './components/HomePage';
import { AboutPage } from './components/AboutPage';
import { AcademicsPage } from './components/AcademicsPage';
import { InfrastructurePage } from './components/InfrastructurePage';
import { CommitteesPage } from './components/CommitteesPage';
import { WorkshopsPage } from './components/WorkshopsPage';
import { PlacementsPage } from './components/PlacementsPage';

export default function App() {
  const [activeSection] = useState('home');

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 56, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen" style={{ fontFamily: 'Inter, sans-serif' }}>
      <Navigation activeSection={activeSection} />

      <main className="w-full">
        <section id="home"><HomePage /></section>
        {/* <section id="about"><AboutPage /></section> */}
        <section id="academics"><AcademicsPage /></section>
        <section id="infrastructure"><InfrastructurePage /></section>
        <section id="committees"><CommitteesPage /></section>
        <section id="workshops"><WorkshopsPage /></section>
        <section id="placements"><PlacementsPage /></section>
      </main>

      {/* Footer */}
      <footer className="bg-[#030812] border-t border-white/10 text-white py-14 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          {/* Institution logo wall — grayscale */}
          {/* <div className="mb-12 border-b border-white/10 pb-10">
            <div className="text-slate-700 text-[10px] uppercase tracking-widest mb-5">Participating Institutions</div>
            <div className="flex flex-wrap gap-3 items-center">
              {([
                { abbr: 'KAIST',  color: '#1E3A8A' },
                { abbr: 'AdeUni', color: '#002147' },
                { abbr: 'UCF',    color: '#000000' },
                { abbr: 'UW',     color: '#4B2E83' },
                { abbr: 'MIT',    color: '#A31F34' },
                { abbr: 'Purdue', color: '#C28E0E' },
                { abbr: 'CMU',    color: '#C41230' },
                { abbr: 'SFU',    color: '#CC0000' },
                { abbr: 'NYU',    color: '#57068C' },
                { abbr: 'UCal',   color: '#D41E30' },
              ] as { abbr: string; color: string; textColor?: string }[]).map((m) => (
                <div
                  key={m.abbr}
                  className="w-12 h-12 flex items-center justify-center font-black text-[10px] leading-none text-center transition-all duration-300 cursor-default"
                  style={{ backgroundColor: m.color, color: m.textColor ?? '#fff', filter: 'grayscale(1)', opacity: 0.5 }}
                  onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.filter = 'grayscale(0)'; (e.currentTarget as HTMLDivElement).style.opacity = '1'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.filter = 'grayscale(1)'; (e.currentTarget as HTMLDivElement).style.opacity = '0.5'; }}
                >
                  {m.abbr}
                </div>
              ))}
            </div>
          </div> */}

          {/* Bottom bar */}
          <div className="flex flex-col md:flex-row justify-between gap-6">
            <div>
              <div className="text-white font-black text-base mb-1" style={{ fontFamily: 'Syne, sans-serif' }}>
                BrainLink <span className="text-blue-400">2026</span>
              </div>
              <div className="text-slate-600 text-xs">Omnimodal AI-XR</div>
            </div>
            
            <div className="text-xs text-slate-600 md:text-right">
              <div className="text-blue-500 font-semibold mb-0.5">Aug 9–11, 2026 · Korea</div>
              <div>© 2026 KAIST</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
