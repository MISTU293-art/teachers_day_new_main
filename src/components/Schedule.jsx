import React from 'react';
import { Clock, MapPin, Sparkles } from 'lucide-react';

export default function Schedule() {
  return (
    <section id="schedule" className="py-24 relative bg-[#060913]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono mb-4">
            <Clock className="w-3.5 h-3.5" />
            <span>PROGRAM SCHEDULE • 3RD SEPTEMBER 2026</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Program <span className="gradient-text">Schedule</span>
          </h2>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            The complete program schedule and event details will be announced soon.
          </p>
        </div>

        {/* Announcement Card */}
        <div className="glass-panel rounded-3xl border border-indigo-500/20 p-8 sm:p-12 text-center relative overflow-hidden">

          {/* Background Glow */}
          <div className="absolute -top-20 -right-20 w-56 h-56 bg-indigo-500/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-56 h-56 bg-blue-500/10 rounded-full blur-3xl" />

          <div className="relative z-10">

            {/* Icon */}
            <div className="mx-auto mb-6 w-16 h-16 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center">
              <Sparkles className="w-8 h-8 text-indigo-400" />
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Schedule <span className="gradient-text">To Be Announced</span>
            </h3>

            <p className="max-w-2xl mx-auto text-slate-400 text-sm sm:text-base leading-relaxed mb-8">
              We are preparing an exciting and memorable Teachers’ Day celebration.
              The detailed event schedule, activities, timings, and venue will be
              announced soon.
            </p>

            {/* Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto">

              {/* Date */}
              <div className="rounded-2xl bg-slate-900/60 border border-slate-800 p-5">
                <Clock className="w-5 h-5 text-indigo-400 mx-auto mb-3" />

                <p className="text-xs text-slate-500 font-mono uppercase mb-1">
                  Date
                </p>

                <p className="text-white font-semibold">
                  3rd September 2026
                </p>
              </div>

              {/* Venue */}
              <div className="rounded-2xl bg-slate-900/60 border border-slate-800 p-5">
                <MapPin className="w-5 h-5 text-emerald-400 mx-auto mb-3" />

                <p className="text-xs text-slate-500 font-mono uppercase mb-1">
                  Venue
                </p>

                <p className="text-white font-semibold">
                  To Be Announced
                </p>
              </div>

            </div>

            {/* Bottom Notice */}
            <div className="mt-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              Stay tuned for updates
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}