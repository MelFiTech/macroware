"use client";

import Link from 'next/link';
import Image from 'next/image';
import RetroGrid from '@/components/magicui/retro-grid';
import { useState } from 'react';

export default function Hero() {
  const [hoveredPill, setHoveredPill] = useState<string | null>(null);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden">
      {/* RetroGrid Background */}
      <RetroGrid className="!opacity-90" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Team Member Pills - Teo and Dany on sides */}
        <div className="relative w-full max-w-4xl mx-auto mb-8 sm:mb-12">
          {/* Left */}
          <span 
            className="absolute left-2 sm:left-0 top-1/2 -translate-y-1/2 px-4 sm:px-6 py-1.5 sm:py-2 bg-[#f97316] text-white text-sm sm:text-base rounded-tr-full rounded-br-full rounded-tl-full cursor-pointer animate-[bounce_2s_ease-in-out_infinite_1.5s]"
            onMouseEnter={() => setHoveredPill('kiakia')}
            onMouseLeave={() => setHoveredPill(null)}
          >
            Kiakia
            {hoveredPill === 'kiakia' && (
              <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-32 h-32 sm:w-48 sm:h-48">
                <Image
                  src="/images/Web.png"
                  alt="Kiakia"
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
            )}
          </span>

          {/* Right */}
          <span 
            className="absolute right-2 sm:right-0 top-1/2 -translate-y-1/2 px-4 sm:px-6 py-1.5 sm:py-2 bg-[#15803d] text-white text-sm sm:text-base rounded-tr-full rounded-br-full rounded-tl-full cursor-pointer animate-[bounce_2s_ease-in-out_infinite]"
            onMouseEnter={() => setHoveredPill('letlo')}
            onMouseLeave={() => setHoveredPill(null)}
          >
            Letlo
            {hoveredPill === 'letlo' && (
              <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-32 h-32 sm:w-48 sm:h-48">
                <Image
                  src="/images/Web.png"
                  alt="Letlo"
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
            )}
          </span>
        </div>

        {/* Main Content */}
        <div className="mt-12 sm:mt-24">
          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-4 sm:mb-6">
            Sparking Digital<br />Innovations
          </h1>

          {/* Subheading */}
          <div className="relative px-4 sm:px-0">
            <p className="text-gray-500 text-base sm:text-lg md:text-xl mb-8 sm:mb-12 max-w-2xl mx-auto">
              We design and develop custom digital products<br className="hidden sm:block" />
              that capture your brand's essence.
            </p>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center items-center mb-12">
            <Link 
              href="#contact"
              className="px-6 sm:px-8 py-2.5 sm:py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors text-base sm:text-lg"
            >
              Talk to us now
            </Link>
          </div>

          {/* Boost and Zinex Pills - Only visible on mobile after button, hidden on desktop */}
          <div className="relative block sm:hidden">
            <span 
              className="inline-block px-4 py-1.5 bg-[#fb923c] text-white text-sm rounded-tr-full rounded-br-full rounded-tl-full cursor-pointer animate-[bounce_2s_ease-in-out_infinite_0.5s] mr-4 mb-4"
              onMouseEnter={() => setHoveredPill('boost')}
              onMouseLeave={() => setHoveredPill(null)}
            >
              Boost
              {hoveredPill === 'boost' && (
                <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-32 h-32">
                  <Image
                    src="/images/Web.png"
                    alt="Boost"
                    fill
                    className="rounded-lg object-cover"
                  />
                </div>
              )}
            </span>
            <span 
              className="inline-block px-4 py-1.5 bg-[#22c55e] text-white text-sm rounded-tr-full rounded-br-full rounded-tl-full cursor-pointer animate-[bounce_2s_ease-in-out_infinite_1s] mb-4"
              onMouseEnter={() => setHoveredPill('zinex')}
              onMouseLeave={() => setHoveredPill(null)}
            >
              Zinex
              {hoveredPill === 'zinex' && (
                <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-32 h-32">
                  <Image
                    src="/images/Web.png"
                    alt="Zinex"
                    fill
                    className="rounded-lg object-cover"
                  />
                </div>
              )}
            </span>
          </div>

          {/* Boost and Zinex positioned for desktop */}
          <div className="relative hidden sm:block">
            <span 
              className="absolute -left-16 top-3/4 px-6 py-2 bg-[#fb923c] text-white text-base rounded-tr-full rounded-br-full rounded-tl-full cursor-pointer animate-[bounce_2s_ease-in-out_infinite_0.5s]"
              onMouseEnter={() => setHoveredPill('boost')}
              onMouseLeave={() => setHoveredPill(null)}
            >
              Boost
              {hoveredPill === 'boost' && (
                <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-48 h-48">
                  <Image
                    src="/images/Web.png"
                    alt="Boost"
                    fill
                    className="rounded-lg object-cover"
                  />
                </div>
              )}
            </span>
            <span 
              className="absolute -right-16 top-3/4 px-6 py-2 bg-[#22c55e] text-white text-base rounded-tr-full rounded-br-full rounded-tl-full cursor-pointer animate-[bounce_2s_ease-in-out_infinite_1s]"
              onMouseEnter={() => setHoveredPill('zinex')}
              onMouseLeave={() => setHoveredPill(null)}
            >
              Zinex
              {hoveredPill === 'zinex' && (
                <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-48 h-48">
                  <Image
                    src="/images/Web.png"
                    alt="Zinex"
                    fill
                    className="rounded-lg object-cover"
                  />
                </div>
              )}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}