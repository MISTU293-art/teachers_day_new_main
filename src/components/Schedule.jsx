import React from 'react';
import { Clock, MapPin, Sparkles, Coffee, Gift, Music2, Cake, Mic } from 'lucide-react';

export default function Schedule() {

  return (
    <section id="schedule" className="py-24 relative bg-[#060913]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono mb-4">
            <Clock className="w-3.5 h-3.5" />
            <span>EVENT TIMELINE • 3RD SEPTEMBER 2026</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Program <span className="gradient-text">Itinerary</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            A thoughtfully curated full-day schedule designed to honor, entertain, and celebrate our professors.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((ev, idx) => (
            <div
              key={idx}
              className="glass-panel rounded-2xl p-6 border border-slate-800 hover:border-indigo-500/40 transition-all hover:-translate-y-1 relative overflow-hidden group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2 px-3 py-1 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 font-mono text-xs font-semibold">
                    <Clock className="w-3.5 h-3.5" />
                    {ev.time}
                  </div>
                  <span className="text-[11px] font-mono text-slate-400 px-2 py-0.5 rounded bg-slate-800">
                    {ev.tag}
                  </span>
                </div>

                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-800/80 border border-slate-700 flex items-center justify-center text-indigo-400 shrink-0 group-hover:scale-110 transition-transform">
                    <ev.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white leading-snug">{ev.title}</h3>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed mb-4">{ev.desc}</p>
              </div>

              <div className="pt-3 border-t border-slate-800/80 flex items-center gap-2 text-[11px] text-slate-500 font-mono">
                <MapPin className="w-3 h-3 text-emerald-400" />
                <span>To Be Announced</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
