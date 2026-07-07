import React from 'react';

interface SectionDividerProps {
  title?: string;
  subtitle?: string;
  dark?: boolean;
  className?: string;
}

export function SectionDivider({ title, subtitle, dark = false, className = '' }: SectionDividerProps) {
  return (
    <div className={`relative pt-10 pb-6 ${className}`}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600 opacity-40" />
      {title && (
        <div className="text-center max-w-4xl mx-auto px-6">
          <h2 className={`text-4xl md:text-5xl font-black mb-3 ${dark ? 'text-white' : 'text-slate-900'}`} style={{ fontFamily: 'Syne, sans-serif' }}>
            {title}
          </h2>
          {subtitle && (
            <p className={`text-lg ${dark ? 'text-slate-400' : 'text-slate-500'}`}>{subtitle}</p>
          )}
        </div>
      )}
    </div>
  );
}
