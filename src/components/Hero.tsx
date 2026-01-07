import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-start overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0a0a0a] to-[#111]" />

      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-white/[0.02] rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-white/[0.02] rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/[0.01] rounded-full blur-3xl" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="heroGrid" width="4" height="4" patternUnits="userSpaceOnUse">
              <path d="M 4 0 L 0 0 0 4" fill="none" stroke="white" strokeWidth="0.2"/>
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#heroGrid)" />
        </svg>
      </div>

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.5)_100%)]" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32 pt-40">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <p className="text-white/60 text-sm uppercase tracking-[0.3em] mb-6 animate-fade-in-up text-center">
            Build Your Sales Career
          </p>

          {/* Main Headline */}
          <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight leading-[0.9] mb-6 animate-fade-in-up delay-100 text-center">
            SELL WITH
            <br />
            CONFIDENCE
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-white/80 max-w-2xl mb-10 leading-relaxed animate-fade-in-up delay-200 text-center">
            Leads provided. Active markets. Real opportunity.
          </p>

          {/* Description */}
          <p className="text-base text-white/60 max-w-xl mb-10 animate-fade-in-up delay-300 text-center">
            Rivvia is built for sales reps who want consistency, support, and a
            system that works. We remove the guesswork from selling.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-400 justify-start sm:justify-center items-center">
            <Link href="#join" className="btn-primary inline-block text-center">
              Join the Rivvia Sales Team
            </Link>
            <Link
              href="#how-it-works"
              className="btn-secondary inline-block text-center"
            >
              See How It Works
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

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}
