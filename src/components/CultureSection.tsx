import Image from "next/image";

export default function CultureSection() {
  return (
    <section data-theme="dark" className="py-24 md:py-32 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <p className="text-white/50 text-sm uppercase tracking-[0.3em] mb-4">
            Our Environment
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl tracking-tight mb-6">
            WHAT IT&apos;S LIKE WORKING AT RIVVIA
          </h2>
          <p className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-3xl mx-auto">
            Rivvia is a performance-driven team built on accountability,
            professionalism, and execution.
          </p>
        </div>

        {/* Mini Sections */}
        <div className="space-y-24">
          {/* Support Mini-Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="line-accent mb-6" />
              <h3 className="font-display text-3xl md:text-4xl lg:text-5xl tracking-tight mb-6">
                SUPPORT
              </h3>
              <p className="text-lg md:text-xl text-white/70 mb-6 leading-relaxed">
                Systems and resources to help you succeed
              </p>
              <p className="text-base text-white/60 leading-relaxed">
                From day one, you'll have access to proven tools, comprehensive training, and ongoing support. Our team is committed to providing everything you need to perform at your best—whether it's tech, leads, or coaching.
              </p>
            </div>
            <div className="order-1 lg:order-2">
              {/* Placeholder for Support Image/Video */}
              <div className="aspect-[4/3] bg-white/5 rounded-lg overflow-hidden border border-white/10 flex items-center justify-center">
                <Image 
                  src="/growth1.png" 
                  alt="Support systems and resources"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Structure Mini-Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-1">
              {/* Placeholder for Structure Image/Video */}
              <div className="aspect-[4/3] bg-white/5 rounded-lg overflow-hidden border border-white/10 flex items-center justify-center">
                <Image 
                  src="/growth2.png" 
                  alt="Clear structure and workflows"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="order-2">
              <div className="line-accent mb-6" />
              <h3 className="font-display text-3xl md:text-4xl lg:text-5xl tracking-tight mb-6">
                STRUCTURE
              </h3>
              <p className="text-lg md:text-xl text-white/70 mb-6 leading-relaxed">
                Clear workflows and expectations
              </p>
              <p className="text-base text-white/60 leading-relaxed">
                No guessing. No chaos. We operate with clear processes, defined roles, and transparent expectations. You'll always know what's expected, how to improve, and where you stand.
              </p>
            </div>
          </div>

          {/* Communication Mini-Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="line-accent mb-6" />
              <h3 className="font-display text-3xl md:text-4xl lg:text-5xl tracking-tight mb-6">
                COMMUNICATION
              </h3>
              <p className="text-lg md:text-xl text-white/70 mb-6 leading-relaxed">
                Direct, honest, and transparent
              </p>
              <p className="text-base text-white/60 leading-relaxed">
                We believe in straight talk. No corporate speak, no mixed messages. You'll get honest feedback, clear direction, and open channels to leadership. It's communication that actually helps you grow.
              </p>
            </div>
            <div className="order-1 lg:order-2">
              {/* Placeholder for Communication Image/Video */}
              <div className="aspect-[4/3] bg-white/5 rounded-lg overflow-hidden border border-white/10 flex items-center justify-center">
                <Image 
                  src="/growth3.png" 
                  alt="Open communication and transparency"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Statement */}
        <div className="mt-20 text-center max-w-3xl mx-auto space-y-6">
          <p className="text-white/60 text-lg">
            We value reps who take ownership of their results and respect
            systems that work. Success ultimately comes down to effort and
            consistency.
          </p>
          <p className="text-white/40 pt-6 border-t border-white/10">
            This is not hype culture.{" "}
            <span className="text-white/80">It&apos;s a working sales environment.</span>
          </p>
        </div>
      </div>
    </section>
  );
}

