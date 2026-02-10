'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const features = [
  {
    title: "ONBOARD.",
    description: "The KNOCKVIA app will get you 100% onboarded. Every doc, signature, and form you need to sign and see to get you started is in the app.",
  },
  {
    title: "CANVAS.",
    description: "Familiarize yourself with the area in which you're selling. You can see where it's hot, cold, and what's already been knocked. Never double up. Only double down.",
  },
  {
    title: "MANAGE CUSTOMERS.",
    description: "Enter every new lead/customer/contract in KNOCKVIA. From initial contact to close, KNOCKVIA will walk you through the entire process.",
  },
  {
    title: "LEADERBOARDS",
    description: "See how you stack up against those on your team. With one tap, check the leaderboard, how close you are to qualifying for certain incentives, and more.",
  },
  {
    title: "TRAINING",
    description: "Not liking where you are on the Leaderboard? Check out the training section in the app to receive top-tier education and support your efforts.",
  },
];

export default function KnockViaPage() {
  const heroAnimation = useScrollAnimation({ threshold: 0.2 });
  const featuresAnimation = useScrollAnimation({ threshold: 0.2 });
  const ctaAnimation = useScrollAnimation({ threshold: 0.2 });

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section 
          ref={heroAnimation.elementRef as React.RefObject<HTMLElement>}
          data-theme="light"
          className="relative min-h-screen flex items-center justify-center px-6 py-32 overflow-hidden bg-white"
        >
          {/* Decorative elements */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-20 left-10 w-72 h-72 bg-black/5 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-black/5 rounded-full blur-3xl" />
          </div>

          <div className="relative z-10 max-w-5xl mx-auto text-center">
            <div 
              className={`transition-all duration-700 ${
                heroAnimation.isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <h1 className="font-display text-6xl md:text-8xl lg:text-9xl tracking-tight mb-8 text-black">
                KNOCKVIA
              </h1>
              <h2 className="font-display text-2xl md:text-4xl lg:text-5xl tracking-tight mb-12 text-black/90">
                ONBOARD. CANVAS. CLOSE.
                <br />
                AND COMPETE. IN ONE APP.
              </h2>
              <div className="inline-block border-t border-b border-black/20 py-4 px-8 mb-12">
                <p className="text-lg md:text-xl text-black/70 uppercase tracking-widest">
                  Meet Your Best Sales Friend
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Intro Section */}
        <section className="py-24 md:py-32 bg-white text-black" data-theme="light">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl tracking-tight mb-8 leading-tight">
              WE BUILT KNOCKVIA AS A ONE-STOP SHOP FOR OUR SALES REPS.
            </h2>
            <p className="text-xl md:text-2xl text-black/70">
              Here's what it can do:
            </p>
          </div>
        </section>

        {/* Features Section */}
        <section 
          ref={featuresAnimation.elementRef as React.RefObject<HTMLElement>}
          className="py-24 md:py-32 bg-gray-50"
          data-theme="light"
        >
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="space-y-20">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className={`transition-all duration-700 delay-${index * 100} ${
                    featuresAnimation.isVisible 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-8'
                  }`}
                >
                  <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Image placeholder - alternating sides */}
                    <div 
                      className={`aspect-[4/3] bg-gradient-to-br from-black/10 to-black/5 border border-black/10 flex items-center justify-center ${
                        index % 2 === 0 ? 'md:order-1' : 'md:order-2'
                      }`}
                    >
                      <div className="text-black/30 text-center">
                        <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                        <p className="text-sm">Feature Preview</p>
                      </div>
                    </div>

                    {/* Content */}
                    <div className={index % 2 === 0 ? 'md:order-2' : 'md:order-1'}>
                      <h3 className="font-display text-4xl md:text-5xl tracking-tight mb-6 text-black">
                        {feature.title}
                      </h3>
                      <p className="text-lg text-black/70 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section 
          ref={ctaAnimation.elementRef as React.RefObject<HTMLElement>}
          className="py-24 md:py-32 bg-white text-black"
          data-theme="light"
        >
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 
              className={`font-display text-4xl md:text-5xl lg:text-6xl tracking-tight mb-12 transition-all duration-700 ${
                ctaAnimation.isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
            >
              DOWNLOAD KNOCKVIA TODAY
            </h2>
            <div 
              className={`flex flex-col sm:flex-row gap-6 justify-center transition-all duration-700 delay-200 ${
                ctaAnimation.isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
            >
              {/* Apple App Store Button */}
              <a
                href="https://apps.apple.com/us/app/knockvia/id6737631914"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-black text-white hover:bg-black/90 transition-colors"
              >
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs">Download on the</div>
                  <div className="text-lg font-semibold -mt-1">App Store</div>
                </div>
              </a>

              {/* Google Play Button - Placeholder for future */}
              <a
                href="https://apps.apple.com/us/app/knockvia/id6737631914"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-black text-white hover:bg-black/90 transition-colors opacity-50 cursor-not-allowed"
                onClick={(e) => e.preventDefault()}
              >
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs">Coming Soon</div>
                  <div className="text-lg font-semibold -mt-1">Google Play</div>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* Closer Look Section */}
        <section className="py-24 md:py-32 bg-white" data-theme="light">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl tracking-tight text-center mb-16 text-black">
              A CLOSER LOOK AT KNOCKVIA
            </h2>
            {/* Video/Demo Placeholder */}
            <div className="aspect-video bg-gradient-to-br from-black/10 to-black/5 border border-black/10 flex items-center justify-center">
              <div className="text-black/30 text-center">
                <svg className="w-20 h-20 mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-lg">Video Demo Placeholder</p>
                <p className="text-sm mt-2">Screen recording or app walkthrough</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
