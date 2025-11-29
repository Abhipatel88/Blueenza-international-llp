import React from 'react';
import { ArrowRight } from 'lucide-react';

const BlogSection: React.FC = () => {
  const articles = [
    {
      category: 'Hydration',
      title: 'Why Alkaline Mineral Water Feels Different',
      description: 'Explore how natural alkalinity and mineral balance influence the mouthfeel and aftertaste of water.',
    },
    {
      category: 'Sustainability',
      title: 'Designing a Bottle That Respects the Source',
      description: 'Behind the scenes of how we engineered recyclability without compromising on a premium experience.',
    },
    {
      category: 'Rituals',
      title: 'Curating a Daily Hydration Ritual with Intention',
      description: 'Small, conscious choices around water that reframe your relationship with hydration.',
    },
  ];

  return (
    <section id="blog" className="relative border-t border-zinc-200 bg-zinc-50/80">
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="space-y-2">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-zinc-900">
              The Wellsip Journal
            </h2>
            <p className="text-base font-light text-zinc-600">
              Perspectives on water, wellness, and the pursuit of refined living.
            </p>
          </div>
          <button className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-light text-zinc-900 transition-colors duration-300 hover:border-pink-400 hover:bg-pink-50">
            <ArrowRight className="h-4 w-4 stroke-[1.5] text-pink-500" />
            <span>View all articles</span>
          </button>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {articles.map((article, index) => (
            <article
              key={index}
              className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-[0_16px_40px_rgba(15,23,42,0.08)] backdrop-blur-2xl animate-on-scroll opacity-0 translate-y-6"
              style={{ transitionDelay: `${index * 0.08}s` }}
            >
              <p className="text-[0.75rem] font-medium tracking-[0.22em] text-pink-500 uppercase">
                {article.category}
              </p>
              <h3 className="mt-2 text-sm font-medium text-zinc-900">
                {article.title}
              </h3>
              <p className="mt-2 text-[0.8rem] font-light text-zinc-600">
                {article.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;

