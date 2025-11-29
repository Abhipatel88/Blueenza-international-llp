import React from 'react';

interface MineralCardProps {
  symbol: string;
  name: string;
  value: string;
  description: string;
  delay?: string;
}

const MineralCard: React.FC<MineralCardProps> = ({ symbol, name, value, description, delay = '0s' }) => {
  return (
    <div
      className="mineral-card group relative rounded-2xl border border-zinc-200 bg-white p-5 shadow-[0_16px_40px_rgba(15,23,42,0.08)] backdrop-blur-2xl transition-all duration-500 hover:shadow-[0_20px_50px_rgba(236,72,153,0.15)] opacity-0 translate-y-6"
      style={{ transitionDelay: delay }}
    >
      <div className="pointer-events-none absolute inset-0 rounded-2xl border border-white/60 bg-gradient-to-tr from-white/80 via-transparent to-pink-50/40 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
      <div className="relative flex items-start justify-between gap-3">
        <div className="flex flex-col">
          <span className="text-[0.75rem] font-medium tracking-[0.22em] text-pink-500 uppercase">
            {symbol}
          </span>
          <span className="mt-1 text-sm font-medium text-zinc-900">{name}</span>
        </div>
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-pink-50 text-[0.7rem] font-semibold text-pink-600">
          {value}
        </div>
      </div>
      <p className="relative mt-3 text-[0.8rem] font-light leading-relaxed text-zinc-600">
        {description}
      </p>
    </div>
  );
};

export default MineralCard;

