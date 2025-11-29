import React from 'react';
import { Leaf, Recycle, Droplet } from 'lucide-react';

const SustainabilitySection: React.FC = () => {
  return (
    <section id="sustainability" className="relative border-t border-zinc-200 bg-zinc-50/80">
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="space-y-2">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-zinc-900">
              Sustainability Commitment
            </h2>
            <p className="text-base font-light text-zinc-600">
              We believe premium quality and environmental responsibility go hand in hand.
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          <div className="group rounded-2xl border border-zinc-200 bg-white p-6 shadow-[0_16px_40px_rgba(15,23,42,0.08)] backdrop-blur-2xl transition-all duration-500 hover:shadow-[0_20px_50px_rgba(236,72,153,0.15)] animate-on-scroll opacity-0 translate-y-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-pink-50">
              <Recycle className="h-6 w-6 stroke-[1.5] text-pink-500" />
            </div>
            <h3 className="mt-4 text-sm font-medium text-zinc-900">100% Recyclable Bottles</h3>
            <p className="mt-2 text-[0.8rem] font-light leading-relaxed text-zinc-600">
              Our bottles are made from 100% recyclable PET plastic, designed for a circular economy.
              We encourage recycling and use recycled materials wherever possible.
            </p>
          </div>

          <div className="group rounded-2xl border border-zinc-200 bg-white p-6 shadow-[0_16px_40px_rgba(15,23,42,0.08)] backdrop-blur-2xl transition-all duration-500 hover:shadow-[0_20px_50px_rgba(236,72,153,0.15)] animate-on-scroll opacity-0 translate-y-6 [transition-delay:0.08s]">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-pink-50">
              <Droplet className="h-6 w-6 stroke-[1.5] text-pink-500" />
            </div>
            <h3 className="mt-4 text-sm font-medium text-zinc-900">Responsible Sourcing</h3>
            <p className="mt-2 text-[0.8rem] font-light leading-relaxed text-zinc-600">
              We monitor our aquifer levels continuously to ensure sustainable extraction rates that
              protect the natural ecosystem for future generations.
            </p>
          </div>

          <div className="group rounded-2xl border border-zinc-200 bg-white p-6 shadow-[0_16px_40px_rgba(15,23,42,0.08)] backdrop-blur-2xl transition-all duration-500 hover:shadow-[0_20px_50px_rgba(236,72,153,0.15)] animate-on-scroll opacity-0 translate-y-6 [transition-delay:0.16s]">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-pink-50">
              <Leaf className="h-6 w-6 stroke-[1.5] text-pink-500" />
            </div>
            <h3 className="mt-4 text-sm font-medium text-zinc-900">Carbon Neutral Operations</h3>
            <p className="mt-2 text-[0.8rem] font-light leading-relaxed text-zinc-600">
              We offset our carbon footprint through verified environmental projects and continuously
              work to reduce emissions across our supply chain.
            </p>
          </div>
        </div>
{/* 
        <div className="mt-8 rounded-2xl border border-zinc-200 bg-white p-6 shadow-[0_20px_50px_rgba(15,23,42,0.08)] backdrop-blur-2xl animate-on-scroll opacity-0 translate-y-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="space-y-1">
              <p className="text-sm font-medium text-zinc-900">
                Our 2024 Sustainability Report
              </p>
              <p className="text-[0.8rem] font-light text-zinc-600">
                Read about our environmental initiatives, goals, and progress toward a more sustainable future.
              </p>
            </div>
            <button className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-light text-zinc-900 transition-colors duration-300 hover:border-pink-400 hover:bg-pink-50">
              <span>Download report</span>
              <span className="text-pink-500">→</span>
            </button>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default SustainabilitySection;

