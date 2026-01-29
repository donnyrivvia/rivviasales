'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

interface ImageBreakProps {
  imagePath: string;
  alt?: string;
  overlayText?: string;
  overlaySubtext?: string;
  height?: string | number; // e.g., "100vh", "80vh", 600, "500px"
}

export default function ImageBreak({ 
  imagePath, 
  alt = "Rivvia Team",
  overlayText,
  overlaySubtext,
  height = "100vh"
}: ImageBreakProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const scrollPercent = (rect.top / window.innerHeight);
      
      // Only apply parallax when section is in view
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        // Subtle parallax: move image -20% to +20% based on scroll
        setOffsetY(scrollPercent * 20);
      }
    };

    handleScroll(); // Initial call
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Convert height to CSS value
  const heightStyle = typeof height === 'number' ? `${height}px` : height;

  return (
    <section 
      ref={sectionRef}
      className="relative w-full overflow-hidden"
      style={{ height: heightStyle }}
      data-theme="dark"
    >
      {/* Parallax Image */}
      <div 
        className="absolute inset-0 w-full h-[120%] -top-[10%]"
        style={{
          transform: `translateY(${offsetY}%)`,
          transition: 'transform 0.1s ease-out'
        }}
      >
        <Image
          src={imagePath}
          alt={alt}
          fill
          className="object-cover"
          quality={90}
          priority={false}
        />
        
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Optional overlay text */}
      {(overlayText || overlaySubtext) && (
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center text-white px-6">
            {overlayText && (
              <h2 className="font-display text-4xl md:text-6xl lg:text-7xl tracking-tight mb-4">
                {overlayText}
              </h2>
            )}
            {overlaySubtext && (
              <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
                {overlaySubtext}
              </p>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
