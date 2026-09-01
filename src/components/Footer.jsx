import React from 'react';
import { Terminal, Heart, ShieldCheck, ArrowUp, Sparkles } from 'lucide-react';
import { API_ENDPOINTS } from '../config/api';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#05070f] border-t border-slate-900 py-12 text-slate-400 text-xs font-sans relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Brand Col */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-mono font-bold text-xs">
                CSE
              </div>
              <span className="font-mono font-bold text-white text-base">Department Event Hub</span>
            </div>
            <p className="text-slate-400 text-xs max-w-sm mb-4 leading-relaxed">
              Official event and program management portal for the Department of Computer Science &amp; Engineering. Managed live by faculty and student organizers.
            </p>
            <div className="flex items-center gap-2 text-slate-500 font-mono text-[11px]">
              <Terminal className="w-3.5 h-3.5 text-blue-400" />
              <span>Event Ledger &amp; Live Schedules Active</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-mono text-white text-xs font-bold uppercase tracking-wider mb-3">Quick Navigation</h4>
            <ul className="space-y-2">
              <li><a href="#hero" className="hover:text-white transition-colors">Home &amp; Highlights</a></li>
              <li><a href="#programs" className="hover:text-white transition-colors">All Programs &amp; Events</a></li>
              <li><a href="#schedule" className="hover:text-white transition-colors">Program Schedule</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About CSE Dept</a></li>
              <li><a href="#gallery" className="hover:text-white transition-colors">Official Gallery</a></li>
              <li><a href="#participate" className="hover:text-white transition-colors">Register / Participate</a></li>
            </ul>
          </div>

          {/* Admin & Department Portal */}
          <div>
            <h4 className="font-mono text-white text-xs font-bold uppercase tracking-wider mb-3">Admin Portal</h4>
            <p className="text-slate-400 text-[11px] mb-3">
              Department coordinators and SuperAdmins can schedule next programs, upload photos, and manage finances.
            </p>
            <a
              href={API_ENDPOINTS.ADMIN_LOGIN}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 hover:text-white hover:border-slate-700 transition-all text-xs font-mono"
            >
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              Admin Portal Access
            </a>
          </div>

        </div>

       {/* Bottom Bar */}
<div className="pt-8 border-t border-slate-900/80 flex flex-col sm:flex-row items-center justify-between gap-5">
  
  {/* Credits */}
  <div className="text-center sm:text-left space-y-2">
    <p className="text-slate-500 text-[11px] font-mono flex flex-wrap items-center justify-center sm:justify-start gap-1">
      <span>
        © 2026 Department of Computer Science & Engineering.
      </span>
      <span>Built with</span>
      <Heart className="w-3 h-3 text-rose-500 fill-rose-500 animate-pulse" />
      <span>by CSE Students.</span>
    </p>

    <p className="text-slate-600 text-[11px] font-mono">
      Designed & Developed by{" "}
      <a
        href="https://mistudebnath.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-cyan-400 hover:text-cyan-300 transition-colors font-semibold hover:underline underline-offset-4"
      >
        Mistu Debnath
      </a>
    </p>
  </div>

  {/* Back to Top */}
  <button
    onClick={scrollToTop}
    className="group flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-white hover:border-cyan-500/50 hover:bg-slate-800 text-[11px] font-mono transition-all duration-300"
  >
    <span>Back to top</span>
    <ArrowUp className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-translate-y-0.5" />
  </button>

</div>

      </div>
    </footer>
  );
}
