'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const traits = [
  {
    text: "VALUES STRUCTURE OVER HYPE",
    image: "/structureOverHype.png",
    label: "STRUCTURE FIRST"
  },
  {
    text: "IS MOTIVATED BY REAL OPPORTUNITY",
    image: "/realOpportunity2.png",
    label: "REAL GROWTH"
  },
  {
    text: "CRAVES SELF IMPROVEMENT/PERFORMANCE",
    image: "/selfImprovement3.png",
    label: "HIGH PERFORMANCE"
  },
  {
    text: "VALUES TRANSPARENCY",
    image: "/transparency.png",
    label: "TRANSPARENCY"
  },
];

// Decorative small images with labels
const decorativeImages = [
  { label: "RIVERCENA, 2025", position: { top: '15%', left: '10%' } },
  { label: "HIGH PERFORMANCE GOALS, 2025", position: { top: '20%', left: '35%' } },
  { label: "BARCELONA, 2024", position: { top: '65%', left: '25%' } },
  { label: "RIVERCENA, 2024", position: { top: '70%', left: '55%' } },
  { label: "Q4 GOALS, 2025", position: { top: '25%', left: '75%' } },
  { label: "TEAM SUMMIT, 2024", position: { top: '60%', left: '85%' } },
];

export default function WhoSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [translateX, setTranslateX] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !containerRef.current) return;

      const section = sectionRef.current;
      const container = containerRef.current;
      const rect = section.getBoundingClientRect();
      const sectionHeight = section.offsetHeight;
      const viewportHeight = window.innerHeight;

      // Calculate scroll progress through the section
      // Section is "active" from when top hits viewport top (0) 
      // until the bottom exits viewport bottom
      const totalScrollDistance = sectionHeight - viewportHeight;
      const currentScroll = -rect.top;
      
      // Clamp progress between 0 and 1
      const progress = Math.max(0, Math.min(1, currentScroll / totalScrollDistance));
      
      setScrollProgress(progress);

      // Calculate horizontal translation
      const totalWidth = container.scrollWidth;
      const viewportWidth = window.innerWidth;
      const maxTranslate = -(totalWidth - viewportWidth);
      
      setTranslateX(maxTranslate * progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    
    // Run on mount and after a short delay to ensure layout is ready
    handleScroll();
    const timeoutId = setTimeout(handleScroll, 100);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      data-theme="dark" 
      className="relative bg-black"
      style={{ height: '400vh' }} // 4x viewport height for scroll duration
    >
      {/* Sticky container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Subtle grid background pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03] z-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />

        {/* Horizontal scrolling container */}
        <div 
          ref={containerRef}
          className="h-full flex items-center"
          style={{ 
            transform: `translateX(${translateX}px)`,
            transition: 'none',
            willChange: 'transform'
          }}
        >
          {/* Intro Section */}
          <div className="flex-shrink-0 w-screen h-full flex flex-col items-center justify-center px-8 md:px-16 relative">
            <div className="max-w-4xl text-center">
              <h2 
                className="font-display text-4xl md:text-6xl lg:text-7xl tracking-tight leading-tight mb-8 animate-fadeIn"
                style={{ animationDelay: '200ms' }}
              >
                RIVVIA ISN&apos;T FOR EVERYONE
                <br />
                HERE&apos;S WHO WE BUILT IT FOR
              </h2>
              <p 
                className="text-lg md:text-xl text-white/70 uppercase tracking-wide animate-fadeIn"
                style={{ animationDelay: '400ms' }}
              >
                THE RIGHT RIVVIA CANDIDATE:
              </p>
            </div>
          </div>

          {/* Traits Sections - Horizontal Scroll */}
          {traits.map((trait, index) => (
            <div 
              key={index}
              className="flex-shrink-0 w-screen h-full flex items-center justify-center px-8 md:px-16 lg:px-24 relative"
            >
              {/* Decorative small images */}
              {index < decorativeImages.length && (
                <>
                  <div 
                    className="absolute z-10 animate-fadeIn"
                    style={{
                      ...decorativeImages[index].position,
                      animationDelay: '600ms'
                    }}
                  >
                    <div className="relative">
                      {/* Small placeholder image */}
                      <div className="w-24 h-32 md:w-32 md:h-40 bg-white/5 border border-white/20 overflow-hidden">
                        <div className="w-full h-full bg-gradient-to-br from-white/10 to-transparent" />
                      </div>
                      {/* Label */}
                      <p className="text-white/50 text-[10px] uppercase tracking-wider mt-2 font-medium">
                        {decorativeImages[index].label}
                      </p>
                    </div>
                  </div>
                  
                  {/* Additional decorative image if available */}
                  {index < decorativeImages.length - 1 && (
                    <div 
                      className="absolute z-10 animate-fadeIn"
                      style={{
                        top: decorativeImages[index].position.top === '15%' ? '75%' : '20%',
                        left: decorativeImages[index].position.left === '10%' ? '80%' : '15%',
                        animationDelay: '800ms'
                      }}
                    >
                      <div className="relative">
                        <div className="w-20 h-28 md:w-28 md:h-36 bg-white/5 border border-white/20 overflow-hidden">
                          <div className="w-full h-full bg-gradient-to-br from-white/10 to-transparent" />
                        </div>
                        <p className="text-white/50 text-[10px] uppercase tracking-wider mt-2 font-medium">
                          {decorativeImages[index + 1].label}
                        </p>
                      </div>
                    </div>
                  )}
                </>
              )}

              {/* Main content card */}
              <div className="max-w-5xl w-full flex flex-col md:flex-row gap-8 md:gap-12 items-center relative z-20">
                {/* Large trait image */}
                <div className="w-full md:w-1/2 relative">
                  <div className="relative h-[400px] md:h-[500px] lg:h-[600px] w-full overflow-hidden border border-white/30 group transition-all duration-500 hover:border-white/50">
                    <Image
                      src={trait.image}
                      alt={trait.text}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-70" />
                    
                    {/* Number badge */}
                    <div className="absolute top-6 left-6 w-12 h-12 flex items-center justify-center border border-white/50 text-lg font-medium z-10">
                      [{String(index + 1).padStart(2, '0')}]
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="w-full md:w-1/2 space-y-6">
                  {/* Label */}
                  <p className="text-white/50 text-xs md:text-sm uppercase tracking-[0.3em]">
                    {trait.label}
                  </p>
                  
                  {/* Main text */}
                  <h3 className="font-display text-3xl md:text-4xl lg:text-5xl tracking-tight leading-tight">
                    {trait.text}
                  </h3>

                  {/* Quote/Description */}
                  <p className="text-white/70 text-base md:text-lg leading-relaxed italic">
                    &quot;Since I was 7 years old and had my first experience with kart racing, I&apos;ve worked tirelessly to make that dream come true.&quot;
                  </p>

                  {/* Progress indicator */}
                  <div className="flex items-center gap-2 pt-4">
                    {traits.map((_, i) => (
                      <div 
                        key={i}
                        className={`h-1 transition-all duration-300 ${
                          i === index ? 'bg-white w-12' : 'bg-white/30 w-12'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Outro Section */}
          <div className="flex-shrink-0 w-screen h-full flex flex-col items-center justify-center px-8 md:px-16">
            <div className="max-w-2xl text-center">
              <h3 className="font-display text-4xl md:text-5xl lg:text-6xl tracking-tight mb-8">
                SOUND LIKE YOU?
              </h3>
              <a 
                href="#join" 
                className="btn-secondary inline-block"
              >
                READY?
              </a>
            </div>
          </div>
        </div>

        {/* Scroll progress indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30">
          <div className="flex items-center gap-2">
            <div className="w-32 h-1 bg-white/20 overflow-hidden">
              <div 
                className="h-full bg-white transition-all duration-200"
                style={{ width: `${scrollProgress * 100}%` }}
              />
            </div>
            <span className="text-white/50 text-xs uppercase tracking-wider">
              {Math.round(scrollProgress * 100)}%
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

