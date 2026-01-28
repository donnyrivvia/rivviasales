'use client';

import { useState, useRef, useEffect } from 'react';
import WipeReveal from './WipeReveal';

const testimonials = [
  {
    videoId: "202f6766-8911-4b1d-a3a4-3142365ae6dc",
    author: "Golden Door Winner",
    role: "Rivvia Team Member",
  },
  {
    videoId: "33dfcd85-fbe4-4e99-9210-9712a09dedf0",
    author: "Golden Door Winner",
    role: "Rivvia Team Member",
  },
  {
    videoId: "b8562cbf-b21c-4e6b-af12-4b0582d07e40",
    author: "Golden Door Winner",
    role: "Rivvia Team Member",
  },
  {
    videoId: "380be2c9-4183-4b4e-97e8-a19205c27cd0",
    author: "Golden Door Winner",
    role: "Rivvia Team Member",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const autoPlayRef = useRef<NodeJS.Timeout | undefined>(undefined);

  // Create extended array for infinite loop (original + duplicate)
  const extendedTestimonials = [...testimonials, ...testimonials];

  // Handle video play - pause all other videos
  const handleVideoPlay = (playingIndex: number) => {
    videoRefs.current.forEach((video, index) => {
      if (video && index !== playingIndex && !video.paused) {
        video.pause();
      }
    });
  };

  // Add play event listeners to all videos
  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (video) {
        const playHandler = () => handleVideoPlay(index);
        video.addEventListener('play', playHandler);
        return () => video.removeEventListener('play', playHandler);
      }
    });
  }, []);

  // Auto-advance carousel
  useEffect(() => {
    autoPlayRef.current = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 5000); // Change slide every 5 seconds

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, []);

  // Handle infinite loop reset
  useEffect(() => {
    if (currentIndex === testimonials.length) {
      // When we reach the duplicate set, reset to beginning without transition
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(0);
        // Re-enable transition after reset
        setTimeout(() => {
          setIsTransitioning(true);
        }, 50);
      }, 500); // Wait for transition to complete
    }
  }, [currentIndex]);

  const goToPrevious = () => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const goToNext = () => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    setCurrentIndex((prev) => prev + 1);
  };

  const goToSlide = (index: number) => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    setCurrentIndex(index);
  };

  return (
    <section data-theme="dark" className="py-24 md:py-32 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <WipeReveal
            as="h2"
            className="font-display text-4xl md:text-5xl lg:text-6xl tracking-tight"
            theme="light"
            delay={0}
          >
            OUR GOLDEN DOOR WINNERS
          </WipeReveal> <br />
          <WipeReveal
            as="p"
            className="text-white/60 text-lg max-w-2xl mx-auto"
            theme="light"
            delay={150}
          >
            Get to know them and see what they're saying about their experience with Rivvia.
          </WipeReveal>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-6xl mx-auto">
          {/* Video Cards - Horizontal Scroll */}
          <div className="relative overflow-hidden">
            <div
              className="flex gap-6"
              style={{
                transform: `translateX(-${currentIndex * 50}%)`,
                transition: isTransitioning ? 'transform 500ms ease-out' : 'none',
              }}
            >
              {extendedTestimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-full md:w-[calc(50%-12px)]"
                >
                  <div className="relative border border-white/10 hover:border-white/20 transition-colors overflow-hidden">
                    {/* Video */}
                    <div className="w-full bg-black">
                      <video
                        ref={(el) => {
                          videoRefs.current[index] = el;
                        }}
                        controls
                        className="w-full"
                        preload="metadata"
                      >
                        <source src={`https://vz-d6574812-a94.b-cdn.net/${testimonial.videoId}/play_1080p.mp4`} type="video/mp4" />
                        <source src={`https://vz-d6574812-a94.b-cdn.net/${testimonial.videoId}/play_720p.mp4`} type="video/mp4" />
                      </video>
                    </div>

                    {/* Author Info */}
                    <div className="p-6 bg-black/50">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-white/10 flex items-center justify-center flex-shrink-0">
                          <span className="text-sm font-medium">
                            {testimonial.author.charAt(0)}
                          </span>
                        </div>
                        <div className="min-w-0">
                          <div className="text-sm font-medium text-white/90 truncate">
                            {testimonial.author}
                          </div>
                          <div className="text-xs text-white/50 uppercase tracking-wider truncate">
                            {testimonial.role}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-2 md:left-0 top-1/2 -translate-y-1/2 md:-translate-x-14 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center border border-white/20 hover:border-white/40 bg-black/80 hover:bg-white/5 transition-all z-10"
            aria-label="Previous testimonial"
          >
            <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={goToNext}
            className="absolute right-2 md:right-0 top-1/2 -translate-y-1/2 md:translate-x-14 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center border border-white/20 hover:border-white/40 bg-black/80 hover:bg-white/5 transition-all z-10"
            aria-label="Next testimonial"
          >
            <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 transition-all ${
                  index === (currentIndex % testimonials.length)
                    ? 'bg-white w-8'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

