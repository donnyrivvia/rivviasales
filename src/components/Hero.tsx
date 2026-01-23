'use client';

import Link from "next/link";
import { useState } from "react";

export default function Hero() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isContentVisible, setIsContentVisible] = useState(false);

  const handleVideoLoad = () => {
    setIsVideoLoaded(true);
    // Delay content reveal for smooth transition
    setTimeout(() => {
      setIsContentVisible(true);
    }, 300);
  };

  return (
    <section data-theme="light" className="bg-white relative min-h-screen flex items-center justify-start overflow-hidden">
      {/* Loading Overlay */}
      <div 
        className={`absolute inset-0 bg-white z-50 flex items-center justify-center transition-opacity duration-700 ${
          isVideoLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      >
        <div className="flex flex-col items-center gap-4">
          {/* Spinner */}
          <div className="relative w-16 h-16">
            <div className="absolute inset-0 border-4 border-black/10 rounded-full"></div>
            <div className="absolute inset-0 border-4 border-black border-t-transparent rounded-full animate-spin"></div>
          </div>
          {/* Loading Text */}
          <p className="text-black/60 font-medium tracking-wider uppercase text-sm">Loading...</p>
        </div>
      </div>

      {/* Background Video - High Quality Only */}
      <div className={`absolute inset-0 transition-opacity duration-700 ${
        isVideoLoaded ? 'opacity-100' : 'opacity-0'
      }`}>
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          onCanPlayThrough={handleVideoLoad}
          className="absolute inset-0 w-full h-full object-cover"
        >
          {/* Using 1080p only for guaranteed high quality */}
          <source src="https://vz-d6574812-a94.b-cdn.net/509413b9-062f-4197-aecc-b05790e48114/play_1080p.mp4" type="video/mp4" />
        </video>
      </div>
      
      {/* Content */}
      <div className={`relative z-10 w-full max-w-[90vw] px-6 lg:px-8 py-32 pt-40 flex flex-col items-start justify-start mx-auto transition-all duration-1000 ${
        isContentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        <div className="max-w-4xl flex flex-col">
          {/* Main Headline */}
          <h1 className={`font-display text-black text-xl sm:text-6xl md:text-[180px] lg:text-[200px] leading-[0.80] mb-6 transition-all duration-700 delay-100 ${
            isContentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <b><i>A BETTER<br /> SALES CAREER</i></b>
            
          </h1>
          <h3 className={`font-display text-black text-xl sm:text-6xl md:text-[80px] lg:text-[100px] leading-[0.95] mb-6 transition-all duration-700 delay-200 ${
            isContentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <i>BEGINS AT RIVVIA</i>
          </h3>

          {/* Subheadline */}
          <p className={`text-sm md:text-base text-black max-w-3xl mb-10 leading-relaxed uppercase tracking-wider transition-all duration-700 delay-300 ${
            isContentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            LEADING FIBER PROVIDER | MEANINGFUL OPPORTUNITIES | INCENTIVES
          </p>

          {/* Description */}
          <p className={`text-base md:text-lg text-black max-w-2xl mb-10 italic leading-relaxed transition-all duration-700 delay-[400ms] ${
            isContentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Rivvia is built for sales reps who care more about consistency and less about hype. Our product, systems, and platforms are designed to help you win, win big, and win consistently.
          </p>

          {/* CTAs */}
          <div className={`flex flex-col sm:flex-row gap-4 justify-start items-start transition-all duration-700 delay-500 ${
            isContentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
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
      <div className={`absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce transition-opacity duration-700 delay-700 ${
        isContentVisible ? 'opacity-100' : 'opacity-0'
      }`}>
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white/60 rounded-full" />
        </div>
      </div>

      
    </section>
  );
}
