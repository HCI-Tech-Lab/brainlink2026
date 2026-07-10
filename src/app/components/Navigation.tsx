import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  activeSection: string;
}

export function Navigation({ activeSection }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState('home');

  const navItems = [
    { id: 'home', label: 'Home' },
    // { id: 'about', label: 'About' },
    { id: 'academics', label: 'Overview' },
    { id: 'infrastructure', label: 'Venue & Schedule' },
    { id: 'committees', label: 'People' },
    { id: 'workshops', label: 'Program' },
    { id: 'placements', label: 'Follow-up' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) window.scrollTo({ top: element.offsetTop - 56, behavior: 'smooth' });
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(i => i.id);
      const pos = window.scrollY + 80;
      for (let i = sections.length - 1; i >= 0; i--) {
        const s = document.getElementById(sections[i]);
        if (s && s.offsetTop <= pos) { setCurrentSection(sections[i]); break; }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="bg-[#060D1F]/96 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14">
          <button
            onClick={() => handleNavClick('home')}
            className="text-white font-black text-sm tracking-tight"
            style={{ fontFamily: 'Syne, sans-serif' }}
          >
            BrainLink <span className="text-blue-400">2026</span>
          </button>

          {/* Desktop — animated underline indicator */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = currentSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="relative px-3 py-4 text-xs font-medium transition-colors duration-200 group"
                  style={{ color: isActive ? '#fff' : undefined }}
                >
                  <span className={isActive ? 'text-white' : 'text-slate-400 group-hover:text-white transition-colors duration-200'}>
                    {item.label}
                  </span>
                  {/* Animated underline — pen stroke effect */}
                  <span
                    className="absolute bottom-2.5 left-3 right-3 h-px bg-blue-400 origin-left transition-transform duration-300 ease-out"
                    style={{
                      transform: isActive ? 'scaleX(1)' : 'scaleX(0)',
                    }}
                  />
                  {/* Hover underline (only shows when not active) */}
                  {!isActive && (
                    <span className="absolute bottom-2.5 left-3 right-3 h-px bg-blue-400/40 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
                  )}
                </button>
              );
            })}
          </div>

          <button className="lg:hidden p-2 text-slate-400 hover:text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden bg-[#060D1F] border-t border-white/10 px-4 py-3 space-y-0.5">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`w-full text-left px-4 py-2.5 text-sm font-medium relative ${
                currentSection === item.id ? 'text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              {item.label}
              {currentSection === item.id && (
                <span className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-4 bg-blue-400" />
              )}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
