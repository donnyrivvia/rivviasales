'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import WipeReveal from './WipeReveal';

export default function WhySection() {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section 
      ref={elementRef as React.RefObject<HTMLElement>}
      data-theme="light" 
      id="about" 
      className="py-24 md:py-32 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Left Column - Title */}
          <div>
            <div className="line-accent mb-6" />
            <WipeReveal
              as="h2"
              className="font-display text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[0.95] text-black"
              theme="dark"
              delay={0}
            >
              WHY SELL
            </WipeReveal> <br />
            <WipeReveal
              as="h2"
              className="font-display text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[0.95] text-black"
              theme="dark"
              delay={150}
            >
              WITH RIVVIA?
            </WipeReveal>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8">
            {/* High Demand */}
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-black text-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <WipeReveal
                as="p"
                className="text-xl md:text-2xl font-semibold text-black/90 leading-tight uppercase tracking-wide"
                theme="dark"
                delay={300}
              >
                HIGH DEMAND.
              </WipeReveal>
            </div>

            {/* Serious Environment */}
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-black text-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <WipeReveal
                as="p"
                className="text-xl md:text-2xl font-semibold text-black/90 leading-tight uppercase tracking-wide"
                theme="dark"
                delay={400}
              >
                SERIOUS ENVIRONMENT.
              </WipeReveal>
            </div>

            {/* Proven Systems */}
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-black text-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <WipeReveal
                as="p"
                className="text-xl md:text-2xl font-semibold text-black/90 leading-tight uppercase tracking-wide"
                theme="dark"
                delay={500}
              >
                PROVEN SYSTEMS.
              </WipeReveal>
            </div>

            {/* Bottom text */}
            <p className="text-base text-black/70 leading-relaxed pt-4 border-t border-black/10">
              Rivvia is designed for excellence. From the high-demand product we sell (fiber internet) to the internal systems we've put into place, we've tooled our business to ensure your efforts are matched with maximum upside and wire-to-wire support.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

