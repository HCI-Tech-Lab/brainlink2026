import React from 'react';
import { MapPin, Calendar, Users, Clock } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const day1 = [
  { time: '–14:30',    content: 'Registration' },
  { time: '14:30–14:50', content: 'Opening Ceremony' },
  { time: '14:50–15:30', content: 'Elevator Pitch — All Participants' },
  { time: '15:30–15:50', content: 'Ice-breaking' },
  { time: '15:50–17:00', content: 'Topic 01 · Lectures 1–2' },
  { time: '17:00–18:00', content: 'Turn Table' },
  { time: '18:00–20:00', content: 'Dinner & Networking' },
];

const day2 = [
  { time: '09:00–09:40', content: 'Topic 01 Continued · Lectures 3–4' },
  { time: '09:40–10:30', content: 'Break · Lecture 5' },
  { time: '10:30–12:00', content: 'Panel Discussion · Group Discussion' },
  { time: '12:00–14:00', content: 'Lunch & Networking' },
  { time: '14:00–15:10', content: 'Lectures 6–7 · Coffee Break' },
  { time: '15:10–17:30', content: 'Lectures 8–9 · Panel Discussion' },
  { time: '17:30–18:00', content: 'Group Discussion' },
  { time: '18:00–',      content: 'Dinner & Networking' },
];

const day3 = [
  { time: '08:00–09:00', content: 'Breakfast' },
  { time: '09:00–10:00', content: 'Poster Presentations & Mentoring' },
  { time: '10:00–11:00', content: 'Group Discussion Results & Q&A' },
  { time: '11:00–12:00', content: 'Joint Research Planning' },
  { time: '12:00–',      content: 'Lunch & Departure' },
];

const formats = [
  { label: 'Elevator Pitch', sub: 'Current research + bottleneck · 1 slide each' },
  { label: 'Turn Table', sub: 'Hardest unsolved challenge · cross-field feedback' },
  { label: 'Panel Discussion', sub: 'Scholars + attendees · moderated Q&A' },
  { label: 'Vision Activity', sub: '10-year Grand Challenges roadmap · mixed groups' },
];

export function InfrastructurePage() {
  return (
    <div className="bg-white py-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        {/* Incheon hero image */}
        <div className="relative mb-16 overflow-hidden rounded-2xl border border-slate-200 aspect-[24/7]">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1764212964673-249757581fb7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrb3JlYSUyMGluY2hlb24lMjBjaXR5JTIwbmlnaHQlMjBhZXJpYWwlMjB1cmJhbnxlbnwxfHx8fDE3ODI5NzQ0NjJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Incheon, Korea"
            className="w-full h-full object-cover grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-white/10" />
          <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-6 h-px bg-blue-300" />
              <span className="text-blue-200 text-sm font-bold uppercase tracking-widest">Venue & Schedule</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white leading-none" style={{ fontFamily: 'Syne, sans-serif' }}>
              Incheon, Korea
            </h2>
          </div>
        </div>

        {/* Key facts — horizontal strip */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-slate-100 mb-16">
          {[
            { icon: <MapPin className="w-5 h-5" />, label: 'Venue', value: 'Sheraton Grand Incheon Hotel, Korea', sub: '' },
            { icon: <Calendar className="w-5 h-5" />, label: 'Dates', value: 'Aug 9–11, 2026', sub: '3 Days · 2 Nights' },
            { icon: <Users className="w-5 h-5" />, label: 'Participants', value: '100+', sub: '16 Overseas Scholars' },
          ].map((item, i) => (
            <div key={i} className="bg-white p-6">
              <div className="text-blue-600 mb-3">{item.icon}</div>
              <div className="text-slate-400 text-xs uppercase tracking-widest mb-1">{item.label}</div>
              <div className="font-black text-slate-900 text-xl leading-tight mb-0.5" style={{ fontFamily: 'Syne, sans-serif' }}>{item.value}</div>
              <div className="text-slate-500 text-sm">{item.sub}</div>
            </div>
          ))}
        </div>

        {/* Session format infographic — 4 formats as label+sub, no paragraphs */}
        <div className="mb-16">
          <div className="text-slate-400 text-sm uppercase tracking-widest mb-6">
            Session Formats · Dagstuhl Seminar Style
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-slate-100">
            {formats.map((f, i) => (
              <div key={i} className="bg-white p-6 group hover:bg-blue-600 transition-all duration-300">
                <div className="text-2xl font-black text-slate-100 group-hover:text-blue-400 mb-4 transition-colors" style={{ fontFamily: 'Syne, sans-serif' }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div className="font-black text-slate-900 group-hover:text-white text-base mb-2 transition-colors">{f.label}</div>
                <div className="text-slate-500 group-hover:text-blue-100 text-sm transition-colors">{f.sub}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Schedule tables */}
        <div className="space-y-8">
          {[
            { day: 'Day 1', theme: 'Opening · Pitch · Topic 01 · Networking', rows: day1 },
            { day: 'Day 2', theme: 'Deep-Dive Lectures · Panel · Group Discussion', rows: day2 },
            { day: 'Day 3', theme: 'Poster & Mentoring · Results · Joint Research', rows: day3 },
          ].map((s) => (
            <div key={s.day} className="border border-slate-100 overflow-hidden">
              <div className="bg-blue-600 px-6 py-3 flex items-center gap-5">
                <span className="text-white font-black text-lg" style={{ fontFamily: 'Syne, sans-serif' }}>{s.day}</span>
                <span className="text-blue-100 text-sm">{s.theme}</span>
              </div>
              <table className="w-full text-sm">
                <tbody>
                  {s.rows.map((row, i) => (
                    <tr key={i} className="border-b border-slate-50 hover:bg-slate-50 transition-colors">
                      <td className="px-5 py-3 text-blue-600 font-semibold whitespace-nowrap w-32">{row.time}</td>
                      <td className="px-5 py-3 text-slate-700">{row.content}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
