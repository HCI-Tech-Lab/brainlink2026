import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Phone, Globe } from 'lucide-react';
import sangPhoto from '../../imports/Sang.png';
import kangPhoto from '../../imports/kang.png';
import markPhoto from '../../imports/Mark.jpeg';
import gregPhoto from '../../imports/Greg.jpg';
import anindPhoto from '../../imports/AnindDey.jpeg';
import ramaniPhoto from '../../imports/Ramani.jpg.webp';
import scottPhoto from '../../imports/Scott.webp';
import wolfgangPhoto from '../../imports/Wolfgang.png';
import perlinPhoto from '../../imports/Perlin.jpeg';
import jinwookPhoto from '../../imports/JW.jpg';
import youjinPhoto from '../../imports/YS.jpeg';

const instMeta: Record<string, { abbr: string; color: string }> = {
  'KAIST':                      { abbr: 'KAIST',  color: '#1E3A8A' },
  'University of Calgary':      { abbr: 'UCal',   color: '#D41E30' },
  'Adelaide University':        { abbr: 'AdeUni', color: '#002147' },
  'UCF':                        { abbr: 'UCF',    color: '#000000' },
  'Simon Fraser University':    { abbr: 'SFU',    color: '#CC0000' },
  'Purdue University':          { abbr: 'Purdue', color: '#C28E0E' },
  'Carnegie Mellon University': { abbr: 'CMU',    color: '#C41230' },
  'University of Washington':   { abbr: 'UW',     color: '#4B2E83' },
  'New York University':        { abbr: 'NYU',    color: '#57068C' },
};

function InstMark({ affil, size = 32 }: { affil: string; size?: number }) {
  const m = instMeta[affil] ?? { abbr: affil.slice(0, 4).toUpperCase(), color: '#334155' };
  return (
    <div
      className="flex items-center justify-center font-black leading-none text-center flex-shrink-0"
      style={{ backgroundColor: m.color, color: '#fff', width: size, height: size, fontSize: 8 }}
    >
      {m.abbr}
    </div>
  );
}

const organizers = [
  {
    type: 'Organizer',
    name: 'Sang Ho Yoon',
    affil: 'KAIST',
    role: 'Assistant Professor',
    email: 'sangho@kaist.ac.kr',
    photo: sangPhoto,
    website: 'https://sanghoy.com/',
  },
  {
    type: 'Organizer',
    name: 'Kangsoo Kim',
    affil: 'University of Calgary',
    role: 'Assistant Professor',
    email: 'kangsoo.kim@ucalgary.ca',
    photo: kangPhoto,
    website: 'https://www.kangsookim.com/',
  },
  {
    type: 'Assistant Organizer',
    name: 'Jinwook Kim',
    affil: 'KAIST',
    role: 'Post-Doc Researcher',
    email: '',
    photo: jinwookPhoto,
    website: 'http://www.jinwook.me/',
  },
  {
    type: 'Assistant Organizer',
    name: 'Youjin Sung',
    affil: 'KAIST',
    role: 'PhD Student',
    email: '',
    photo: youjinPhoto,
    website: 'https://youjinsung.com/',
  },
];

const speakers = [
  { name: 'Mark Billinghurst', affil: 'Adelaide University', affil2: 'University of Auckland', country: 'NZ / Australia', field: 'HCI · AR/VR · Empathic Computing', email: 'mark.billinghurst@unisa.edu.au', tel: '0406 407 031',  tracks: ['01'], photo: markPhoto, website: 'https://empathiccomputing.org/team/mark-billinghurst/' },
  { name: 'Greg Welch', affil: 'UCF', affil2: '', country: 'USA', field: 'AR/VR · Cognitive Science', email: '', tel: '',  tracks: ['01'], photo: gregPhoto, website: 'https://sreal.ucf.edu/sreal/people/welch/' },
  { name: 'Anind Dey', affil: 'University of Washington', affil2: '', country: 'USA', field: 'Context-Aware Computing · Cognitive Modeling', email: '', tel: '', keynote: null, tracks: ['01'], photo: anindPhoto, website: 'https://ischool.uw.edu/people/faculty/profile/anind' },
  { name: 'Karthik Ramani', affil: 'Purdue University', affil2: '', country: 'USA', field: 'Physical AI · 3D Interaction', email: '', tel: '', keynote: null, tracks: ['02'], photo: ramaniPhoto, website: 'https://engineering.purdue.edu/cdesign/wp/current-convergence-design-lab-members/' },
  { name: 'Scott Hudson', affil: 'Carnegie Mellon University', affil2: '', country: 'USA', field: 'HCI · AI', email: '', tel: '', tracks: ['02', '03'], photo: scottPhoto, website: 'https://www.cs.cmu.edu/~hudson/' },
  { name: 'Wolfgang Stuerzlinger', affil: 'Simon Fraser University', affil2: '', country: 'Canada', field: '3D Spatial Interaction · HCI', email: '', tel: '', keynote: null, tracks: ['03'], photo: wolfgangPhoto, website: 'https://vvise.iat.sfu.ca/people/wolfgang-stuerzlinger' },
  { name: 'Ken Perlin', affil: 'New York University', affil2: '', country: 'USA', field: 'Computer Graphics · Interactive Technology', email: '', tel: '', tracks: ['04'], photo: perlinPhoto, website: 'https://cs.nyu.edu/~perlin/' },
];

