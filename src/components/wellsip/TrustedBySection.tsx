import React from 'react';
import { Play, Clock } from 'lucide-react';

const TrustedBySection: React.FC = () => {
  const partners = [
    'LuxeStay Hotels',
    'Elevate Fitness',
    'Meridian Spa',
    'Apex League',
  ];

  return (
    <section id="trusted" className="relative border-t border-zinc-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="space-y-2">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-zinc-900">
              Trusted By
            </h2>
            <p className="text-base font-light text-zinc-600">
              From luxury hospitality to world‑class athletes, Wellsip is chosen where water
              quality cannot be compromised.
            </p>
          </div>
          <div className="text-[0.75rem] font-light text-zinc-500">
            Hotels · Fine Dining · Training Facilities · Wellness Retreats
          </div>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_minmax(0,1fr)] items-start">
          {/* Logo grid */}
          <div className="grid grid-cols-2 gap-4 rounded-2xl border border-zinc-200 bg-white p-5 shadow-[0_20px_50px_rgba(15,23,42,0.08)] backdrop-blur-2xl animate-on-scroll opacity-0 translate-y-6">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="flex h-16 items-center justify-center rounded-xl border border-zinc-200 bg-zinc-50 text-xs font-medium tracking-[0.22em] text-zinc-600 uppercase"
              >
                {partner}
              </div>
            ))}
          </div>

          {/* Video card */}
          <div className="relative rounded-2xl border border-zinc-200 bg-white p-5 shadow-[0_20px_50px_rgba(15,23,42,0.08)] backdrop-blur-2xl animate-on-scroll opacity-0 translate-y-6 [transition-delay:0.08s]">
            <div className="relative flex aspect-video items-center justify-center overflow-hidden rounded-xl border border-zinc-200 bg-gradient-to-br from-zinc-200 via-white to-zinc-100">
              <div className="absolute inset-0 opacity-70">
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-zinc-900 via-zinc-800/80 to-transparent"></div>
              </div>
              <div className="relative z-10 flex flex-col items-center gap-3 text-center">
                <button className="group inline-flex h-12 w-12 items-center justify-center rounded-full bg-white text-pink-500 shadow-xl shadow-pink-500/40 transition-transform duration-300 hover:scale-105">
                  <Play className="h-4 w-4 stroke-[1.5]" />
                </button>
                <div className="space-y-1">
                  <p className="text-sm font-medium text-white">
                    Elite Sportsperson x Wellsip
                  </p>
                  <p className="text-[0.8rem] font-light text-zinc-200">
                    Short film featuring pre‑ and post‑training rituals with Wellsip as the
                    constant.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-3 flex items-center justify-between gap-3 text-[0.75rem]">
              <div className="flex items-center gap-2 text-zinc-500">
                <Clock className="h-3.5 w-3.5 stroke-[1.5]" />
                <span>2:34 min</span>
              </div>
              <button className="text-[0.75rem] font-medium text-pink-500 hover:text-pink-400 transition-colors duration-300">
                Watch the story →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;

