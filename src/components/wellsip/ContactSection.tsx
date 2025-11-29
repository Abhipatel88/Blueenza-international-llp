import React, { useState } from 'react';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="relative border-t border-zinc-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-[1.1fr_minmax(0,1fr)] items-start">
          <div className="space-y-3">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-zinc-900">
              Connect with Wellsip
            </h2>
            <p className="text-base font-light text-zinc-600">
              For retail, HoReCa, or athlete partnerships, share a few details and our team will
              reach out.
            </p>
            <div className="mt-4 grid gap-3 text-[0.8rem] font-light text-zinc-600 sm:grid-cols-2">
              <div>
                <p className="text-zinc-400">Phone</p>
                <p className="text-sm text-zinc-900 mt-1">+1 (800) 000–0000</p>
              </div>
              <div>
                <p className="text-zinc-400">Email</p>
                <p className="text-sm text-zinc-900 mt-1">partnerships@wellsipwater.com</p>
              </div>
              <div className="sm:col-span-2">
                <p className="text-zinc-400">Office</p>
                <p className="text-sm text-zinc-900 mt-1">
                  Wellsip Beverages, 1200 Crystal Spring Way, Suite 18, CA 94100
                </p>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-[0_18px_40px_rgba(15,23,42,0.08)] backdrop-blur-2xl animate-on-scroll opacity-0 translate-y-6"
          >
            <div className="grid gap-3 text-[0.8rem]">
              <div>
                <label className="block text-[0.75rem] font-light text-zinc-700">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-lg border border-zinc-200 bg-white px-3 py-2 text-xs text-zinc-900 outline-none placeholder:text-zinc-400 focus:border-pink-500/70 focus:bg-white"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="block text-[0.75rem] font-light text-zinc-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-lg border border-zinc-200 bg-white px-3 py-2 text-xs text-zinc-900 outline-none placeholder:text-zinc-400 focus:border-pink-500/70 focus:bg-white"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="block text-[0.75rem] font-light text-zinc-700">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  className="mt-1 w-full rounded-lg border border-zinc-200 bg-white px-3 py-2 text-xs text-zinc-900 outline-none placeholder:text-zinc-400 focus:border-pink-500/70 focus:bg-white"
                  placeholder="Tell us a bit about your requirements"
                />
              </div>
              <button
                type="submit"
                className="group relative mt-1 inline-flex items-center justify-center overflow-hidden rounded-full bg-pink-500/90 px-5 py-2 text-xs font-medium tracking-tight text-white shadow-md shadow-pink-500/40 transition-transform duration-300 hover:-translate-y-[1px]"
              >
                <span className="relative z-10">Submit</span>
                <span className="pointer-events-none absolute inset-0 rounded-full bg-white/25 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
              </button>
            </div>
            <p className="mt-3 text-[0.7rem] font-light text-zinc-500">
              This form is for demonstration. Connect this to your preferred CRM or email handler.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

