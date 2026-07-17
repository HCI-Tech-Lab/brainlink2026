import React from 'react';
import { MapPin, Calendar, Users, Clock } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const day1 = [
  { time: '14:00–15:00', content: 'Check-in & Registration' },
  { time: '15:00–15:10', content: 'Opening Ceremony: Welcome Address & Sharing of Forum Vision, Goal, Outcomes', speaker: 'Sang Ho Yoon, Kangsoo Kim' },
  { time: '15:10–15:50', content: 'Elevator Pitch: 1 Minute Research Introductions by 40 Participants', speaker: 'All Participants' },
  { time: '15:50–16:30', content: 'Session 1: Omnimodal AI-XR in XR Perspective', speaker: 'Prof. Mark Billinghurst, Prof. Ken Perlin' },
  { time: '16:30–16:45', content: 'Coffee Break: Networking & Refreshments' },
  { time: '16:45–17:45', content: 'Session 2: Omnimodal AI-XR in HCI Perspective', speaker: 'Prof. Anind Dey, Prof. Scott Hudson, Prof. Wolfgang Stuerzlinger' },
  { time: '17:45–18:25', content: 'Session 3: Omnimodal AI-XR in XR+HCI Perspective', speaker: 'Prof. Greg Welch, Prof. Karthik Ramani' },
  { time: '18:25–18:30', content: 'Wrap-up', speaker: 'All Participants' },
  { time: '18:30–20:30', content: 'Welcome Dinner', speaker: 'All Participants' },
];

const day2 = [
  { time: '08:00–09:00', content: 'Breakfast' },
  { time: '09:00–10:00', content: 'Early-Career Researchers Presentation & Collaboration Advertisement', speaker: 'Early-Career Researchers' },
  { time: '10:00–10:30', content: 'Group Activity #1: Omnimodal Interaction Scenario Round 1' },
  { time: '10:30–10:50', content: 'Coffee Break and Group Photo' },
  { time: '10:50–11:30', content: 'Presentation of Group Activity #1 & Group Discussion', speaker: 'All Participants' },
  { time: '11:30–13:00', content: 'Lunch', speaker: 'All Participants' },
  { time: '13:00–13:30', content: 'Collaboration Discussion & Demo (TBD)', speaker: 'All Participants' },
  { time: '13:30–14:30', content: 'Group Activity #2: Omnimodal Interaction Scenario Round 2 · Presentation & Group Discussion', speaker: 'All Participants' },
  { time: '14:30–15:30', content: 'Group Activity #3: Clustering Key Challenges for Omnimodal Interaction · Presentation & Group Discussion', speaker: 'All Participants' },
  { time: '15:30–15:50', content: 'Coffee Break' },
  { time: '15:50–16:50', content: 'Group Activity #4: Clustering Key Challenges for Omnimodal Interaction · Presentation & Group Discussion', speaker: 'All Participants' },
  { time: '16:50–18:00', content: 'Form Grand Challenge Groups and Pick Leaders for Each Group / Discuss Planning', speaker: 'All Participants' },
  { time: '18:00–', content: 'Networking Dinner (Outside) + Social Night', speaker: 'All Participants' },
];

const day3 = [
  { time: '08:00–09:00', content: 'Breakfast' },
  { time: '09:00–09:45', content: 'Grand Challenge Group In-Depth Discussion & Planning for Future Contact', speaker: 'All Participants' },
  { time: '09:45–10:15', content: "Sharing Each Grand Challenge Group's Draft to Whole Group", speaker: 'All Participants' },
  { time: '10:15–10:30', content: 'Wrap-up Discussion for Grand Challenge Groups', speaker: 'Organizing Committee' },
  { time: '10:30–11:00', content: 'Workshop Proposal for CHI', speaker: 'Organizing Committee' },
  { time: '11:00–11:30', content: 'Wrap-up Whole Event & Joint Research/Funding Networking', speaker: 'All Participants' },
  { time: '11:30–13:00', content: 'Farewell Lunch' },
  { time: '13:00–15:00', content: 'Organizing Committee Meeting: Forum Review & Discussion of Future Working Group Operations', speaker: 'Organizing Committee' },
];

const formats = [
  { label: 'Elevator Pitch', sub: '1-minute research intros · 40 participants' },
  { label: 'Group Activity', sub: 'Omnimodal interaction scenarios · clustering key challenges' },
  { label: 'Grand Challenge Group Formation', sub: 'Form groups · pick leaders · discuss planning' },
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
            { icon: <MapPin className="w-5 h-5" />, label: 'Venue', value: 'Sheraton Grand Incheon Hotel, Korea', sub: 'Orchid 2&3 (4F)', link: 'https://maps.app.goo.gl/zDvc1g3DRNNd7ZTX7' },
            { icon: <Calendar className="w-5 h-5" />, label: 'Dates', value: 'Aug 9–11, 2026', sub: '3 Days · 2 Nights' },
            { icon: <Users className="w-5 h-5" />, label: 'Participants', value: '40+', sub: 'Registration: 14:00–15:00, Aug 9' },
          ].map((item, i) => (
            <div key={i} className="bg-white p-6">
              <div className="text-blue-600 mb-3">{item.icon}</div>
              <div className="text-slate-400 text-xs uppercase tracking-widest mb-1">{item.label}</div>
              {item.link ? (
                <a href={item.link} target="_blank" rel="noopener noreferrer" className="font-black text-slate-900 hover:text-blue-600 text-xl leading-tight mb-0.5 block underline underline-offset-2 decoration-slate-300" style={{ fontFamily: 'Syne, sans-serif' }}>
                  {item.value}
                </a>
              ) : (
                <div className="font-black text-slate-900 text-xl leading-tight mb-0.5" style={{ fontFamily: 'Syne, sans-serif' }}>{item.value}</div>
              )}
              <div className="text-slate-500 text-sm">{item.sub}</div>
            </div>
          ))}
        </div>

        {/* Session format infographic */}
        <div className="mb-16">
          <div className="text-slate-400 text-sm uppercase tracking-widest mb-6">
            Session Formats
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-slate-100">
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
        <div className="space-y-8 mb-20">
          {[
            { day: 'Day 1', rows: day1 },
            { day: 'Day 2', rows: day2 },
            { day: 'Day 3', rows: day3 },
          ].map((s) => (
            <div key={s.day} className="border border-slate-100 overflow-hidden">
              <div className="bg-blue-600 px-6 py-3 flex items-center gap-5">
                <span className="text-white font-black text-lg" style={{ fontFamily: 'Syne, sans-serif' }}>{s.day}</span>
              </div>
              <table className="w-full text-sm">
                <tbody>
                  {s.rows.map((row, i) => (
                    <tr key={i} className="border-b border-slate-50 hover:bg-slate-50 transition-colors align-top">
                      <td className="px-5 py-3 text-blue-600 font-semibold whitespace-nowrap w-32">{row.time}</td>
                      <td className="px-5 py-3 text-slate-700">
                        {row.content}
                        {row.speaker && <div className="text-slate-400 text-xs mt-0.5">{row.speaker}</div>}
                      </td>
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
