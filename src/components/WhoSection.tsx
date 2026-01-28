'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

// Layout configuration - main photos with full control
const mainPhotos = [
  { 
    image: "/structureOverHype.png",
    label: "STRUCTURE FIRST",
    text: "VALUES STRUCTURE OVER HYPE",
    aspectRatio: '3/4',  // Aspect ratio
    verticalAlign: 'bottom', // 'top', 'center', 'bottom'
    containerWidth: 500, // Width of flex container
    paddingTop: 0,       // Padding top in pixels (optional)
    paddingBottom: 0,    // Padding bottom in pixels (optional)
  },
  { 
    image: "/realOpportunity2.png",
    label: "REAL GROWTH",
    text: "IS MOTIVATED BY REAL OPPORTUNITY",
    aspectRatio: '2/3',
    verticalAlign: 'top',
    containerWidth: 450,
    paddingTop: '10vh',
    paddingBottom: 0,
  },
  { 
    image: "/WALKINGRIVVIA.png",
    label: "HIGH PERFORMANCE",
    text: "CRAVES SELF IMPROVEMENT/PERFORMANCE",
    aspectRatio: '4/3',
    verticalAlign: 'bottom',
    containerWidth: 630,
    paddingTop: 0,
    paddingBottom: '5vh',
  },
  { 
    image: "/knocking.png",
    label: "TRANSPARENCY",
    text: "VALUES TRANSPARENCY",
    aspectRatio: '16/9',
    verticalAlign: 'center',
    containerWidth: 750,
    paddingTop: '10vh',
    paddingBottom: 0,
  }
];

// Small decorative boxes with full control
// Width and height are calculated from containerWidth and aspectRatio using calculateHeight()
const smallBoxes = [
  { 
    verticalAlign: 'top',      // 'top', 'center', 'bottom'
    containerWidth: 250,       // Width in pixels (also used for box width)
    aspectRatio: '3/4',        // Aspect ratio - height is auto-calculated
    paddingTop: '14vh',
    paddingBottom: 0,
    image: '/walking-driveway.png',   // Add/adjust your image paths as required
  },
  { 
    verticalAlign: 'bottom',
    containerWidth: 210,
    aspectRatio: '5/4',         // Example: slightly taller than wide
    paddingTop: 0,
    paddingBottom: '7vh',
    image: '/selfImprovement3.png',
  },
  { 
    verticalAlign: 'center',
    containerWidth: 280,
    aspectRatio: '1/1',
    paddingTop: 0,
    paddingBottom: '13vh',
    image: '/award-give.png',
  },
  { 
    verticalAlign: 'top',
    containerWidth: 280,
    aspectRatio: '5/4',         // Example: wider than tall
    paddingTop: '10vh',
    paddingBottom: '0vh',
    image: '/smallGroup.png',
  },
  { 
    verticalAlign: 'bottom',
    containerWidth: 260,
    aspectRatio: '2/3',
    paddingTop: '13vh',
    paddingBottom: '10vh',
    image: '/CEO-rivvia.png',
  },
  { 
    verticalAlign: 'top',
    containerWidth: 290,
    aspectRatio: '1/1.2',       // Example: slightly taller than wide
    paddingTop: '10vh',
    paddingBottom: 0,
    image: '/award-lineup.png',
  },
  { 
    verticalAlign: 'bottom',
    containerWidth: 200,
    aspectRatio: '1/1',
    paddingTop: '10vh',
    paddingBottom: '10vh',
    image: '/walking-neighborhood.png',
  },
];

// Helper function to calculate height from aspect ratio and width
const calculateHeight = (width: number, aspectRatio: string): number => {
  const [widthRatio, heightRatio] = aspectRatio.split('/').map(Number);
  return (width * heightRatio) / widthRatio;
};

// Helper function to get flex alignment class
const getVerticalAlignment = (align: string) => {
  switch(align) {
    case 'top': return 'justify-start';
    case 'bottom': return 'justify-end';
    case 'center':
    default: return 'justify-center';
  }
};


