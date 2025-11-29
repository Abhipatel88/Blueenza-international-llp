import React from 'react';
import MineralCard from './MineralCard';

const MineralComposition: React.FC = () => {
  const minerals = [
    {
      symbol: 'Ca²⁺',
      name: 'Calcium',
      value: '40',
      description: 'Supports bone health, muscle function, and nerve transmission.',
    },
    {
      symbol: 'Mg²⁺',
      name: 'Magnesium',
      value: '25',
      description: 'Aids in energy production, muscle relaxation, and cardiovascular health.',
    },
    {
      symbol: 'HCO₃⁻',
      name: 'Bicarbonates',
      value: '180',
      description: 'Helps maintain pH balance and supports digestive wellness.',
    },
    {
      symbol: 'K⁺',
      name: 'Potassium',
      value: '2',
      description: 'Essential for fluid balance, nerve signals, and muscle contractions.',
    },
    {
      symbol: 'Na⁺',
      name: 'Sodium',
      value: '8',
      description: 'Regulates fluid balance and supports nerve and muscle function.',
    },
    {
      symbol: 'SiO₂',
      name: 'Silica',
      value: '15',
      description: 'Contributes to connective tissue health and skin elasticity.',
    },
    {
      symbol: 'SO₄²⁻',
      name: 'Sulfates',
      value: '12',
      description: 'Supports detoxification processes and digestive health.',
    },
    {
      symbol: 'Cl⁻',
      name: 'Chlorides',
      value: '6',
      description: 'Helps maintain proper fluid balance and digestive acid production.',
    },
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
              Naturally enriched with essential minerals for optimal hydration and wellness.
            </p>
          </div>
          <div className="text-[0.75rem] font-light text-zinc-500">
            Values in mg/L · Naturally occurring
          </div>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
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

        <div className="mt-8 rounded-2xl border border-zinc-200 bg-white p-5 shadow-[0_20px_50px_rgba(15,23,42,0.08)] backdrop-blur-2xl animate-on-scroll opacity-0 translate-y-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="space-y-1">
              <p className="text-sm font-medium text-zinc-900">
                Total Dissolved Solids (TDS): ~290 mg/L
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

