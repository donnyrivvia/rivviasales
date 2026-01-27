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

// Decorative photo variations for each slide
const decorativePhotos = [
  // Slide 0 - Structure
  [
    { width: 'w-24 md:w-32', height: 'h-32 md:h-44', top: '8%', left: '6%', rotate: '-3deg' },
    { width: 'w-28 md:w-36', height: 'h-20 md:h-28', bottom: '12%', right: '8%', rotate: '2deg' },
    { width: 'w-20 md:w-24', height: 'h-28 md:h-36', top: '55%', left: '12%', rotate: '4deg' },
  ],
  // Slide 1 - Opportunity
  [
    { width: 'w-32 md:w-40', height: 'h-24 md:h-32', top: '15%', right: '10%', rotate: '-2deg' },
    { width: 'w-20 md:w-28', height: 'h-32 md:h-40', bottom: '20%', left: '8%', rotate: '3deg' },
    { width: 'w-24 md:w-32', height: 'h-24 md:h-32', top: '50%', right: '15%', rotate: '-4deg' },
  ],
  // Slide 2 - Performance
  [
    { width: 'w-28 md:w-36', height: 'h-36 md:h-48', top: '10%', left: '10%', rotate: '2deg' },
    { width: 'w-24 md:w-32', height: 'h-20 md:h-24', bottom: '15%', right: '12%', rotate: '-3deg' },
  ],
  // Slide 3 - Transparency
  [
    { width: 'w-20 md:w-28', height: 'h-28 md:h-36', top: '12%', right: '8%', rotate: '3deg' },
    { width: 'w-32 md:w-40', height: 'h-28 md:h-36', bottom: '18%', left: '10%', rotate: '-2deg' },
    { width: 'w-24 md:w-28', height: 'h-32 md:h-40', top: '60%', right: '18%', rotate: '4deg' },
  ],
];


export default function WhoSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const maxTranslateRef = useRef(0);

  useEffect(() => {
    // Calculate max translate distance once on mount/resize
    const calculateMaxTranslate = () => {
      if (!containerRef.current) return;
      const totalWidth = containerRef.current.scrollWidth;
      const viewportWidth = window.innerWidth;
      maxTranslateRef.current = -(totalWidth - viewportWidth);
    };

    const handleScroll = () => {
      if (!sectionRef.current) return;

      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const sectionHeight = section.offsetHeight;
      const viewportHeight = window.innerHeight;

      // Calculate scroll progress through the section
      const totalScrollDistance = sectionHeight - viewportHeight;
      const currentScroll = -rect.top;
      
      // Clamp progress between 0 and 1
      const progress = Math.max(0, Math.min(1, currentScroll / totalScrollDistance));
      
      setScrollProgress(progress);
      setTranslateX(maxTranslateRef.current * progress);
    };

    const handleResize = () => {
      calculateMaxTranslate();
      handleScroll();
    };

    // Initial calculations
    calculateMaxTranslate();
    const timeoutId = setTimeout(() => {
      calculateMaxTranslate();
      handleScroll();
    }, 100);

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
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
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-black">
        {/* Animated grid background pattern with gradient mask */}
        <div 
          className="absolute inset-0 z-0 animate-grid animate-gridGradient"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.08) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            opacity: 0.5,
            maskImage: `
              radial-gradient(
                ellipse 100% 80% at 50% 50%,
                rgba(0, 0, 0, 1) 0%,
                rgba(0, 0, 0, 1) 20%,
                rgba(0, 0, 0, 0.3) 50%,
                rgba(0, 0, 0, 0) 80%
              )
            `,
            WebkitMaskImage: `
              radial-gradient(
                ellipse 100% 80% at 50% 50%,
                rgba(0, 0, 0, 1) 0%,
                rgba(0, 0, 0, 1) 20%,
                rgba(0, 0, 0, 0.3) 50%,
                rgba(0, 0, 0, 0) 80%
              )
            `,
            maskSize: '200% 200%',
            WebkitMaskSize: '200% 200%'
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
              {/* Small decorative images without labels - varied sizes and positions */}
              {decorativePhotos[index]?.map((photo, photoIndex) => (
                <div 
                  key={photoIndex}
                  className="absolute z-10 animate-fadeIn"
                  style={{
                    top: photo.top,
                    bottom: photo.bottom,
                    left: photo.left,
                    right: photo.right,
                    transform: `rotate(${photo.rotate})`,
                    animationDelay: `${(photoIndex + 1) * 200 + 200}ms`
                  }}
                >
                  <div className={`${photo.width} ${photo.height} bg-white/5 border border-white/20 overflow-hidden transition-transform duration-300 hover:scale-105`}>
                    <div className="w-full h-full bg-gradient-to-br from-white/10 to-transparent" />
                  </div>
                </div>
              ))}

              {/* Main slide - centered */}
              <div className="max-w-4xl w-full flex flex-col items-center relative z-20">
                {/* Large trait image */}
                <div className="relative w-full max-w-2xl">
                  <div className="relative h-[500px] md:h-[600px] lg:h-[700px] w-full overflow-hidden border border-white/30 group transition-all duration-500 hover:border-white/50">
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
                  
                  {/* Label below image */}
                  <div className="mt-6 text-center">
                    <h3 className="font-display text-2xl md:text-3xl lg:text-4xl tracking-tight leading-tight">
                      {trait.text}
                    </h3>
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

