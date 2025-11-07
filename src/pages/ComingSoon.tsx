import React, { useState } from 'react';

// --- SVG Icons ---
// Using inline SVGs to keep everything in one file.

const IconTwitter = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-6 w-6"
  >
    <path d="M22 4s-.7 2.1-2 3.4c1.6 1.4 3 3.4 3 5.4 0 4.6-4.4 8.2-10 8.2S3 17.4 3 12.8c0 2.1 1.4 4.1 3.4 5.3C3.6 17.1 2 15.1 2 13c0-1.1.4-2.1 1.1-2.9.1-.1.2-.2.2-.3C3.8 8.1 5.4 7 7.4 6c0-1.1.9-2 2-2s2 .9 2 2c0 .2 0 .4-.1.6.3-.1.6-.1.9-.1 2.5 0 4.7 1 6.3 2.5.2.2.4.3.6.4 1.1-.9 2.5-1.4 4.1-1.4.1 0 .2 0 .2.1z" />
  </svg>
);

const IconInstagram = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-6 w-6"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const IconFacebook = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-6 w-6"
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const IconLogo = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="48"
    height="48"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-12 w-12 text-indigo-500"
  >
    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

/**
 * Main "Coming Soon" component.
 * This component displays a centered message, a subscription form, and social media links.
 */
export default function App() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  /**
   * Handles the form submission.
   * Prevents the default form action and sets a success/error message.
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      // In a real app, you would send this email to your backend API.
      console.log('Email submitted:', email);
      setMessage(`Thanks for subscribing, ${email}! We'll be in touch.`);
      setEmail('');
    } else {
      setMessage('Please enter a valid email address.');
    }

    // Clear message after 3 seconds
    setTimeout(() => setMessage(''), 3000);
  };

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gray-900 p-8 text-center text-white font-inter">
      {/* Background shapes for decoration */}
      <div className="absolute -top-40 -left-40 h-80 w-80 rounded-full bg-indigo-700/30 blur-3xl filter" />
      <div className="absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-purple-700/30 blur-3xl filter" />

      {/* Main content container */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Logo */}
        <div className="mb-6">
          <img src="./logo.png" className='h-20 ' alt="" />
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl md:text-7xl">
          Coming Soon
        </h1>

        {/* Subheading */}
        <p className="mt-6 max-w-xl text-lg text-gray-300 md:text-xl">
          We're working hard to build something amazing. Enter your email below to
          be the first to know when we launch!
        </p>

        {/* Subscription Form */}
        <form
          onSubmit={handleSubmit}
          className="mt-10 flex w-full max-w-md flex-col items-center gap-4 sm:flex-row"
        >
          <label htmlFor="email" className="sr-only">
            Email address
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            required
            className="w-full flex-1 rounded-md border-2 border-transparent bg-gray-800 px-5 py-3 text-base text-white placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
          />
          <button
            type="submit"
            className="w-full rounded-md bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-md transition-colors duration-200 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-900 sm:w-auto"
          >
            Notify Me
          </button>
        </form>

        {/* Form Message */}
        {message && (
          <p className="mt-4 text-sm text-indigo-400">{message}</p>
        )}

        {/* Social Media Links */}
       
      </div>
    </div>
  );
}