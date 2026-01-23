export default function CultureSection() {
  return (
    <section data-theme="dark" className="py-24 md:py-32 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <p className="text-white/50 text-sm uppercase tracking-[0.3em] mb-4">
              Our Environment
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl tracking-tight">
              WHAT IT&apos;S LIKE WORKING AT RIVVIA
            </h2>
          </div>

          {/* Content */}
          <div className="space-y-8 text-center">
            <p className="text-xl md:text-2xl text-white/80 leading-relaxed">
              Rivvia is a performance-driven team built on accountability,
              professionalism, and execution.
            </p>

            <div className="grid md:grid-cols-3 gap-6 py-8">
              <div className="p-6 border-t border-white/10">
                <h3 className="text-lg font-semibold mb-2 uppercase tracking-wider">
                  Support
                </h3>
                <p className="text-white/50 text-sm">
                  Systems and resources to help you succeed
                </p>
              </div>
              <div className="p-6 border-t border-white/10">
                <h3 className="text-lg font-semibold mb-2 uppercase tracking-wider">
                  Structure
                </h3>
                <p className="text-white/50 text-sm">
                  Clear workflows and expectations
                </p>
              </div>
              <div className="p-6 border-t border-white/10">
                <h3 className="text-lg font-semibold mb-2 uppercase tracking-wider">
                  Communication
                </h3>
                <p className="text-white/50 text-sm">
                  Direct, honest, and transparent
                </p>
              </div>
            </div>

            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              We value reps who take ownership of their results and respect
              systems that work. Success ultimately comes down to effort and
              consistency.
            </p>

            <p className="text-white/40 pt-6 border-t border-white/10 max-w-xl mx-auto">
              This is not hype culture.{" "}
              <span className="text-white/80">It&apos;s a working sales environment.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

