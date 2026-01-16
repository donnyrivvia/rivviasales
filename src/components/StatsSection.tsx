const stats = [
  {
    value: "50,000+",
    label: "Total Leads Generated",
  },
  {
    value: "25+",
    label: "High-Demand Markets",
  },
  {
    value: "32%",
    label: "Conversion Rate",
  },
  {
    value: "$15k",
    label: "Monthly Commissions",
  },
];

export default function StatsSection() {
  return (
    <section id="opportunity" className="py-24 md:py-32 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl tracking-tight mb-6">
            OPPORTUNITY THAT SCALES
          </h2>
          <p className="text-xl md:text-2xl text-white/80 font-semibold mb-4">
            Real Volume. Real Growth. Real Results.
          </p>
          <p className="text-white/60 max-w-2xl mx-auto italic mb-6">
            Consistent Demand for our sales teams across a nationwide market.
          </p>
          <p className="text-white/70 max-w-2xl mx-auto">
            These are real numbers:
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
        <p className="text-center text-white/60 mt-12 text-base">
          We've provided these numbers to answer the question: "how big is the opportunity?" <span className="text-white/90 font-medium">As big as you want it to be.</span>
        </p>
      </div>
    </section>
  );
}

