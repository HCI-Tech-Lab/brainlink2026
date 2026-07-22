import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Phone, Globe } from 'lucide-react';
import sangPhoto from '../../imports/Sang.png';
import kangPhoto from '../../imports/kang.png';
import markPhoto from '../../imports/Mark.jpg';
import gregPhoto from '../../imports/Greg.jpg';
import anindPhoto from '../../imports/AnindDey.jpg';
import ramaniPhoto from '../../imports/Ramani.jpeg';
import scottPhoto from '../../imports/Scott.jpg';
import wolfgangPhoto from '../../imports/Wolfgang.png';
import perlinPhoto from '../../imports/Perlin.png';
import jinwookPhoto from '../../imports/JW.jpg';
import youjinPhoto from '../../imports/YS.jpeg';

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
  { name: 'Mark Billinghurst', affil: 'Adelaide University', affil2: 'University of Auckland', country: 'NZ / Australia', field: 'HCI · AR/VR · Empathic Computing', email: 'mark.billinghurst@unisa.edu.au', tel: '0406 407 031',  tracks: ['01'], photo: markPhoto, website: 'https://empathiccomputing.org/team/mark-billinghurst/', zoom: 1.3, position: 'center 20%',
    title: 'Empathic Computing: Designing Human-Centric Spatial AI',
    abstract: 'This presentation gives an overview of Empathic Computing and how AI can be used to create more human-centric collaborative experiences. Empathic Computing involves combining elements of XR, spatial computing, physiological sensing and AI to enable people to connect in ways that have not been possible before. Examples of Empathic Computing systems will be shown, and opportunities for future research discussed.' },
  { name: 'Anind Dey', affil: 'University of Washington', affil2: '', country: 'USA', field: 'Context-Aware Computing · Cognitive Modeling', email: 'anind@uw.edu', tel: '', keynote: null, tracks: ['01'], photo: anindPhoto, website: 'https://ischool.uw.edu/people/faculty/profile/anind',
    title: 'Leveraging omnimodal AI to understand personal health',
    abstract: "Mobile devices allow for the collection of a large amount of data about people's behaviors and their interactions with the physical and virtual world. Data that is mostly discarded as being unimportant can be used to build models of human behavior to identify health behaviors of interest. Over the past several years, my research lab has leveraged omnimodal AI to detect and predict health behaviors to support early intervention. This talk will overview the progress that we've made and the challenges still to be addressed." },
  { name: 'Scott Hudson', affil: 'Carnegie Mellon University', affil2: '', country: 'USA', field: 'HCI · AI', email: 'scott.hudson@cs.cmu.edu', tel: '', tracks: ['02', '03'], photo: scottPhoto, website: 'https://www.cs.cmu.edu/~hudson/',
    title: 'Human Aspects of Human-AI Collaboration in Generative Design Systems',
    abstract: 'AI-based systems supporting design have made tremendous strides in the kinds of design problems they can attempt, providing significant value as a result. However, the majority of current generative design systems don\'t really consider humans to be "part of the system", or when they do, have a model of the user as a simple source of data. But, a partnership which makes both people and AI part of a cooperative system, is likely to produce richer and more powerful results. In this talk, I will consider some of the research challenges we face in moving beyond "users as data sources" and towards collaborative endeavors in which human users are "part of the system."' },
  { name: 'Ken Perlin', affil: 'New York University', affil2: '', country: 'USA', field: 'Computer Graphics · Interactive Technology', email: 'ken.perlin@gmail.com', tel: '', tracks: ['04'], photo: perlinPhoto, website: 'https://cs.nyu.edu/~perlin/',
    title: 'AI-enhanced Migratory User Interfaces for Collaborative Mixed Reality',
    abstract: 'Information lives everywhere, yet we interact with it in different ways, depending on how and where we encounter it. Recent advances in wearables now allow us to explore ways to seamlessly integrate the physical world into our workflow as we do knowledge work with our computers, with the assistance of artificial intelligence. In this talk I will explore how AI-assisted migratory user interfaces that support seamless transitions between screen-based workspaces and immersive workspaces can improve productivity, learning and collaboration.' },
  { name: 'Karthik Ramani', affil: 'Purdue University', affil2: '', country: 'USA', field: 'Physical AI · 3D Interaction', email: 'ramani@purdue.edu', tel: '', keynote: null, tracks: ['02'], photo: ramaniPhoto, website: 'https://engineering.purdue.edu/cdesign/wp/current-convergence-design-lab-members/', zoom: 1.2, position: 'center 20%',
    title: '', abstract: '' },
  { name: 'Wolfgang Stuerzlinger', affil: 'Simon Fraser University', affil2: '', country: 'Canada', field: '3D Spatial Interaction · HCI', email: 'w_s@sfu.ca', tel: '', keynote: null, tracks: ['03'], photo: wolfgangPhoto, website: 'https://vvise.iat.sfu.ca/people/wolfgang-stuerzlinger', zoom: 1.7, position: 'center 20%',
    title: 'Efficient Input Modalities and Interaction Techniques for Omnimodal AI-XR',
    abstract: 'Towards novel omnimodal interfaces, I start with an overview of current input technologies and their limitations. For 3D docking tasks, I then discuss a combination of bare-hand input techniques that enables more precise 3D interaction and a novel mapping for a 2D mouse that eclipses what a 3D controller can achieve. For text input, I discuss a novel method to evaluate new text entry methods, including gaze-based ones. Subsequently, I present a new system that uses an XR-LLM assistant during desktop writing tasks, which identifies that crossing between realities introduces a cost.' },
  { name: 'Greg Welch', affil: 'University of Central Florida', affil2: '', country: 'USA', field: 'AR/VR · Cognitive Science', email: 'welch@ucf.edu', tel: '',  tracks: ['01'], photo: gregPhoto, website: 'https://sreal.ucf.edu/sreal/people/welch/', zoom: 1.5, position: 'center 5%',
    title: 'Beyond XR',
    abstract: 'Today\'s XR systems, watches, rings, and smart glasses are each converging within their own technology categories. The next frontier may be convergence across those categories. For some time, I have been considering a centralized sensing and stimulation framework that observes a user, makes sense of what is happening, and then helps them in meaningful ways, combining measures of the user and the environment obtained from advanced body-worn devices to inform, assist, or influence the user in helpful ways.' },
];

