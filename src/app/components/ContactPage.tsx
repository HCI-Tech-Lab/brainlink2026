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
    const subject = `[BrainLink 2026 Inquiry] ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\nAffiliation: ${formData.affil}\n\n${formData.message}`;
    window.location.href = `mailto:jinwook.kim31@kaist.ac.kr?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
    setFormData({ name: '', email: '', affil: '', message: '' });
    setTimeout(() => setSent(false), 4000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="bg-white py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-6 h-px bg-blue-500" />
          <span className="text-blue-500 text-xs font-bold uppercase tracking-widest">Contact</span>
        </div>
        <h2 className="text-lg font-black text-slate-900 mb-6 leading-none" style={{ fontFamily: 'Syne, sans-serif' }}>
          Get In Touch
        </h2>

        <div className="grid lg:grid-cols-5 gap-px bg-slate-100">
          {/* Contact form */}
          <div className="lg:col-span-3 bg-white p-8">
            <div className="text-slate-400 text-xs uppercase tracking-widest mb-6">Send an Inquiry</div>
            {sent ? (
              <div className="flex items-center justify-center h-48 text-center">
                <div>
                  <div className="w-12 h-12 bg-blue-600 flex items-center justify-center mx-auto mb-3">
                    <Send className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-slate-900 font-bold">Sent.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" required className="w-full h-10 px-3 bg-white border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-blue-500 transition-colors" />
                  <input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Email" required className="w-full h-10 px-3 bg-white border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-blue-500 transition-colors" />
                </div>
                <input name="affil" value={formData.affil} onChange={handleChange} placeholder="Affiliation" className="w-full h-10 px-3 bg-white border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-blue-500 transition-colors" />
                <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Message" required rows={5} className="w-full px-3 py-2.5 bg-white border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-blue-500 transition-colors resize-none" />
                <button type="submit" className="flex items-center gap-2 px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold transition-all">
                  <Send className="w-3.5 h-3.5" /> Send
                </button>
              </form>
            )}
          </div>

          {/* Map */}
          <div className="lg:col-span-2 bg-white">
            <iframe
              title="Sheraton Grand Incheon Hotel location"
              className="w-full h-full min-h-[320px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=Sheraton+Grand+Incheon+Hotel&output=embed"
            />
          </div>

        </div>

      </div>
    </div>
  );
}