export default function WhoSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const maxTranslateRef = useRef(0);

  useEffect(() => {
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();

    // Calculate max translate distance once on mount/resize
    const calculateMaxTranslate = () => {
      if (!containerRef.current) return;
      const totalWidth = containerRef.current.scrollWidth;
      const viewportWidth = window.innerWidth;
      maxTranslateRef.current = -(totalWidth - viewportWidth);
    };

    const handleScroll = () => {
      if (!sectionRef.current || isMobile) return;

      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const sectionHeight = section.offsetHeight;
      const viewportHeight = window.innerHeight;

      // Calculate scroll progress through the section
      const totalScrollDistance = sectionHeight - viewportHeight;
      const currentScroll = -rect.top;
      
      // Clamp progress between 0 and 1
      const progress = Math.max(0, Math.min(1, currentScroll / totalScrollDistance));
      
      setScrollProgress(progress);
      setTranslateX(maxTranslateRef.current * progress);
    };

    const handleResize = () => {
      checkMobile();
      calculateMaxTranslate();
      handleScroll();
    };

    // Initial calculations
    if (!isMobile) {
      calculateMaxTranslate();
      const timeoutId = setTimeout(() => {
        calculateMaxTranslate();
        handleScroll();
      }, 100);

      window.addEventListener('scroll', handleScroll, { passive: true });
      
      return () => {
        window.removeEventListener('scroll', handleScroll);
        clearTimeout(timeoutId);
      };
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isMobile]);

  return (
    <section 
      ref={sectionRef}
      data-theme="dark" 
      className="relative bg-black"
      style={{ height: isMobile ? 'auto' : '400vh' }} // 4x viewport height for desktop scroll, auto for mobile
    >
      {/* Desktop - Sticky horizontal scroll container */}
      <div className="hidden md:block sticky top-[81px] w-full overflow-hidden bg-black" style={{ height: "calc(100vh - 81px)" }}>
        {/* Animated grid background pattern with gradient mask */}
        <div 
          className="absolute inset-0 z-0 animate-grid animate-gridGradient"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.08) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            opacity: 0.5,
            maskImage: `
              radial-gradient(
                ellipse 100% 80% at 50% 50%,
                rgba(0, 0, 0, 1) 0%,
                rgba(0, 0, 0, 1) 20%,
                rgba(0, 0, 0, 0.3) 50%,
                rgba(0, 0, 0, 0) 80%
              )
            `,
            WebkitMaskImage: `
              radial-gradient(
                ellipse 100% 80% at 50% 50%,
                rgba(0, 0, 0, 1) 0%,
                rgba(0, 0, 0, 1) 20%,
                rgba(0, 0, 0, 0.3) 50%,
                rgba(0, 0, 0, 0) 80%
              )
            `,
            maskSize: '200% 200%',
            WebkitMaskSize: '200% 200%'
          }}
        />

        {/* Horizontal scrolling container */}
        <div 
          ref={containerRef}
          className="h-full flex items-center"
          style={{ 
            transform: `translateX(${translateX}px)`,
            transition: 'none',
            willChange: 'transform'
          }}
        >
          {/* Intro Section */}
          <div className="flex-shrink-0 w-screen h-full flex flex-col items-center justify-center px-8 md:px-16 relative">
            <div className="max-w-4xl text-center">
              <h2 
                className="font-display text-4xl md:text-6xl lg:text-7xl tracking-tight leading-tight mb-8 animate-fadeIn"
                style={{ animationDelay: '200ms' }}
              >
                RIVVIA ISN&apos;T FOR EVERYONE
                <br />
                HERE&apos;S WHO WE BUILT IT FOR
              </h2>
              <p 
                className="text-lg md:text-xl text-white/70 uppercase tracking-wide animate-fadeIn"
                style={{ animationDelay: '400ms' }}
              >
                THE RIGHT RIVVIA CANDIDATE:
              </p>
            </div>
          </div>

          {/* Gallery Section - Flex Row Layout */}
          <div className="flex-shrink-0 h-full flex flex-row items-center gap-[13vw]">
            {/* Map through photos and boxes in sequence */}
            

            {/* Photo 1 */}
            <div 
              className={`h-full flex flex-col ${getVerticalAlignment(mainPhotos[0].verticalAlign)} items-center`}
              style={{ width: `${mainPhotos[0].containerWidth}px`, paddingTop: mainPhotos[0].paddingTop, paddingBottom: mainPhotos[0].paddingBottom }}
            >
              <div className="flex flex-col items-center">
                {/* Label above photo if verticalAlign is 'bottom' */}
                {mainPhotos[0].verticalAlign === 'bottom' && (
                  <div className="mb-3 text-center flex items-center justify-center gap-2">
                    <p className="text-xs md:text-sm text-white/70 uppercase tracking-wider">
                    [01] {mainPhotos[0].text}
                    </p>
                  </div>
                )}
                
                <div 
                  className="overflow-hidden border border-white/30 relative"
                  style={{ 
                    width: `${mainPhotos[0].containerWidth}px`, 
                    aspectRatio: mainPhotos[0].aspectRatio 
                  }}
                >
                  <Image
                    src={mainPhotos[0].image}
                    alt={mainPhotos[0].text}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-60" />
                </div>
                
                {/* Label below photo if verticalAlign is NOT 'bottom' */}
                {mainPhotos[0].verticalAlign !== 'bottom' && (
                  <div className="mt-3 text-center flex items-center justify-center gap-2">
                    <p className="text-xs md:text-sm text-white/70 uppercase tracking-wider">
                      [01]{mainPhotos[0].text}
                    </p>
                  </div>
                )}
              </div>
            </div>
            {/* Small box 1 */}
            <div 
              className={`hidden md:flex h-full flex-col ${getVerticalAlignment(smallBoxes[0].verticalAlign)} items-center`}
              style={{ width: `${smallBoxes[0].containerWidth}px`, paddingTop: smallBoxes[0].paddingTop, paddingBottom: smallBoxes[0].paddingBottom }}
            >
              <div 
                className="border border-white/20 bg-cover bg-center grayscale"
                style={{
                  backgroundImage: `url('${smallBoxes[0].image}')`,
                  width: `${smallBoxes[0].containerWidth}px`,
                  height: `${calculateHeight(smallBoxes[0].containerWidth, smallBoxes[0].aspectRatio)}px`
                }}
              >
                <div className="w-full h-full bg-gradient-to-br from-white/10 to-transparent" />
              </div>
            </div>

            {/* Small box 2 */}
            <div 
              className={`hidden md:flex h-full flex-col ${getVerticalAlignment(smallBoxes[1].verticalAlign)} items-center`}
              style={{ width: `${smallBoxes[1].containerWidth}px`, paddingTop: smallBoxes[1].paddingTop, paddingBottom: smallBoxes[1].paddingBottom }}
            >
              <div 
                className="border border-white/20 bg-cover bg-center grayscale"
                style={{  
                  backgroundImage: `url('${smallBoxes[1].image}')`,
                  width: `${smallBoxes[1].containerWidth}px`,
                  height: `${calculateHeight(smallBoxes[1].containerWidth, smallBoxes[1].aspectRatio)}px`
                }}
              >
                <div className="w-full h-full bg-gradient-to-br from-white/10 to-transparent" />
              </div>
            </div>

            

            {/* Photo 2 */}
            <div 
              className={`h-full flex flex-col ${getVerticalAlignment(mainPhotos[1].verticalAlign)} items-center`}
              style={{ width: `${mainPhotos[1].containerWidth}px`, paddingTop: mainPhotos[1].paddingTop, paddingBottom: mainPhotos[1].paddingBottom }}
            >
              <div className="flex flex-col items-center">
                {/* Label above photo if verticalAlign is 'bottom' */}
                {mainPhotos[1].verticalAlign === 'bottom' && (
                  <div className="mb-3 text-center flex items-center justify-center gap-2">
                    <p className="text-xs md:text-sm text-white/70 uppercase tracking-wider">
                      [02] {mainPhotos[1].text}
                    </p>
                  </div>
                )}
                
                <div 
                  className="overflow-hidden border border-white/30 relative"
                  style={{ 
                    width: `${mainPhotos[1].containerWidth}px`, 
                    aspectRatio: mainPhotos[1].aspectRatio 
                  }}
                >
                  <Image
                    src={mainPhotos[1].image}
                    alt={mainPhotos[1].text}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-60" />
                </div>
                
                {/* Label below photo if verticalAlign is NOT 'bottom' */}
                {mainPhotos[1].verticalAlign !== 'bottom' && (
                  <div className="mt-3 text-center flex items-center justify-center gap-2">
                    <p className="text-xs md:text-sm text-white/70 uppercase tracking-wider">
                      [02] {mainPhotos[1].text}
                    </p>
                  </div>
                )}
              </div>
            </div>
            {/* Small box 3 */}
            <div 
              className={`hidden md:flex h-full flex-col ${getVerticalAlignment(smallBoxes[2].verticalAlign)} items-center`}
              style={{ width: `${smallBoxes[2].containerWidth}px`, paddingTop: smallBoxes[2].paddingTop, paddingBottom: smallBoxes[2].paddingBottom }}
            >
              <div 
                className="border border-white/20 bg-cover bg-center grayscale"
                style={{ 
                  backgroundImage: `url('${smallBoxes[2].image}')`,
                  width: `${smallBoxes[2].containerWidth}px`,
                  height: `${calculateHeight(smallBoxes[2].containerWidth, smallBoxes[2].aspectRatio)}px`
                }}
              >
                <div className="w-full h-full bg-gradient-to-br from-white/10 to-transparent" />
              </div>
            </div>

            {/* Photo 3 */}
            <div 
              className={`h-full flex flex-col ${getVerticalAlignment(mainPhotos[2].verticalAlign)} items-center`}
              style={{ width: `${mainPhotos[2].containerWidth}px`, paddingTop: mainPhotos[2].paddingTop, paddingBottom: mainPhotos[2].paddingBottom }}
            >
              <div className="flex flex-col items-center">
                {/* Label above photo if verticalAlign is 'bottom' */}
                {mainPhotos[2].verticalAlign === 'bottom' && (
                  <div className="mb-3 text-center flex items-center justify-center gap-2">
                    <p className="text-xs md:text-sm text-white/70 uppercase tracking-wider">
                      [03] {mainPhotos[2].text}
                    </p>
                  </div>
                )}
                
                <div 
                  className="overflow-hidden border border-white/30 relative"
                  style={{ 
                    width: `${mainPhotos[2].containerWidth}px`, 
                    aspectRatio: mainPhotos[2].aspectRatio 
                  }}
                >
                  <Image
                    src={mainPhotos[2].image}
                    alt={mainPhotos[2].text}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-60" />
                </div>
                
                {/* Label below photo if verticalAlign is NOT 'bottom' */}
                {mainPhotos[2].verticalAlign !== 'bottom' && (
                  <div className="mt-3 text-center flex items-center justify-center gap-2">
                    <p className="text-xs md:text-sm text-white/70 uppercase tracking-wider">
                      [03] {mainPhotos[2].text}
                    </p>
                  </div>
                )}
              </div>
            </div>
            
            {/* Small box 4 */}
            <div 
              className={`hidden md:flex h-full flex-col ${getVerticalAlignment(smallBoxes[3].verticalAlign)} items-center`}
              style={{ width: `${smallBoxes[3].containerWidth}px`, paddingTop: smallBoxes[3].paddingTop, paddingBottom: smallBoxes[3].paddingBottom }}
            >
              <div 
                className="border border-white/20 bg-cover bg-center grayscale"
                style={{ 
                  backgroundImage: `url('${smallBoxes[3].image}')`,
                  width: `${smallBoxes[3].containerWidth}px`,
                  height: `${calculateHeight(smallBoxes[3].containerWidth, smallBoxes[3].aspectRatio)}px`
                }}
              >
                <div className="w-full h-full bg-gradient-to-br from-white/10 to-transparent" />
              </div>
            </div>
            {/* Small box 5 */}
            <div 
              className={`hidden md:flex h-full flex-col ${getVerticalAlignment(smallBoxes[4].verticalAlign)} items-center`}
              style={{ width: `${smallBoxes[4].containerWidth}px`, paddingTop: smallBoxes[4].paddingTop, paddingBottom: smallBoxes[4].paddingBottom }}
            >
              <div 
                className="border border-white/20 bg-cover bg-center grayscale"
                style={{ 
                  backgroundImage: `url('${smallBoxes[4].image}')`,
                  width: `${smallBoxes[4].containerWidth}px`,
                  height: `${calculateHeight(smallBoxes[4].containerWidth, smallBoxes[4].aspectRatio)}px`
                }}
              >
                <div className="w-full h-full bg-gradient-to-br from-white/10 to-transparent" />
              </div>
            </div>

            

            {/* Photo 4 */}
            <div 
              className={`h-full flex flex-col ${getVerticalAlignment(mainPhotos[3].verticalAlign)} items-center`}
              style={{ width: `${mainPhotos[3].containerWidth}px`, paddingTop: mainPhotos[3].paddingTop, paddingBottom: mainPhotos[3].paddingBottom }}
            >
              <div className="flex flex-col items-center">
                {/* Label above photo if verticalAlign is 'bottom' */}
                {mainPhotos[3].verticalAlign === 'bottom' && (
                  <div className="mb-3 text-center flex items-center justify-center gap-2">
                    <p className="text-xs md:text-sm text-white/70 uppercase tracking-wider">
                      [04] {mainPhotos[3].text}
                    </p>
                  </div>
                )}
                
                <div 
                  className="overflow-hidden border border-white/30 relative"
                  style={{ 
                    width: `${mainPhotos[3].containerWidth}px`, 
                    aspectRatio: mainPhotos[3].aspectRatio 
                  }}
                >
                  <Image
                    src={mainPhotos[3].image}
                    alt={mainPhotos[3].text}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-60" />
                </div>
                
                {/* Label below photo if verticalAlign is NOT 'bottom' */}
                {mainPhotos[3].verticalAlign !== 'bottom' && (
                  <div className="mt-3 text-center flex items-center justify-center gap-2">
                    <p className="text-xs md:text-sm text-white/70 uppercase tracking-wider">
                      [04] {mainPhotos[3].text}
                    </p>
                  </div>
                )}
              </div>
            </div>
            {/* Small box 6 */}
            <div 
              className={`hidden md:flex h-full flex-col ${getVerticalAlignment(smallBoxes[5].verticalAlign)} items-center`}
              style={{ width: `${smallBoxes[5].containerWidth}px`, paddingTop: smallBoxes[5].paddingTop, paddingBottom: smallBoxes[5].paddingBottom }}
            >
              <div 
                className="border border-white/20 bg-cover bg-center grayscale"
                style={{ 
                  backgroundImage: `url('${smallBoxes[5].image}')`,
                  width: `${smallBoxes[5].containerWidth}px`,
                  height: `${calculateHeight(smallBoxes[5].containerWidth, smallBoxes[5].aspectRatio)}px`
                }}
              >
                <div className="w-full h-full bg-gradient-to-br from-white/10 to-transparent" />
              </div>
            </div>

            {/* Small box 7 */}
            <div 
              className={`hidden md:flex h-full flex-col ${getVerticalAlignment(smallBoxes[6].verticalAlign)} items-center`}
              style={{ width: `${smallBoxes[6].containerWidth}px`, paddingTop: smallBoxes[6].paddingTop, paddingBottom: smallBoxes[6].paddingBottom }}
            >
              <div 
                className="border border-white/20 bg-cover bg-center grayscale"
                style={{ 
                  backgroundImage: `url('${smallBoxes[6].image}')`,
                  width: `${smallBoxes[6].containerWidth}px`,
                  height: `${calculateHeight(smallBoxes[6].containerWidth, smallBoxes[6].aspectRatio)}px`
                }}
              >
                <div className="w-full h-full bg-gradient-to-br from-white/10 to-transparent" />
              </div>
            </div>
          </div>

          {/* Outro Section */}
          <div className="flex-shrink-0 w-screen h-full flex flex-col items-center justify-center px-8 md:px-16">
            <div className="max-w-2xl text-center">
              <h3 className="font-display text-4xl md:text-5xl lg:text-6xl tracking-tight mb-8">
                SOUND LIKE YOU?
              </h3>
              <a 
                href="#join" 
                className="btn-secondary inline-block"
              >
                READY?
              </a>
            </div>
          </div>
        </div>

        {/* Scroll progress indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30">
          <div className="flex items-center gap-2">
            <div className="w-32 h-1 bg-white/20 overflow-hidden">
              <div 
                className="h-full bg-white transition-all duration-200"
                style={{ width: `${scrollProgress * 100}%` }}
              />
            </div>
            <span className="text-white/50 text-xs uppercase tracking-wider">
              {Math.round(scrollProgress * 100)}%
            </span>
          </div>
        </div>
      </div>

      {/* Mobile - Simple stacked layout */}
      <div className="md:hidden py-16 px-6">
        {/* Intro Section */}
        <div className="mb-16 text-center">
          <h2 className="font-display text-3xl sm:text-4xl tracking-tight leading-tight mb-6">
            RIVVIA ISN&apos;T FOR EVERYONE
            <br />
            HERE&apos;S WHO WE BUILT IT FOR
          </h2>
          <p className="text-base text-white/70 uppercase tracking-wide">
            THE RIGHT RIVVIA CANDIDATE:
          </p>
        </div>

        {/* Stacked Photos */}
        <div className="space-y-12">
          {mainPhotos.map((photo, index) => (
            <div key={index} className="flex flex-col items-center">
              <div 
                className="w-full max-w-sm overflow-hidden border border-white/30 relative"
                style={{ aspectRatio: photo.aspectRatio }}
              >
                <Image
                  src={photo.image}
                  alt={photo.text}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-60" />
              </div>
              
              {/* Label below photo with number */}
              <div className="mt-4 text-center flex items-center justify-center gap-2">
                <span className="text-sm text-white/50">[{String(index + 1).padStart(2, '0')}]</span>
                <p className="text-sm text-white/70 uppercase tracking-wider">
                  {photo.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Outro */}
        <div className="mt-16 text-center">
          <h3 className="font-display text-3xl sm:text-4xl tracking-tight mb-6">
            SOUND LIKE YOU?
          </h3>
          <a 
            href="#join" 
            className="btn-secondary inline-block"
          >
            READY?
          </a>
        </div>
      </div>
    </section>
  );
}

