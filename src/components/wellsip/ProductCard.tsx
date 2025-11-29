import React from 'react';
import { Eye } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface ProductCardProps {
  title: string;
  subtitle: string;
  price: string;
  originalPrice?: string;
  badge?: string;
  delay?: string;
  productId?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  subtitle,
  price,
  originalPrice,
  badge,
  delay = '0s',
  productId,
}) => {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    if (productId) {
      navigate(`/product/${productId}`);
    }
  };

  return (
    <div
      className="group relative rounded-2xl border border-zinc-200 bg-white p-5 shadow-[0_16px_40px_rgba(15,23,42,0.08)] backdrop-blur-2xl transition-all duration-500 hover:shadow-[0_20px_50px_rgba(236,72,153,0.15)] animate-on-scroll opacity-0 translate-y-6"
      style={{ transitionDelay: delay }}
    >
      {badge && (
        <div className="absolute -right-2 -top-2 z-10 rounded-full border border-pink-500/40 bg-pink-500/90 px-3 py-1 text-[0.65rem] font-medium tracking-tight text-white shadow-lg shadow-pink-500/40">
          {badge}
        </div>
      )}
      <div className="pointer-events-none absolute inset-0 rounded-2xl border border-white/60 bg-gradient-to-tr from-white/80 via-transparent to-pink-50/40 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
      
      {/* Product image placeholder */}
      <div className="relative mb-4 flex aspect-[4/5] items-center justify-center overflow-hidden rounded-xl border border-zinc-200 bg-gradient-to-b from-zinc-50 via-white to-zinc-100">
        <div className="flex h-3/4 w-1/2 items-center justify-center rounded-[1.2rem] border border-zinc-200 bg-gradient-to-b from-white via-zinc-50 to-zinc-200">
          <img src="/bottol-hero.png" className='h-full object-cover w-full' alt="" />
        </div>
      </div>

      <div className="relative space-y-2">
        <div>
          <p className="text-[0.75rem] font-medium tracking-[0.22em] text-pink-500 uppercase">
            {subtitle}
          </p>
          <h3 className="mt-1 text-sm font-medium text-zinc-900">{title}</h3>
        </div>
        <div className="flex items-baseline gap-2">
          <span className="text-lg font-semibold text-zinc-900">{price}</span>
          {originalPrice && (
            <span className="text-sm font-light text-zinc-400 line-through">{originalPrice}</span>
          )}
        </div>
        <button
          onClick={handleViewDetails}
          className="group/btn relative mt-3 inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-pink-500 via-pink-400 to-pink-500 px-4 py-2 text-sm font-medium tracking-tight text-white shadow-md shadow-pink-500/40 transition-transform duration-300 hover:-translate-y-[1px]"
        >
          <Eye className="h-4 w-4 stroke-[1.5]" />
          <span className="relative z-10">View Details</span>
          <span className="pointer-events-none absolute inset-0 rounded-full bg-white/25 opacity-0 transition-opacity duration-500 group-hover/btn:opacity-100"></span>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

