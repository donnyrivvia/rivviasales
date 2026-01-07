const stats = [
  {
    value: "50,000+",
    label: "Total Leads Generated",
  },
  {
    value: "25+",
    label: "Active Markets Nationwide",
  },
  {
    value: "32%",
    label: "Average Conversion Rate",
  },
  {
    value: "$4.50",
    label: "Average Cost Per Lead",
  },
];

export default function StatsSection() {
  return (
    <section id="opportunity" className="py-24 md:py-32 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <p className="text-white/50 text-sm uppercase tracking-[0.3em] mb-4">
            Opportunity at Scale
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl tracking-tight mb-6">
            REAL VOLUME. REAL RESULTS.
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Rivvia operates across active markets nationwide, creating consistent
            demand for our sales teams. This is not a test environment—you're
            stepping into a live system that produces real volume.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 border border-white/10 hover:border-white/20 transition-colors"
            >
              <div className="stat-number text-white mb-2">{stat.value}</div>
              <div className="text-sm text-white/50 uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom text */}
        <p className="text-center text-white/40 mt-12 text-sm">
          These numbers exist to answer one question: will you have opportunity
          here?{" "}
          <span className="text-white/80 font-medium">The answer is yes.</span>
        </p>
      </div>
    </section>
  );
}

