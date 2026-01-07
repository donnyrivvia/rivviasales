import Link from "next/link";

export default function FooterCTA() {
  return (
    <section id="join" className="py-24 md:py-32 bg-[#0a0a0a] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/[0.02] blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/[0.02] blur-3xl rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Headline */}
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl tracking-tight mb-6">
            READY TO SELL
            <br />
            WITH RIVVIA?
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-white/60 mb-10 max-w-xl mx-auto">
            If you&apos;re looking for a sales opportunity with real demand, clear
            systems, and room to grow, Rivvia is ready.
          </p>

          {/* CTA */}
          <Link
            href="#"
            className="btn-primary inline-flex items-center gap-3 text-lg"
          >
            Join the Rivvia Sales Team
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

