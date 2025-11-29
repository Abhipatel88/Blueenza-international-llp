import React from 'react';
import ProductCard from './ProductCard';

const ShopSection: React.FC = () => {
  const products = [
    {
      id: 'single-bottle',
      title: 'Single Bottle',
      subtitle: 'Wellsip 500ml',
      price: '$2.99',
    },
    {
      id: '6-pack',
      title: '6-Pack',
      subtitle: 'Wellsip 500ml',
      price: '$15.99',
      originalPrice: '$17.94',
      badge: 'Save 11%',
    },
    {
      id: '12-pack',
      title: '12-Pack',
      subtitle: 'Wellsip 500ml',
      price: '$29.99',
      originalPrice: '$35.88',
      badge: 'Save 16%',
    },
    {
      id: '24-pack',
      title: '24-Pack',
      subtitle: 'Wellsip 500ml',
      price: '$54.99',
      originalPrice: '$71.76',
      badge: 'Best Value',
    },
    {
      id: 'premium-glass',
      title: 'Premium Glass Bottle',
      subtitle: 'Wellsip 750ml',
      price: '$4.99',
    },
  ];

  return (
    <section id="shop" className="relative border-t border-zinc-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="space-y-2">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-zinc-900">
              Shop Wellsip
            </h2>
            <p className="text-base font-light text-zinc-600">
              Choose the perfect pack for your hydration needs. Free shipping on orders over $50.
            </p>
          </div>
          <button className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-light text-zinc-900 transition-colors duration-300 hover:border-pink-400 hover:bg-pink-50">
            <span>View all products</span>
            <span className="text-pink-500">→</span>
          </button>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              productId={product.id}
              title={product.title}
              subtitle={product.subtitle}
              price={product.price}
              originalPrice={product.originalPrice}
              badge={product.badge}
              delay={`${index * 0.05}s`}
            />
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-zinc-200 bg-gradient-to-b from-white via-white to-zinc-50 p-6 shadow-[0_20px_50px_rgba(15,23,42,0.08)] backdrop-blur-2xl animate-on-scroll opacity-0 translate-y-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="space-y-1">
              <p className="text-sm font-medium text-zinc-900">
                Subscribe & Save 15%
              </p>
              <p className="text-[0.8rem] font-light text-zinc-600">
                Get Wellsip delivered to your door every month. Cancel anytime, no commitments.
              </p>
            </div>
            <button className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-pink-500 via-pink-400 to-pink-500 px-5 py-2 text-sm font-medium tracking-tight text-white shadow-md shadow-pink-500/40 transition-transform duration-300 hover:-translate-y-[1px]">
              <span>Start Subscription</span>
              <span>→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopSection;

