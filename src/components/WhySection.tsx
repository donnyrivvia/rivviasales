export default function WhySection() {
  return (
    <section data-theme="light" id="about" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Left Column - Title */}
          <div>
            <div className="line-accent mb-6" />
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[0.95] text-black">
              WHY SELL
              <br />
              WITH RIVVIA?
            </h2>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-6">
            <p className="text-xl md:text-2xl font-semibold text-black/90 leading-tight uppercase tracking-wide">
              HIGH DEMAND.<br/> SERIOUS ENVIRONMENT.<br/> PROVEN SYSTEMS.
            </p>
            <p className="text-base text-black/70 leading-relaxed">
              Rivvia is designed for excellence. From the high-demand product we sell (fiber internet) to the internal systems we've put into place, we've tooled our business to ensure your efforts are matched with maximum upside and wire-to-wire support.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

