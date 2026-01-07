export default function WhySection() {
  return (
    <section id="about" className="py-24 md:py-32 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Left Column - Title */}
          <div>
            <div className="line-accent mb-6" />
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[0.95]">
              WHY SELL
              <br />
              WITH RIVVIA
            </h2>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-6">
            <p className="text-lg md:text-xl text-white/80 leading-relaxed">
              Rivvia is designed for execution. Our platform, markets, and
              support systems exist to help sales reps perform at a high level
              without unnecessary friction.
            </p>
            <p className="text-base text-white/60 leading-relaxed">
              Reps choose Rivvia because leads are provided through proven
              acquisition channels, markets are active and expanding, and
              expectations are clear from day one. Performance is tracked
              openly, communication is direct, and growth is based on
              results—not hype.
            </p>
            <p className="text-lg font-medium text-white/90 pt-4 border-t border-white/10">
              This is a serious environment for serious sellers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

