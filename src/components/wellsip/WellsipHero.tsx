import React from 'react';
import Bottle3D from '../Bottle3D';

const WellsipHero: React.FC = () => {
  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 px-4 py-10 md:flex-row md:py-16 lg:py-10 ">
        {/* Text */}
        <div className="w-full md:w-1/2">
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-[0.65rem] font-light tracking-tight text-zinc-700 animate-fade-in-up opacity-0 translate-y-3">
            <span className="h-1 w-1 rounded-full bg-pink-500"></span>
            <span>Naturally enriched · pH 8+</span>
          </div>
          <h1 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-zinc-900 animate-fade-in-up opacity-0 translate-y-3 [animation-delay:0.06s]">
            BORN ALKALINE –<br />
            Premium Mineral Water
          </h1>
          <p className="mt-4 text-base md:text-lg font-light leading-relaxed text-zinc-600 animate-fade-in-up opacity-0 translate-y-3 [animation-delay:0.12s]">
            Wellsip is naturally alkaline mineral water, enriched through decades of filtration in
            mineral-rich strata, delivering a smooth, crisp sip with a stable pH of 8+.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-4 animate-fade-in-up opacity-0 translate-y-3 [animation-delay:0.18s]">
            <button className="relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-pink-500 via-pink-400 to-pink-500 px-6 py-2.5 text-sm font-medium tracking-tight text-white shadow-lg shadow-pink-500/40 transition-transform duration-300 hover:-translate-y-[1px]">
              <span className="relative z-10">Order Now</span>
            </button>
            <button className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-light text-zinc-900 transition-colors duration-300 hover:border-pink-400 hover:bg-pink-50">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-pink-50 text-[0.7rem] text-pink-500">
                pH 8+
              </span>
              <span>Learn more about our source</span>
            </button>
          </div>
          <div className="mt-5 flex flex-wrap items-center gap-6 text-[0.7rem] md:text-xs font-light text-zinc-500 animate-fade-in-up opacity-0 translate-y-3 [animation-delay:0.24s]">
            <div className="flex items-center gap-2">
              <span className="h-5 w-[1px] bg-gradient-to-b from-pink-500 via-zinc-400 to-transparent"></span>
              <div className="flex flex-col">
                <span className="text-zinc-900">pH 8+ stable</span>
                <span>naturally alkaline, no artificial ionization</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-5 w-[1px] bg-gradient-to-b from-pink-500 via-zinc-400 to-transparent"></span>
              <div className="flex flex-col">
                <span className="text-zinc-900">Mineral-rich</span>
                <span>balanced magnesium, calcium, bicarbonates</span>
              </div>
            </div>
          </div>
        </div>

        {/* Hero image / bottle */}
        <div className="relative flex w-full items-center justify-center md:w-1/2 animate-fade-in-up opacity-0 translate-y-3 [animation-delay:0.18s]">
          <div className="relative aspect-[3/5] w-3/4 max-w-md rounded-[1.75rem] border border-zinc-200 bg-white shadow-[0_0_60px_rgba(236,72,153,0.30)] backdrop-blur-3xl">
            {/* Inner glow */}
            <div className="pointer-events-none absolute inset-2 rounded-[1.25rem] border border-zinc-100 bg-gradient-to-b from-white via-zinc-50 to-zinc-200/60"></div>

            {/* Bottle placeholder */}
            <div className="relative z-10 flex h-full flex-col items-center justify-center">
              <div className="relative flex h-3/4 w-2/3 items-center justify-center rounded-full bg-gradient-to-b from-zinc-100 via-white to-zinc-300 shadow-[0_40px_60px_rgba(15,23,42,0.2)] animate-bottle-float">
                <div className="flex h-[80%] w-[50%] items-center justify-center rounded-[1.6rem] border border-zinc-200 bg-gradient-to-b from-white via-zinc-50 to-zinc-200">
                  <Bottle3D className="h-full w-full" />
                </div>
              </div>
              <div className="mt-3 text-center text-[0.7rem] font-light text-zinc-500">
                "Pure by nature, perfected by time"<br />
                <span className="text-pink-500">— Premium alkaline hydration</span>
              </div>
            </div>

            {/* Top label */}
            <div className="pointer-events-none absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-zinc-200 bg-white/90 px-2.5 py-1 text-[0.6rem] font-light tracking-tight text-zinc-700 shadow-lg">
              <span className="h-1.5 w-1.5 rounded-full bg-pink-500"></span>
              <span>Mineral-rich aquifer</span>
            </div>

            {/* pH badge */}
            <div className="pointer-events-none absolute -right-6 top-8 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-tr from-pink-500 to-white text-center text-[0.65rem] font-medium tracking-tight text-zinc-900 shadow-xl shadow-pink-500/40">
              <span>
                pH<br />8+
              </span>
            </div>

            {/* Gradient ring */}
            <div className="pointer-events-none absolute -right-10 bottom-6 h-24 w-24 rounded-full border border-pink-500/40 bg-pink-200/40 blur-md"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WellsipHero;

