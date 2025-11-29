import React from 'react';
import { Droplet, Leaf, Instagram, Twitter, Linkedin } from 'lucide-react';

const WellsipFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-200 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto max-w-6xl px-4 py-8 md:py-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          {/* Brand */}
          <div className="space-y-3 max-w-sm">
            <div className="flex items-center gap-2">
             <img src="/wellsip-logo.png" className='h-20' alt="" />
            </div>
            <p className="text-[0.75rem] font-light text-zinc-500">
              Naturally alkaline mineral water, crafted for those who notice the details — from
              source to sip.
            </p>
            <div className="flex items-center gap-3 text-[0.75rem] text-zinc-500">
              <span className="inline-flex items-center gap-1.5">
                <Droplet className="h-3.5 w-3.5 stroke-[1.5] text-pink-500" />
                <span>pH 8+ stable</span>
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Leaf className="h-3.5 w-3.5 stroke-[1.5] text-pink-500" />
                <span>100% recyclable bottles</span>
              </span>
            </div>
          </div>

          {/* Footer nav columns */}
          <div className="grid gap-8 text-[0.8rem] md:grid-cols-3 md:text-[0.75rem]">
            <div>
              <p className="text-[0.75rem] font-medium tracking-[0.22em] text-zinc-500 uppercase">
                Explore
              </p>
              <div className="mt-3 space-y-2 text-zinc-600">
                <a href="#hero" className="block hover:text-zinc-900 transition-colors duration-200">Home</a>
                <a href="#story" className="block hover:text-zinc-900 transition-colors duration-200">Our Story</a>
                <a href="#water" className="block hover:text-zinc-900 transition-colors duration-200">Water &amp; Minerals</a>
                <a href="#shop" className="block hover:text-zinc-900 transition-colors duration-200">Shop</a>
              </div>
            </div>
            <div>
              <p className="text-[0.75rem] font-medium tracking-[0.22em] text-zinc-500 uppercase">
                Community
              </p>
              <div className="mt-3 space-y-2 text-zinc-600">
                <a href="#reviews" className="block hover:text-zinc-900 transition-colors duration-200">
                  Reviews
                </a>
                <a href="#trusted" className="block hover:text-zinc-900 transition-colors duration-200">
                  Partners
                </a>
                <a href="#blog" className="block hover:text-zinc-900 transition-colors duration-200">
                  Journal
                </a>
              </div>
            </div>
            <div>
              <p className="text-[0.75rem] font-medium tracking-[0.22em] text-zinc-500 uppercase">
                Connect
              </p>
              <div className="mt-3 space-y-2 text-zinc-600">
                <a href="#contact" className="block hover:text-zinc-900 transition-colors duration-200">
                  Contact
                </a>
                <div className="flex gap-2 pt-1">
                  <button className="flex h-8 w-8 items-center justify-center rounded-full border border-zinc-200 bg-white hover:border-pink-400 hover:bg-pink-50 transition-colors duration-200" aria-label="Instagram">
                    <Instagram className="h-3.5 w-3.5 stroke-[1.5]" />
                  </button>
                  <button className="flex h-8 w-8 items-center justify-center rounded-full border border-zinc-200 bg-white hover:border-pink-400 hover:bg-pink-50 transition-colors duration-200" aria-label="Twitter">
                    <Twitter className="h-3.5 w-3.5 stroke-[1.5]" />
                  </button>
                  <button className="flex h-8 w-8 items-center justify-center rounded-full border border-zinc-200 bg-white hover:border-pink-400 hover:bg-pink-50 transition-colors duration-200" aria-label="LinkedIn">
                    <Linkedin className="h-3.5 w-3.5 stroke-[1.5]" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 border-t border-zinc-200 pt-4 text-[0.7rem] text-zinc-500 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <p>© {currentYear} Wellsip Beverages. All rights reserved.</p>
          <div className="flex flex-wrap gap-3">
            <a href="#" className="hover:text-zinc-700 transition-colors duration-200">Privacy Policy</a>
            <a href="#" className="hover:text-zinc-700 transition-colors duration-200">Terms</a>
            <a href="#" className="hover:text-zinc-700 transition-colors duration-200">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default WellsipFooter;

