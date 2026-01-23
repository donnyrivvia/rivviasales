'use client';

import Link from "next/link";
import { useEffect, useRef } from "react";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Load HLS.js for .m3u8 streaming
    const video = videoRef.current;
    if (!video) return;

    // Check if browser supports HLS natively (Safari)
    if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = 'https://vz-d6574812-a94.b-cdn.net/509413b9-062f-4197-aecc-b05790e48114/playlist.m3u8';
    } 
    // Use HLS.js for other browsers
    else if (typeof window !== 'undefined') {
      import('hls.js').then(({ default: Hls }) => {
        if (Hls.isSupported()) {
          const hls = new Hls({
            enableWorker: true,
            lowLatencyMode: true,
          });
          hls.loadSource('https://vz-d6574812-a94.b-cdn.net/509413b9-062f-4197-aecc-b05790e48114/playlist.m3u8');
          hls.attachMedia(video);
          
          return () => {
            hls.destroy();
          };
        }
      });
    }
  }, []);

  return (
    <section data-theme="light" className="bg-white relative min-h-screen flex items-center justify-start overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[90vw] px-6 lg:px-8 py-32 pt-40 flex flex-col items-start justify-start mx-auto">
        <div className="max-w-4xl flex flex-col">
          {/* Main Headline */}
          <h1 className="font-display text-black text-xl sm:text-6xl md:text-[180px] lg:text-[200px] leading-[0.80] mb-6 animate-fade-in-up">
            <b><i>A BETTER<br /> SALES CAREER</i></b>
            
          </h1>
          <h3 className="font-display text-black text-xl sm:text-6xl md:text-[80px] lg:text-[100px] leading-[0.95] mb-6 animate-fade-in-up">
            <i>BEGINS AT RIVVIA</i>
          </h3>

          {/* Subheadline */}
          <p className="text-sm md:text-base text-black max-w-3xl mb-10 leading-relaxed animate-fade-in-up delay-100 uppercase tracking-wider">
            LEADING FIBER PROVIDER | MEANINGFUL OPPORTUNITIES | INCENTIVES
          </p>

          {/* Description */}
          <p className="text-base md:text-lg text-black max-w-2xl mb-10 animate-fade-in-up delay-200 italic leading-relaxed">
            Rivvia is built for sales reps who care more about consistency and less about hype. Our product, systems, and platforms are designed to help you win, win big, and win consistently.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-300 justify-start items-start">
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
