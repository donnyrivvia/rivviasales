const traits = [
  "Wants leads provided",
  "Prefers structure over chaos",
  "Values transparency",
  "Motivated by performance",
];

export default function WhoSection() {
  return (
    <section className="py-24 md:py-32 bg-black relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white/[0.02] to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-white/50 text-sm uppercase tracking-[0.3em] mb-4">
            Who We&apos;re Looking For
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl tracking-tight mb-8">
            WHO RIVVIA IS BUILT FOR
          </h2>

          <p className="text-lg md:text-xl text-white/70 mb-12">
            Rivvia is a strong fit if you are a sales rep who:
          </p>

          {/* Traits Grid */}
          <div className="grid sm:grid-cols-2 gap-4 mb-12">
            {traits.map((trait, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-5 border border-white/10 hover:border-white/25 transition-colors text-left"
              >
                <div className="w-8 h-8 flex items-center justify-center border border-white/30 text-sm font-medium">
                  {index + 1}
                </div>
                <span className="text-white/80">{trait}</span>
              </div>
            ))}
          </div>

          <p className="text-white/60 text-lg">
            If you&apos;re looking for a place to plug in, execute, and grow over
            time,{" "}
            <span className="text-white font-medium">
              Rivvia is built for you.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}