function OrganizerCard({ org }: { org: (typeof organizers)[number] }) {
  return (
    <div className="bg-[#060D1F] group overflow-hidden">
      <div className="aspect-square overflow-hidden">
        <ImageWithFallback
          src={org.photo}
          alt={org.name}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
          style={org.name === 'Sang Ho Yoon' ? { objectPosition: 'center 10%' } : undefined}
        />
      </div>
      <div className="p-4 border-t border-white/10">
        <div className="text-blue-400 text-[9px] uppercase tracking-widest mb-2">{org.type}</div>
        <div className="mb-2">
          <div className="text-white font-black text-sm leading-tight" style={{ fontFamily: 'Syne, sans-serif' }}>{org.name}</div>
          <div className="text-slate-500 text-[10px] mt-0.5">{org.affil} · {org.role}</div>
        </div>
        {org.website && (
          <a href={org.website} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-blue-400 text-[10px] hover:text-blue-300">
            <Globe className="w-2.5 h-2.5" />Website
          </a>
        )}
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#060D1F] mb-2">
            {organizers.filter((org) => org.type === 'Organizer').map((org, i) => (
              <OrganizerCard key={i} org={org} />
            ))}
          </div>
          <div className="text-slate-600 text-[10px] uppercase tracking-widest mb-5 mt-10">Assistant Organizers</div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#060D1F]">
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

          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#060D1F]">
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
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                      style={{
                        objectPosition: 'position' in sp && sp.position ? sp.position : 'center',
                        transform: `scale(${'zoom' in sp && sp.zoom ? sp.zoom : 1})`,
                        transformOrigin: 'position' in sp && sp.position ? sp.position : 'center',
                      }}
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
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                      style={{
                        objectPosition: 'position' in sp && sp.position ? sp.position : 'center',
                        transform: `scale(${'zoom' in sp && sp.zoom ? sp.zoom : 1})`,
                        transformOrigin: 'position' in sp && sp.position ? sp.position : 'center',
                      }}
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
