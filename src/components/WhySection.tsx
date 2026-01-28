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
          <div className="space-y-6">
            <WipeReveal
              as="p"
              className="text-xl md:text-2xl font-semibold text-black/90 leading-tight uppercase tracking-wide"
              theme="dark"
              delay={300}
            >
              HIGH DEMAND.
            </WipeReveal> <br />
            <WipeReveal
              as="p"
              className="text-xl md:text-2xl font-semibold text-black/90 leading-tight uppercase tracking-wide"
              theme="dark"
              delay={400}
            >
              SERIOUS ENVIRONMENT.
            </WipeReveal> <br />
            <WipeReveal
              as="p"
              className="text-xl md:text-2xl font-semibold text-black/90 leading-tight uppercase tracking-wide"
              theme="dark"
              delay={500}
            >
              PROVEN SYSTEMS.
            </WipeReveal>
            <p className="text-base text-black/70 leading-relaxed">
              Rivvia is designed for excellence. From the high-demand product we sell (fiber internet) to the internal systems we've put into place, we've tooled our business to ensure your efforts are matched with maximum upside and wire-to-wire support.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

