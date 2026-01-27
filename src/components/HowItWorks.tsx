'use client';

import Image from "next/image";
import { useState } from 'react';

const steps = [
  {
    number: "01",
    title: "ONBOARD & ALIGN",
    description:
      "World class onboarding ensures you're ready to sell fiber and represent Rivvia.",
    image: "/growth1.png",
  },
  {
    number: "02",
    title: "PLUG IN & PLAY",
    description:
      "We plug you into our systems, processes, and booming markets so you can hit the ground running.",
    image: "/laptop-lap.png",
  },
  {
    number: "03",
    title: "EXECUTE & EARN",
    description:
      "Start closing quickly and earn what you deserve. We'll help you perform better so you can earn more.",
    image: "/growth4.png",
  },
  {
    number: "04",
    title: "REPEAT & GROW",
    description:
      "The reps who stick with us grow into new earning potentials, Positions, and more.",
    image: "/walking-neighborhood.png",
  },
];

export default function HowItWorks() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? steps.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === steps.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentStep = steps[currentIndex];

  return (
    <section 
      data-theme="dark" 
      id="how-it-works" 
      className="relative min-h-screen bg-black overflow-hidden"
    >
      {/* Full Screen Split Layout */}
      <div className="flex flex-col md:flex-row h-screen">
        {/* Left Side - Image */}
        <div className="relative w-full md:w-1/2 h-1/2 md:h-full overflow-hidden">
          {/* Image with fade transition */}
          <div 
            key={currentIndex}
            className="absolute inset-0 animate-fadeIn"
          >
            <Image
              src={currentStep.image}
              alt={currentStep.title}
              fill
              className="object-cover"
              priority
            />
          </div>
          {/* Large Number Overlay with transition */}
          <div 
            key={`number-${currentIndex}`}
            className="absolute top-8 right-8 md:top-16 md:right-16 pointer-events-none animate-fadeIn"
          >
            <span className="font-display text-[120px] md:text-[200px] lg:text-[280px] text-white/10 leading-none">
              {currentStep.number}
            </span>
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="relative w-full md:w-1/2 h-1/2 md:h-full bg-black flex items-center justify-center px-8 md:px-16 lg:px-24">
          <div className="max-w-2xl w-full">
            {/* Section Label */}
            <p className="text-white/50 text-xs md:text-sm uppercase tracking-[0.3em] mb-4 md:mb-6">
              The Sales Process
            </p>
            
            {/* Main Heading */}
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl xl:text-6xl tracking-tight mb-12 md:mb-16 leading-tight">
              BUILT FOR BIG GROWTH
            </h2>

            {/* Step Title with Number - animated */}
            <h3 
              key={`title-${currentIndex}`}
              className="text-xl md:text-2xl lg:text-3xl font-display font-medium mb-6 md:mb-8 tracking-wide animate-slideInUp"
            >
              {currentIndex + 1}. {currentStep.title}
            </h3>

            {/* Description - animated */}
            <p 
              key={`desc-${currentIndex}`}
              className="text-white/70 text-base md:text-lg lg:text-xl leading-relaxed mb-12 md:mb-16 animate-slideInUp"
              style={{ animationDelay: '100ms' }}
            >
              {currentStep.description}
            </p>

            {/* Navigation Arrows */}
            <div className="flex items-center gap-4">
              <button
                onClick={goToPrevious}
                className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center border border-white/20 hover:border-white/40 hover:bg-white/5 transition-all group"
                aria-label="Previous step"
              >
                <svg className="w-5 h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={goToNext}
                className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center border border-white/20 hover:border-white/40 hover:bg-white/5 transition-all group"
                aria-label="Next step"
              >
                <svg className="w-5 h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Step Indicator Dots */}
            <div className="flex items-center gap-2 mt-8 md:mt-10">
              {steps.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-1 transition-all ${
                    index === currentIndex
                      ? 'bg-white w-8'
                      : 'bg-white/30 hover:bg-white/50 w-8'
                  }`}
                  aria-label={`Go to step ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

