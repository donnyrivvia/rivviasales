'use client';

import Link from "next/link";
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function FooterCTA() {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.3 });

  return (
    <section 
      ref={elementRef as React.RefObject<HTMLElement>}
      data-theme="dark" 
      id="join" 
      className="py-24 md:py-32 bg-[#0a0a0a] relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/[0.02] blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/[0.02] blur-3xl rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Headline */}
          <h2 
            className={`font-display text-5xl md:text-6xl lg:text-7xl tracking-tight mb-6 transition-all duration-700 ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            READY TO SELL
            <br />
            WITH RIVVIA?
          </h2>

          {/* Description */}
          <p 
            className={`text-lg md:text-xl text-white/70 mb-10 max-w-xl mx-auto transition-all duration-700 delay-200 ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            Real Opportunities. Bigger Upside.
            <br />
            All without the unnecessary hype:
          </p>

          {/* CTA */}
          <Link
            href="#"
            className={`btn-primary inline-flex items-center gap-3 text-lg transition-all duration-700 delay-300 ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            JOIN TODAY
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

