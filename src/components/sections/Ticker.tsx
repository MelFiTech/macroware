"use client";

const companies = [
  { name: "Kiakia" },
  { name: "Zinex" },
  { name: "Letlo" },
  { name: "Boost" },
];

export default function Ticker() {
  return (
    <section className="py-12 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <h2 className="text-center text-2xl font-semibold text-black mb-8">
          Trusted by Industry Leaders
        </h2>

        {/* Ticker Container */}
        <div className="relative">
          {/* Main Content with Mask */}
          <div className="relative overflow-hidden mask-horizontal">
            {/* Ticker Track */}
            <div className="flex whitespace-nowrap">
              {/* First Row */}
              <div className="flex animate-ticker space-x-16 min-w-full">
                {companies.map((company, index) => (
                  <span key={index} className="text-2xl font-bold text-gray-500 inline-block">
                    {company.name}
                  </span>
                ))}
                {companies.map((company, index) => (
                  <span key={`dup-${index}`} className="text-2xl font-bold text-gray-500 inline-block">
                    {company.name}
                  </span>
                ))}
              </div>

              {/* Duplicate Row for Seamless Loop */}
              <div className="flex animate-ticker space-x-16 min-w-full">
                {companies.map((company, index) => (
                  <span key={`dup2-${index}`} className="text-2xl font-bold text-gray-500 inline-block">
                    {company.name}
                  </span>
                ))}
                {companies.map((company, index) => (
                  <span key={`dup3-${index}`} className="text-2xl font-bold text-gray-500 inline-block">
                    {company.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Fade Overlays */}
            <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10" />
            <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10" />
          </div>
        </div>
      </div>

      <style jsx>{`
        .mask-horizontal {
          mask-image: linear-gradient(
            to right,
            transparent,
            black 15%,
            black 85%,
            transparent
          );
          -webkit-mask-image: linear-gradient(
            to right,
            transparent,
            black 15%,
            black 85%,
            transparent
          );
        }

        @keyframes ticker {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .animate-ticker {
          animation: ticker 20s linear infinite;
        }
      `}</style>
    </section>
  );
}