import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import MineralCard from './MineralCard';

const MineralComposition: React.FC = () => {
  const [openMineralIndex, setOpenMineralIndex] = useState<number | null>(null);

  const toggleMineral = (index: number) => {
    setOpenMineralIndex(openMineralIndex === index ? null : index);
  };

  const minerals = [
    {
      symbol: 'Ca²⁺',
      name: 'Calcium',
      value: '21',
      description: 'Supports bone health, muscle function, and nerve transmission.',
    },
    {
      symbol: 'Mg²⁺',
      name: 'Magnesium',
      value: '11',
      description: 'Aids in energy production, muscle relaxation, and cardiovascular health.',
    },
    {
      symbol: 'HCO₃⁻',
      name: 'Bicarbonates',
      value: '200',
      description: 'Helps maintain pH balance and supports digestive wellness.',
    },
    {
      symbol: 'SiO₂',
      name: 'Silica',
      value: '12',
      description: 'Contributes to connective tissue health and skin elasticity.',
    }
  ];

  return (
    <section id="water" className="relative border-t border-zinc-200 bg-zinc-50/80">
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="space-y-2">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-zinc-900">
              Mineral Composition
            </h2>
            <p className="text-base font-light text-zinc-600">
              Enriched with essential minerals for optimal hydration and wellness.
            </p>
          </div>
          <div className="text-[0.75rem] font-light text-zinc-500">
            Values in mg/L · Occurring
          </div>
        </div>

        {/* Desktop Grid View */}
        <div className="hidden md:grid mt-8 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {minerals.map((mineral, index) => (
            <MineralCard
              key={mineral.symbol}
              symbol={mineral.symbol}
              name={mineral.name}
              value={mineral.value}
              description={mineral.description}
              delay={`${index * 0.05}s`}
            />
          ))}
        </div>

        {/* Mobile Accordion View */}
        <div className="md:hidden mt-8 space-y-3">
          {minerals.map((mineral, index) => (
            <div
              key={mineral.symbol}
              className="rounded-2xl border border-zinc-200 bg-white shadow-[0_16px_40px_rgba(15,23,42,0.08)] backdrop-blur-2xl animate-on-scroll opacity-0 translate-y-6"
              style={{ transitionDelay: `${index * 0.05}s` }}
            >
              <button
                onClick={() => toggleMineral(index)}
                className="w-full flex items-center justify-between p-4 text-left"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-pink-50 text-pink-600 font-bold">
                    <div className="text-center">
                      <div className="text-xs leading-none">{mineral.value}</div>
                      <div className="text-[0.6rem] mt-0.5">mg/l</div>
                    </div>
                  </div>
                  <div>
                    <span className="text-[0.75rem] font-medium tracking-[0.22em] text-pink-500 uppercase">
                      {mineral.symbol}
                    </span>
                    <div className="text-sm font-medium text-zinc-900">{mineral.name}</div>
                  </div>
                </div>
                <ChevronDown 
                  className={`h-5 w-5 text-zinc-400 transition-transform duration-200 ${
                    openMineralIndex === index ? 'rotate-180' : ''
                  }`} 
                />
              </button>
              
              {openMineralIndex === index && (
                <div className="px-4 pb-4 pt-0">
                  <div className="border-t border-zinc-100 pt-3">
                    <p className="text-[0.8rem] font-light leading-relaxed text-zinc-600">
                      {mineral.description}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-zinc-200 bg-white p-5 shadow-[0_20px_50px_rgba(15,23,42,0.08)] backdrop-blur-2xl animate-on-scroll opacity-0 translate-y-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="space-y-1">
              <p className="text-sm font-medium text-zinc-900">
                Total Dissolved Solids (TDS): ~120-180  mg/L
              </p>
              <p className="text-[0.8rem] font-light text-zinc-600">
                Optimal mineral content for a balanced, smooth taste and superior hydration.
              </p>
            </div>
            <button className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-light text-zinc-900 transition-colors duration-300 hover:border-pink-400 hover:bg-pink-50">
              <span>Download full analysis</span>
              <span className="text-pink-500">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MineralComposition;

