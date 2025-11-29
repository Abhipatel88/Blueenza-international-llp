import React, { useState } from 'react';
import { Plus } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqColumn1: FAQItem[] = [
    {
      question: 'Is Wellsip artificially ionized to increase its pH?',
      answer: 'No. Wellsip is naturally alkaline. Its pH of 8+ comes from the minerals and bicarbonates picked up as water travels through deep geological formations. We do not use electrolysis or post-filtration additives to alter pH.',
    },
    {
      question: 'Can I drink Wellsip every day?',
      answer: 'Yes. Wellsip is designed for daily consumption as part of a balanced lifestyle. Its mineral levels and TDS are within recommended ranges for regular drinking water and have been tested against national and international standards.',
    },
    {
      question: 'Is Wellsip safe for children and older adults?',
      answer: 'For most healthy individuals, including children and older adults, Wellsip can be enjoyed like regular drinking water. If you or your family members have specific medical conditions or are on restricted mineral intake, please consult your healthcare professional.',
    },
  ];

  const faqColumn2: FAQItem[] = [
    {
      question: 'How should I store Wellsip bottles?',
      answer: 'Store bottles in a cool, dry place away from direct sunlight and strong odours. For best taste, serve chilled but not iced. Avoid freezing bottles or exposing them to high heat.',
    },
    {
      question: 'Do you offer subscriptions or corporate plans?',
      answer: 'Yes. We support recurring deliveries for homes, offices, and hospitality partners. Visit the "For Professionals" section or use the contact form to share your requirements, and our team will customise a plan for you.',
    },
    {
      question: 'How is Wellsip different from RO or distilled water?',
      answer: 'Reverse-osmosis and distilled water are typically stripped of most minerals and can taste flat. Wellsip retains a naturally balanced mineral profile and mild alkalinity, which many people experience as a smoother, more satisfying sip.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const FAQCard: React.FC<{ item: FAQItem; index: number; isOpen: boolean }> = ({ item, index, isOpen }) => (
    <div className="rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm shadow-[0_10px_25px_rgba(15,23,42,0.06)]">
      <button
        onClick={() => toggleFAQ(index)}
        className="flex w-full cursor-pointer items-center justify-between gap-3 text-left text-zinc-900"
      >
        <span className="font-medium">{item.question}</span>
        <span
          className={`flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border border-zinc-300 text-[0.7rem] text-zinc-600 transition-transform duration-200 ${
            isOpen ? 'rotate-45' : ''
          }`}
        >
          <Plus className="h-4 w-4" />
        </span>
      </button>
      {isOpen && (
        <p className="mt-3 text-[0.85rem] font-light leading-relaxed text-zinc-600">
          {item.answer}
        </p>
      )}
    </div>
  );

  return (
    <section id="faq" className="relative border-t border-zinc-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="space-y-2">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-zinc-900">
              Frequently Asked Questions
            </h2>
            <p className="text-base font-light text-zinc-600">
              Clear, honest answers about Wellsip, alkalinity, and how to integrate it into your day.
            </p>
          </div>
          <div className="text-[0.75rem] font-light text-zinc-500">
            For anything else, reach out via the contact form below.
          </div>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {/* FAQ Column 1 */}
          <div className="space-y-4">
            {faqColumn1.map((item, index) => (
              <FAQCard
                key={index}
                item={item}
                index={index}
                isOpen={openIndex === index}
              />
            ))}
          </div>

          {/* FAQ Column 2 */}
          <div className="space-y-4">
            {faqColumn2.map((item, index) => (
              <FAQCard
                key={index + faqColumn1.length}
                item={item}
                index={index + faqColumn1.length}
                isOpen={openIndex === index + faqColumn1.length}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

