const steps = [
  {
    number: "01",
    title: "ONBOARD & ALIGN",
    description:
      "World class onboarding ensures you're ready to sell fiber and represent Rivvia.",
  },
  {
    number: "02",
    title: "PLUG IN & PLAY",
    description:
      "We plug you into our systems, processes, and booming markets so you can hit the ground running.",
  },
  {
    number: "03",
    title: "EXECUTE & EARN",
    description:
      "Start closing quickly and earn what you deserve. We'll help you perform better so you can earn more.",
  },
  {
    number: "04",
    title: "REPEAT & GROW",
    description:
      "The reps who stick with us grow into new earning potentials, Positions, and more.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 md:py-32 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <p className="text-white/50 text-sm uppercase tracking-[0.3em] mb-4">
            The Sales Process
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl tracking-tight mb-6">
            BUILT FOR BIG GROWTH
          </h2>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative group">
                {/* Step Number */}
                <div className="relative z-10 w-32 h-32 mx-auto mb-6 flex items-center justify-center">
                  <div className="absolute inset-0 border border-white/10 group-hover:border-white/30 transition-colors" />
                  <span className="font-display text-5xl text-white/20 group-hover:text-white/40 transition-colors">
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-xl font-semibold mb-3 uppercase tracking-wider">
                    {step.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