function OrganizerCard({ org }: { org: (typeof organizers)[number] }) {
  return (
    <div className="bg-[#060D1F] group overflow-hidden">
      <div className="aspect-[4/3] overflow-hidden">
        <ImageWithFallback
          src={org.photo}
          alt={org.name}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
          style={org.name === 'Sang Ho Yoon' ? { objectPosition: 'center 10%' } : undefined}
        />
      </div>
      <div className="p-7 border-t border-white/10">
        <div className="text-blue-400 text-[10px] uppercase tracking-widest mb-3">{org.type}</div>
        <div className="flex items-center gap-3 mb-4">
          <InstMark affil={org.affil} size={28} />
          <div>
            <div className="text-white font-black text-xl leading-none" style={{ fontFamily: 'Syne, sans-serif' }}>{org.name}</div>
            <div className="text-slate-500 text-xs mt-0.5">{org.affil} · {org.role}</div>
          </div>
        </div>
        <div className="space-y-1 pl-[40px]">
          {org.website && (
            <a href={org.website} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-blue-400 text-xs hover:text-blue-300">
              <Globe className="w-3 h-3" />Website
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export function CommitteesPage() {
  return (
    <div className="bg-[#060D1F] py-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">

        <div className="flex items-center gap-4 mb-16">
          <div className="w-6 h-px bg-blue-500" />
          <span className="text-blue-400 text-xs font-bold uppercase tracking-widest">Organizers & Speakers</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-black text-white mb-16 leading-none" style={{ fontFamily: 'Syne, sans-serif' }}>
          Organizers
        </h2>

        {/* ── ORGANIZERS — large photo cards ── */}
        <section className="mb-16">
          <div className="text-slate-600 text-[10px] uppercase tracking-widest mb-5">Organizing Committee</div>
          <div className="grid md:grid-cols-2 gap-px bg-white/10 mb-2">
            {organizers.filter((org) => org.type === 'Organizer').map((org, i) => (
              <OrganizerCard key={i} org={org} />
            ))}
          </div>
          <div className="text-slate-600 text-[10px] uppercase tracking-widest mb-5 mt-10">Assistant Organizers</div>
          <div className="grid md:grid-cols-2 gap-px bg-white/10">
            {organizers.filter((org) => org.type === 'Assistant Organizer').map((org, i) => (
              <OrganizerCard key={i} org={org} />
            ))}
          </div>
        </section>

        {/* ── INVITED SPEAKERS — square photo grid ── */}
        <section>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-16 leading-none" style={{ fontFamily: 'Syne, sans-serif' }}>
          Featured Speakers
        </h2>
          {/* <div className="text-slate-600 text-[10px] uppercase tracking-widest mb-5">Featured Speakers</div> */}

          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10">
            {speakers.map((sp, i) => (
              'website' in sp && sp.website ? (
                <a
                  key={i}
                  href={sp.website}
                  target="_blank"
                  rel="noreferrer"
                  className="group bg-[#060D1F] text-left overflow-hidden relative"
                >
                  {/* external link cards do not toggle the detail panel; they open the personal site */}
                  <div className="aspect-square overflow-hidden">
                    <ImageWithFallback
                      src={sp.photo}
                      alt={sp.name}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-3 border-t border-white/10">
                    {sp.keynote && (
                      <div className="mb-0.5">
                        <span className="text-[8px] font-bold text-blue-400 uppercase tracking-widest">Keynote</span>
                      </div>
                    )}
                    <div className="text-white font-black text-xs leading-tight" style={{ fontFamily: 'Syne, sans-serif' }}>{sp.name}</div>
                    <div className="text-slate-600 text-[10px] mt-0.5">{sp.affil}</div>
                    <div className="flex items-center gap-1 text-blue-400 text-[10px] mt-1.5">
                      <Globe className="w-2.5 h-2.5" />Website
                    </div>
                  </div>
                </a>
              ) : (
                <div
                  key={i}
                  className="group bg-[#060D1F] text-left overflow-hidden relative"
                >
                  {/* Square photo — grayscale until hover */}
                  <div className="aspect-square overflow-hidden">
                    <ImageWithFallback
                      src={sp.photo}
                      alt={sp.name}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                    />
                  </div>
                  {/* Caption */}
                  <div className="p-3 border-t border-white/10">
                    {sp.keynote && (
                      <div className="mb-0.5">
                        <span className="text-[8px] font-bold text-blue-400 uppercase tracking-widest">Keynote</span>
                      </div>
                    )}
                    <div className="text-white font-black text-xs leading-tight" style={{ fontFamily: 'Syne, sans-serif' }}>{sp.name}</div>
                    <div className="text-slate-600 text-[10px] mt-0.5">{sp.affil}</div>
                  </div>
                </div>
              )
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
