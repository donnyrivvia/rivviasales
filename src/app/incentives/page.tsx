'use client';

import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const incentives = [
  {
    id: 'out-of-office-2026',
    title: "2026 OUT OF OFFICE",
    poster: "/incentives/26_ OUT OF OFFICE.png",
    description: "Our annual Out of Office incentive rewards top performers with an all-expenses-paid trip. Work hard, hit your goals, and get away from the office in style.",
    details: [
      "All-expenses-paid luxury trip",
      "Exclusive for top performers",
      "Annual reward program",
      "Network with the best in the company"
    ]
  },
  {
    id: 'members-only',
    title: "MEMBERS ONLY",
    poster: "/incentives/MEMBERS ONLY POSTER 2.png",
    description: "Join the elite. Members Only is our exclusive recognition program for consistent high achievers who demonstrate excellence month after month.",
    details: [
      "Exclusive recognition program",
      "Reserved for consistent performers",
      "Special benefits and perks",
      "Elite status within Rivvia"
    ]
  }
];

export default function IncentivesPage() {
  const heroAnimation = useScrollAnimation({ threshold: 0.2 });

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-black">
        {/* Hero Section */}
        <section 
        ref={heroAnimation.elementRef as React.RefObject<HTMLElement>}
        className="relative pt-32 pb-16 px-6 lg:px-8 bg-[#0a0a0a]"
      >
        <div className="max-w-7xl mx-auto">
          {/* Back Button */}
          <Link 
            href="/"
            className={`inline-flex items-center gap-2 text-white/60 hover:text-white transition-all duration-700 mb-8 ${
              heroAnimation.isVisible 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 -translate-x-4'
            }`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>

          {/* Header */}
          <div className="text-center mb-16">
            <div 
              className={`line-accent mb-6 mx-auto transition-all duration-700 ${
                heroAnimation.isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
            />
            <h1 
              className={`font-display text-5xl md:text-6xl lg:text-7xl tracking-tight mb-6 transition-all duration-700 delay-100 ${
                heroAnimation.isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
            >
              RIVVIA INCENTIVES
            </h1>
            <p 
              className={`text-xl text-white/70 max-w-3xl mx-auto leading-relaxed transition-all duration-700 delay-200 ${
                heroAnimation.isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
            >
              Performance-driven rewards for those who execute. Work hard, hit your goals, and reap the benefits.
            </p>
          </div>
        </div>
      </section>

      {/* Incentive Sections */}
      {incentives.map((incentive, index) => {
        const IncentiveSection = () => {
          const animation = useScrollAnimation({ threshold: 0.2 });
          const isEven = index % 2 === 0;

          return (
            <section
              key={incentive.id}
              ref={animation.elementRef as React.RefObject<HTMLElement>}
              className="py-24 md:py-32 bg-black"
            >
              <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${isEven ? '' : 'lg:grid-flow-dense'}`}>
                  {/* Poster Image */}
                  <div 
                    className={`transition-all duration-700 ${isEven ? '' : 'lg:col-start-2'} ${
                      animation.isVisible 
                        ? 'opacity-100 translate-x-0' 
                        : `opacity-0 ${isEven ? '-translate-x-8' : 'translate-x-8'}`
                    }`}
                  >
                    <div className="relative aspect-[3/4] w-full max-w-lg mx-auto border border-white/10 overflow-hidden hover:border-white/20 transition-colors">
                      <Image
                        src={incentive.poster}
                        alt={incentive.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div 
                    className={`transition-all duration-700 delay-200 ${isEven ? '' : 'lg:col-start-1 lg:row-start-1'} ${
                      animation.isVisible 
                        ? 'opacity-100 translate-x-0' 
                        : `opacity-0 ${isEven ? 'translate-x-8' : '-translate-x-8'}`
                    }`}
                  >
                    <div className="line-accent mb-6" />
                    <h2 className="font-display text-4xl md:text-5xl lg:text-6xl tracking-tight mb-6">
                      {incentive.title}
                    </h2>
                    <p className="text-lg md:text-xl text-white/70 mb-8 leading-relaxed">
                      {incentive.description}
                    </p>
                    
                    {/* Details List */}
                    <ul className="space-y-4 mb-8">
                      {incentive.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <svg className="w-6 h-6 text-white/40 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-white/60">{detail}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      href="#join"
                      className="btn-primary inline-flex items-center gap-3"
                    >
                      Learn How to Qualify
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          );
        };

        return <IncentiveSection key={incentive.id} />;
      })}

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-[#0a0a0a] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/[0.02] blur-3xl rounded-full" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/[0.02] blur-3xl rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl tracking-tight mb-6">
              READY TO WIN?
            </h2>
            <p className="text-lg md:text-xl text-white/70 mb-10 max-w-xl mx-auto">
              Join Rivvia and start working toward these incredible incentives.
            </p>
            <Link
              href="/#join"
              className="btn-primary inline-flex items-center gap-3 text-lg"
            >
              JOIN THE TEAM
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </main>
    </>
  );
}
