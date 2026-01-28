'use client';

import Link from "next/link";
import { useState, useEffect } from "react";
import WipeReveal from "./WipeReveal";

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section data-theme="light" className="bg-white relative min-h-screen flex items-center justify-start overflow-hidden">
      {/* Background Video - High Quality Only */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
          style={isMobile ? { 
            objectPosition: 'center',
            opacity: 0.2,
            transform: 'scale(1)',
            left: 0,
            top: 0,
          } : { 
            objectPosition: 'left',
            transform: 'scale(1.5)',
            left: '24%',
            top: '22%',
          }}
        >
          {/* Using 1080p only for guaranteed high quality */}
          <source src="https://vz-d6574812-a94.b-cdn.net/509413b9-062f-4197-aecc-b05790e48114/play_1080p.mp4" type="video/mp4" />
        </video>
      </div>
      
      {/* Content */}
      <div className="relative z-10 w-full max-w-[90vw] px-6 lg:px-8 py-32 pt-40 flex flex-col items-start justify-start mx-auto">
        <div className="max-w-4xl flex flex-col">
          {/* Main Headline */}
          <WipeReveal 
            as="h1"
            className="font-display text-black text-5xl sm:text-7xl md:text-[140px] lg:text-[180px] xl:text-[200px] leading-[0.85] mb-4 sm:mb-6"
            theme="dark"
            delay={100}
          >
            <b><i>A BETTER</i></b>
          </WipeReveal>
          <WipeReveal 
            as="h1"
            className="font-display text-black text-5xl sm:text-7xl md:text-[140px] lg:text-[180px] xl:text-[200px] leading-[0.85] mb-4 sm:mb-6"
            theme="dark"
            delay={250}
          >
            <b><i>SALES CAREER</i></b>
          </WipeReveal>
          
          <WipeReveal 
            as="h3"
            className="font-display text-black text-3xl sm:text-5xl md:text-[60px] lg:text-[80px] xl:text-[100px] leading-[0.95] mb-6"
            theme="dark"
            delay={400}
          >
            <i>BEGINS AT RIVVIA</i>
          </WipeReveal>

          {/* Subheadline */}
          <p className="text-sm md:text-base text-black max-w-3xl mb-10 leading-relaxed uppercase tracking-wider">
            LEADING FIBER PROVIDER | MEANINGFUL OPPORTUNITIES | INCENTIVES
          </p>

          {/* Description */}
          <p className="text-base md:text-lg text-black max-w-2xl mb-10 italic leading-relaxed">
            Rivvia is built for sales reps who care more about consistency and less about hype. Our product, systems, and platforms are designed to help you win, win big, and win consistently.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-start items-start">
            <Link href="#join" className="btn-primary-light inline-block text-center">
              Join the Team
            </Link>
            <Link
              href="#how-it-works"
              className="btn-secondary-light inline-block text-center"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white/60 rounded-full" />
        </div>
      </div>

      
    </section>
  );
}
