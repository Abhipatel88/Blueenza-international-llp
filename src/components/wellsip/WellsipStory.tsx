import React from 'react';
import { Play } from 'lucide-react';

const WellsipStory: React.FC = () => {
  return (
    <section id="story" className="relative border-t border-zinc-200 bg-white/70">
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-[1.1fr_minmax(0,1fr)] items-center">
          <div className="space-y-4 animate-on-scroll opacity-0 translate-y-6">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-zinc-900">
             Premium Alkaline mineral water

            </h2>
            <p className="text-base md:text-lg font-light leading-relaxed text-zinc-600">
             Wellsip is a premium drinking water brand designed to give you clean, healthy, and refreshing hydration every day. Our water goes through an advanced multi-stage purification process to ensure complete purity and safety in every sip. Wellsip offers alkaline water with a pH of 8+, which helps balance body acidity, supports better digestion, and promotes overall wellness. Wellsip is committed to delivering pure, safe, and superior-quality water you can trust.

            </p>
            <div className="flex flex-wrap items-center gap-4">
              <button className="group inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-light text-zinc-900 transition-colors duration-300 hover:border-pink-400 hover:bg-pink-50">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-pink-500/90 text-white shadow-lg shadow-pink-500/40">
                  <Play className="h-3.5 w-3.5 stroke-[1.5]" />
                </span>
                <span>Watch Video</span>
              </button>
              <span className="text-[0.75rem] font-light text-zinc-500">
                90-second story of our natural source and aquifer journey.
              </span>
            </div>
          </div>

          {/* Glass card */}
          <div className="relative rounded-2xl border border-zinc-200 bg-gradient-to-b from-white via-white to-zinc-50 p-6 shadow-[0_24px_60px_rgba(15,23,42,0.12)] backdrop-blur-2xl animate-on-scroll opacity-0 translate-y-6 [transition-delay:0.08s]">
            <div className="pointer-events-none absolute inset-0 rounded-2xl border border-white/60 bg-gradient-to-tr from-white/80 via-transparent to-pink-100/60"></div>
            <div className="relative space-y-5">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-[0.75rem] font-medium tracking-[0.22em] text-pink-500 uppercase">
                    pH Alkalinity
                  </p>
                  <p className="mt-1 text-sm font-light text-zinc-600">
                    7.5 – 9 pH alkalinity. Recommended value*: 6.5 – 9
                  </p>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-pink-50 text-[0.6rem] font-medium tracking-[0.22em] text-pink-600 uppercase">
                  pH&nbsp;8+
                </div>
              </div>
              <div className="space-y-3 text-[0.8rem] font-light text-zinc-700">
                <p className="text-sm leading-relaxed text-zinc-600">
                  Alkaline water helps balance body acidity, improves digestion, and boosts overall hydration. It supports detoxification and provides essential minerals for better energy and wellness. The smooth, refreshing taste makes it perfect for daily healthy drinking.
                </p>
              </div>
              <div className="flex items-center justify-between gap-4 pt-2">
                <div className="flex items-center gap-2 text-[0.75rem] text-zinc-500">
                  <span className="h-1.5 w-8 rounded-full bg-gradient-to-r from-pink-500 to-zinc-300"></span>
                  Premium alkaline water for daily wellness.
                </div>
                <button className="text-[0.75rem] font-medium text-pink-500 hover:text-pink-400 transition-colors duration-300">
                  Learn more →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WellsipStory;

