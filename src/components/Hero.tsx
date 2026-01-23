import Link from "next/link";

// Video URL - Hosted on Google Drive
// File ID: 1i945Qj4pfvJFao8Xlbplt0GTef9qTYJ8
const VIDEO_URL = "https://drive.google.com/uc?export=download&id=1i945Qj4pfvJFao8Xlbplt0GTef9qTYJ8";

export default function Hero() {
  return (
    <section data-theme="light" className="relative min-h-screen flex items-center justify-start overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={VIDEO_URL} type="video/mp4" />
          {/* Fallback gradient if video doesn't load */}
        </video>
        {/* Dark overlay to ensure text readability */}
        {/* <div className="absolute inset-0 bg-black/20" /> */}
      </div>

      {/* Fallback Background Gradient (shows if video doesn't load) */}
      {/* <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0a0a0a] to-[#111] -z-10" /> */}

      {/* Animated background shapes */}
      {/* <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-white/[0.02] rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-white/[0.02] rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/[0.01] rounded-full blur-3xl" />
      </div> */}

      {/* Grid pattern overlay */}
      {/* <div className="absolute inset-0 opacity-[0.01]">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="heroGrid" width="4" height="4" patternUnits="userSpaceOnUse">
              <path d="M 4 0 L 0 0 0 4" fill="none" stroke="white" strokeWidth="0.2"/>
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#heroGrid)" />
        </svg>
      </div> */}

      {/* Radial gradient overlay */}
      {/* <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.5)_100%)]" /> */}

      {/* Content */}
      <div className="relative z-10 w-full max-w-[90vw] px-6 lg:px-8 py-32 pt-40 flex flex-col items-start justify-start mx-auto">
        <div className="max-w-4xl flex flex-col">
          {/* Main Headline */}
          <h1 className="font-display text-black text-xl sm:text-6xl md:text-[180px] lg:text-[200px] leading-[0.80] mb-6 animate-fade-in-up">
            <b><i>A BETTER<br /> SALES CAREER</i></b>
            
          </h1>
          <h3 className="font-display text-black text-xl sm:text-6xl md:text-[80px] lg:text-[100px] leading-[0.95] mb-6 animate-fade-in-up">
            <i>BEGINS AT RIVVIA</i>
          </h3>

          {/* Subheadline */}
          <p className="text-sm md:text-base text-black max-w-3xl mb-10 leading-relaxed animate-fade-in-up delay-100 uppercase tracking-wider">
            LEADING FIBER PROVIDER | MEANINGFUL OPPORTUNITIES | INCENTIVES
          </p>

          {/* Description */}
          <p className="text-base md:text-lg text-black max-w-2xl mb-10 animate-fade-in-up delay-200 italic leading-relaxed">
            Rivvia is built for sales reps who care more about consistency and less about hype. Our product, systems, and platforms are designed to help you win, win big, and win consistently.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-300 justify-start items-start">
            <Link href="#join" className="btn-primary-light inline-block text-center">
              Join the Team
            </Link>
            <Link
              href="#how-it-works"
              className="btn-secondary-light inline-block text-center"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white/60 rounded-full" />
        </div>
      </div>

      
    </section>
  );
}
