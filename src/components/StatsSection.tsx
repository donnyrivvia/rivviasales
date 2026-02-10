"use client";

import { useEffect, useRef, useState } from "react";
import WipeReveal from "./WipeReveal";

const stats = [
  {
    value: "19+",
    label: "Number of Fiber Providers",
    target: 19,
    prefix: "",
    suffix: "+",
    format: (n: number) => n.toLocaleString(),
  },
  {
    value: "16",
    label: "Number of Golden Door Winners in 2025",
    target: 16,
    prefix: "",
    suffix: "",
    format: (n: number) => n.toString(),
  },
  {
    value: "100k",
    label: "Total Installs 2025",
    target: 100,
    prefix: "",
    suffix: "k",
    format: (n: number) => n.toString(),
  },
  {
    value: "$30M",
    label: "Total $ Paid to Reps 2025",
    target: 30,
    prefix: "$",
    suffix: "M",
    format: (n: number) => n.toString(),
  },
];

function useCountUp(target: number, duration: number = 2000, shouldStart: boolean = false) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!shouldStart || hasAnimated) return;

    setHasAnimated(true);
    let startTime: number | null = null;
    const startValue = 0;

    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function (ease-out)
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentCount = Math.floor(startValue + (target - startValue) * easeOut);

      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    requestAnimationFrame(animate);
  }, [shouldStart, target, duration, hasAnimated]);

  return count;
}

function StatCard({ 
  stat, 
  isVisible,
  index
}: { 
  stat: typeof stats[0]; 
  isVisible: boolean;
  index: number;
}) {
  const count = useCountUp(stat.target, 2000, isVisible);
  const displayValue = `${stat.prefix}${stat.format(count)}${stat.suffix}`;

  return (
    <div 
      className={`stat-card h-[400px] flex flex-col justify-center items-center text-center p-6 border border-white/10 hover:border-white/20 transition-all duration-700 ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="stat-number text-white mb-2">{displayValue}</div>
      <div className="stat-label text-sm text-white/50 uppercase tracking-wider">
        {stat.label}
      </div>
    </div>
  );
}

export default function StatsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    const currentRef = sectionRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section data-theme="dark" id="opportunity" className="py-24 md:py-32 bg-[#0a0a0a]">
      <div ref={sectionRef} className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20 flex flex-col items-center justify-center">
          <WipeReveal
            as="h2"
            className="font-display text-4xl md:text-5xl lg:text-6xl tracking-tight mb-6"
            theme="light"
            delay={0}
          >
            WE GIVE YOU SCALABILITY
          </WipeReveal>
          <WipeReveal
            as="h2"
            className="font-display text-4xl md:text-5xl lg:text-6xl tracking-tight mb-6"
            theme="light"
            delay={0}
          >
            LIKE NEVER BEFORE
          </WipeReveal>
          <WipeReveal
            as="p"
            className="text-xl md:text-2xl text-white/80 font-semibold mb-4"
            theme="light"
            delay={150}
          >
            Real Volume. Real Growth. Real Results.
          </WipeReveal>
          <p className="text-white/60 max-w-2xl mx-auto italic mb-6">
            Consistent Demand for our sales teams across a nationwide market.
          </p>
          <p className="text-white/70 max-w-2xl mx-auto">
            These are real numbers:
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} isVisible={isVisible} index={index} />
          ))}
        </div>

        {/* Bottom text */}
        <p 
          className={`text-center text-white/60 mt-12 text-base transition-all duration-700 delay-500 ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          We've provided these numbers to answer the question: "how big is the opportunity?" <span className="text-white/90 font-medium">As big as you want it to be.</span>
        </p>
      </div>
    </section>
  );
}

