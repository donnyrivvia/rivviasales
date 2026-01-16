const traits = [
  "VALUES STRUCTURE OVER HYPE",
  "IS MOTIVATED BY REAL OPPORTUNITY",
  "CRAVES SELF IMPROVEMENT/PERFORMANCE",
  "VALUES TRANSPARENCY",
];

export default function WhoSection() {
  return (
    <section className="py-24 md:py-32 bg-black relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white/[0.02] to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl tracking-tight leading-tight mb-8">
            RIVVIA ISN&apos;T FOR EVERYONE
            <br />
            HERE&apos;S WHO WE BUILT IT FOR
          </h2>

          <p className="text-lg md:text-xl text-white/70 mb-12 uppercase tracking-wide">
            THE RIGHT RIVVIA CANDIDATE:
          </p>

          {/* Traits Grid */}
          <div className="grid sm:grid-cols-2 gap-4 mb-12">
            {traits.map((trait, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-5 border border-white/10 hover:border-white/25 transition-colors text-left"
              >
                <div className="w-10 h-10 flex items-center justify-center border border-white/30 text-sm font-medium shrink-0">
                  [{String(index + 1).padStart(2, '0')}]
                </div>
                <span className="text-white/80 text-sm uppercase tracking-wide">{trait}</span>
              </div>
            ))}
          </div>

          <a href="#join" className="btn-secondary inline-block">
            READY?
          </a>
        </div>
      </div>
    </section>
  );
}

