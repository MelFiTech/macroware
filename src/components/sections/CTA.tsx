'use client';

import { useState } from 'react';

export default function CTA() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log({ email, message });
  };

  return (
    <section className="py-12 sm:py-20" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-gradient-to-r from-[#0072f5] to-black rounded-[30px] sm:rounded-[60px] px-4 sm:px-6 relative overflow-hidden">
          {/* Grid Pattern Background with Radial Fade */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-[#0072f5] to-black opacity-90" />
            <div 
              className="absolute inset-0" 
              style={{
                backgroundImage: `radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.8) 100%),
                                 linear-gradient(#fff 1px, transparent 1px),
                                 linear-gradient(90deg, #fff 1px, transparent 1px)`,
                backgroundSize: '100% 100%, 40px 40px, 40px 40px',
                backgroundPosition: 'center center, -1px -1px, -1px -1px',
                opacity: '0.07'
              }}
            />
          </div>

          <div className="max-w-2xl mx-auto px-4 text-center py-10 sm:py-16 relative">
            {/* Contact Label */}
            <span className="inline-block px-4 py-1 bg-green-50 text-black rounded-full text-sm mb-4 sm:mb-6">
              Get in Touch
            </span>

            {/* Heading */}
            <h2 className="text-3xl sm:text-5xl font-bold text-white mb-3 sm:mb-4">
              Let's Work Together
            </h2>

            {/* Subheading */}
            <p className="text-white/90 text-base sm:text-lg mb-6 sm:mb-8">
              Have a project in mind? We'd love to hear about it.<br className="hidden sm:block" />
              Share your ideas and let's create something amazing.
            </p>

            {/* Form Container */}
            <div className="bg-white p-4 sm:p-8 rounded-2xl sm:rounded-3xl shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="email"
                  placeholder="Your Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#38bdf8]"
                  required
                />
                
                <textarea
                  placeholder="Tell us about your project"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#38bdf8] min-h-[120px] sm:min-h-[150px]"
                  required
                />

                <button
                  type="submit"
                  className="w-full px-6 sm:px-8 py-2.5 sm:py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors text-base sm:text-lg font-medium"
                >
                  Send Project Details
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}