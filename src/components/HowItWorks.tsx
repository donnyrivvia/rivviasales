import Image from "next/image";

const steps = [
  {
    number: "01",
    title: "ONBOARD & ALIGN",
    description:
      "World class onboarding ensures you're ready to sell fiber and represent Rivvia.",
    image: "/growth1.png",
  },
  {
    number: "02",
    title: "PLUG IN & PLAY",
    description:
      "We plug you into our systems, processes, and booming markets so you can hit the ground running.",
    image: "/growth2.png",
  },
  {
    number: "03",
    title: "EXECUTE & EARN",
    description:
      "Start closing quickly and earn what you deserve. We'll help you perform better so you can earn more.",
    image: "/growth3.png",
  },
  {
    number: "04",
    title: "REPEAT & GROW",
    description:
      "The reps who stick with us grow into new earning potentials, Positions, and more.",
    image: "/growth4.png",
  },
];

export default function HowItWorks() {
  return (
    <section data-theme="dark" id="how-it-works" className="py-24 md:py-32 bg-[#0a0a0a]">
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

        {/* 2x2 Grid of Image Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="relative group overflow-hidden rounded-[1px] bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-[1.02]"
            >
              {/* Background Image */}
              <div className="absolute inset-0 overflow-hidden">
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  className="object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-500"
                />
              </div>

              {/* Background Pattern/Texture */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Card Content */}
              <div className="relative z-10 p-8 md:p-10 lg:p-12 min-h-[300px] md:min-h-[350px] flex flex-col">
                {/* Step Number - Large Background */}
                <div className="absolute top-6 right-6 md:top-8 md:right-8">
                  <span className="font-display text-8xl md:text-9xl text-white/5 group-hover:text-white/10 transition-colors duration-500">
                    {step.number}
                  </span>
                </div>

                {/* Step Number - Small Indicator */}
                <div className="relative mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 border border-white/20 group-hover:border-white/40 bg-black transition-colors duration-300">
                    <span className="font-display text-2xl text-white/40 group-hover:text-white/60 transition-colors">
                      {step.number}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col justify-center">
                  <h3 className="text-2xl md:text-3xl font-display font-semibold mb-4 uppercase tracking-wider text-white group-hover:text-white transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-white/60 group-hover:text-white/80 text-base md:text-lg leading-relaxed transition-colors">
                    {step.description}
                  </p>
                </div>

                {/* Bottom Accent Line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

