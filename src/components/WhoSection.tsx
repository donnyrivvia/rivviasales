'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const traits = [
  {
    text: "VALUES STRUCTURE OVER HYPE",
    image: "/growth1.png" // Replace with your actual image path
  },
  {
    text: "IS MOTIVATED BY REAL OPPORTUNITY",
    image: "/growth2.png" // Replace with your actual image path
  },
  {
    text: "CRAVES SELF IMPROVEMENT/PERFORMANCE",
    image: "/growth3.png" // Replace with your actual image path
  },
  {
    text: "VALUES TRANSPARENCY",
    image: "/growth4.png" // Replace with your actual image path
  },
];

export default function WhoSection() {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section 
      ref={elementRef as React.RefObject<HTMLElement>}
      data-theme="dark" 
      className="py-24 md:py-32 relative overflow-hidden"
      style={{
        backgroundImage: 'url(/bts1.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Black overlay at 40% opacity */}
      <div className="absolute inset-0 bg-black/40 z-0" />
      
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white/[0.02] to-transparent z-0" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="w-[100%] flex flex-col items-center justify-center">
          <h2 
            className={`font-display text-4xl md:text-5xl lg:text-6xl tracking-tight leading-tight mb-8 text-center transition-all duration-700 ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            RIVVIA ISN&apos;T FOR EVERYONE
            <br />
            HERE&apos;S WHO WE BUILT IT FOR
          </h2>

          <p 
            className={`text-lg md:text-xl text-white/70 mb-12 uppercase tracking-wide transition-all duration-700 delay-200 ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            THE RIGHT RIVVIA CANDIDATE:
          </p>

          {/* Traits Grid */}
          <div className="flex justify-center items-center w-[100%] gap-5 mb-[70px]">
            {traits.map((trait, index) => (
              <div
                key={index}
                className={`trait-image-card relative h-[600px] w-[300px] overflow-hidden border border-white/10 hover:border-white/25 transition-all duration-700 group ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-12'
                }`}
                style={{
                  backgroundImage: `url(${trait.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  transitionDelay: `${(index + 2) * 150}ms`
                }}
              >
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-80 group-hover:opacity-70 transition-opacity" />
                
                {/* Text content - bottom left */}
                <div className="absolute bottom-0 left-0 p-6 z-10 h-full flex flex-col gap-0 items-stretch justify-between">
                  <div className="w-10 h-10 flex items-center justify-center border border-white/50 text-sm font-medium mb-3">
                    [{String(index + 1).padStart(2, '0')}]
                  </div>
                  <span className="text-white text-sm uppercase tracking-wide font-semibold leading-tight block">
                    {trait.text}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <a 
            href="#join" 
            className={`btn-secondary inline-block transition-all duration-700 delay-[900ms] ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            READY?
          </a>
        </div>
      </div>
    </section>
  );
}

