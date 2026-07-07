import React, { useState } from 'react';
import { Mail, Phone, Send, MapPin, Building } from 'lucide-react';

function LogoBadge({ abbr, color, textColor = '#fff' }: { abbr: string; color: string; textColor?: string }) {
  return (
    <div className="w-10 h-10 flex items-center justify-center font-black text-[9px] flex-shrink-0" style={{ backgroundColor: color, color: textColor }}>
      {abbr}
    </div>
  );
}

export function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', affil: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setFormData({ name: '', email: '', affil: '', message: '' });
    setTimeout(() => setSent(false), 4000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="bg-[#060D1F] py-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex items-center gap-4 mb-16">
          <div className="w-6 h-px bg-blue-500" />
          <span className="text-blue-400 text-xs font-bold uppercase tracking-widest">Contact</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-black text-white mb-20 leading-none" style={{ fontFamily: 'Syne, sans-serif' }}>
          Get In Touch
        </h2>

        <div className="grid lg:grid-cols-5 gap-px bg-white/10 mb-16">
          {/* Contact form */}
          <div className="lg:col-span-3 bg-[#060D1F] p-8">
            <div className="text-slate-600 text-xs uppercase tracking-widest mb-6">Send an Inquiry</div>
            {sent ? (
              <div className="flex items-center justify-center h-48 text-center">
                <div>
                  <div className="w-12 h-12 bg-blue-600 flex items-center justify-center mx-auto mb-3">
                    <Send className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-white font-bold">Sent.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" required className="w-full h-10 px-3 bg-[#0D1635] border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-blue-500 transition-colors" />
                  <input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Email" required className="w-full h-10 px-3 bg-[#0D1635] border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-blue-500 transition-colors" />
                </div>
                <input name="affil" value={formData.affil} onChange={handleChange} placeholder="Affiliation" className="w-full h-10 px-3 bg-[#0D1635] border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-blue-500 transition-colors" />
                <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Message" required rows={5} className="w-full px-3 py-2.5 bg-[#0D1635] border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-blue-500 transition-colors resize-none" />
                <button type="submit" className="flex items-center gap-2 px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold transition-all">
                  <Send className="w-3.5 h-3.5" /> Send
                </button>
              </form>
            )}
          </div>

          {/* Organizers */}
          <div className="lg:col-span-2 bg-[#0D1635]">
            <div className="divide-y divide-white/10">
              {/* Sang Ho Yoon */}
              <div className="p-6">
                <div className="text-slate-600 text-xs uppercase tracking-widest mb-4">Domestic Organizer</div>
                <div className="flex items-center gap-3 mb-3">
                  
                  <div>
                    <div className="text-white font-black text-sm" style={{ fontFamily: 'Syne, sans-serif' }}>Sang Ho Yoon</div>
                    <div className="text-slate-500 text-xs">KAIST</div>
                  </div>
                </div>
              </div>

              {/* Kangsoo Kim */}
              <div className="p-6">
                <div className="text-slate-600 text-xs uppercase tracking-widest mb-4">Overseas Organizer</div>
                <div className="flex items-center gap-3 mb-4">
                 
                  <div>
                    <div className="text-white font-black text-sm" style={{ fontFamily: 'Syne, sans-serif' }}>Kangsoo Kim</div>
                    <div className="text-slate-500 text-xs">University of Calgary</div>
                    <div className="text-slate-600 text-xs">Asst. Prof., Electrical & Software Eng.</div>
                  </div>
                </div>
                <div className="space-y-2 pl-13">
                  <a href="mailto:kangsoo.kim@ucalgary.ca" className="flex items-center gap-2 text-xs text-blue-400 hover:text-blue-300">
                    <Mail className="w-3 h-3" /> kangsoo.kim@ucalgary.ca
                  </a>
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <Phone className="w-3 h-3" /> +1 (825) 438-5405
                  </div>
                </div>
              </div>

              {/* Host */}
              <div className="p-6">
                <div className="text-slate-600 text-xs uppercase tracking-widest mb-4">Host Institution</div>
                <div className="flex items-center gap-3 mb-2">
                  <LogoBadge abbr="KAIST" color="#1E3A8A" />
                  <div>
                    <div className="text-white font-semibold text-sm">KAIST</div>
                    <div className="text-slate-500 text-xs">Korea Advanced Institute of Science and Technology</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Venue & program info strip */}
        <div className="grid md:grid-cols-3 gap-px bg-white/10">
          {[
            { icon: <MapPin className="w-4 h-4" />, label: 'Venue', value: 'Sheraton Grand Incheon Hotel, Korea' },
            { icon: <Building className="w-4 h-4" />, label: 'Dates', value: 'Aug 9–11, 2026', sub: '3 Days · 2 Nights' },
            { icon: <Mail className="w-4 h-4" />, label: 'Program', value: '100+ Participants', sub: '16 Overseas Scholars · 3 Days' },
          ].map((item, i) => (
            <div key={i} className="bg-[#0D1635] p-6">
              <div className="text-blue-400 mb-3">{item.icon}</div>
              <div className="text-slate-600 text-xs uppercase tracking-widest mb-1">{item.label}</div>
              <div className="text-white font-semibold text-sm">{item.value}</div>
              <div className="text-slate-500 text-xs mt-0.5">{item.sub}</div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
