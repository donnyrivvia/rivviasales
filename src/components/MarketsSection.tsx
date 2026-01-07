import Link from "next/link";

export default function MarketsSection() {
  return (
    <section id="markets" className="py-24 md:py-32 bg-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <div className="line-accent mb-6" />
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl tracking-tight mb-6">
              MARKETS &<br />EXPANSION
            </h2>
            <p className="text-lg text-white/70 mb-6 leading-relaxed">
              Rivvia operates in live markets across the country, with new
              territories launching regularly. Sales reps can view available
              markets, see where demand is strongest, and expand as opportunity
              grows.
            </p>
            <p className="text-white/50 mb-8">
              You&apos;re never selling blind—we prioritize markets with real activity
              and measurable demand.
            </p>
            <Link href="#join" className="btn-primary inline-block">
              View Open Markets
            </Link>
          </div>

          {/* Visual - Abstract Map Representation */}
          <div className="relative aspect-square max-w-md mx-auto lg:max-w-none">
            <div className="absolute inset-0 border border-white/10">
              {/* Dot grid representing markets */}
              <div className="absolute inset-8 grid grid-cols-6 gap-4">
                {Array.from({ length: 36 }).map((_, i) => (
                  <div
                    key={i}
                    className={`w-2 h-2 rounded-full transition-all duration-500 ${
                      [3, 7, 12, 15, 18, 21, 24, 28, 33].includes(i)
                        ? "bg-white scale-150"
                        : [5, 9, 14, 19, 22, 26, 31].includes(i)
                        ? "bg-white/50"
                        : "bg-white/20"
                    }`}
                  />
                ))}
              </div>
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-white/30" />
              <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-white/30" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-white/30" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-white/30" />
            </div>
            {/* Label */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-black px-4 py-1">
              <span className="text-xs uppercase tracking-wider text-white/40">
                Active Markets Nationwide
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

