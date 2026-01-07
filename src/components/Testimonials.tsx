const testimonials = [
  {
    quote:
      "Having leads provided completely changed how I sell. I can focus on conversations and closing instead of chasing.",
    author: "Sales Rep",
    role: "Rivvia Team Member",
  },
  {
    quote:
      "The transparency and structure made it easy to understand where I stood and how to improve.",
    author: "Sales Rep",
    role: "Rivvia Team Member",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-white/50 text-sm uppercase tracking-[0.3em] mb-4">
            From the Team
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl tracking-tight">
            WHAT REPS ARE SAYING
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative p-8 md:p-10 border border-white/10 hover:border-white/20 transition-colors"
            >
              {/* Quote Mark */}
              <div className="absolute top-6 left-8 font-display text-6xl text-white/10 leading-none">
                &ldquo;
              </div>

              {/* Quote */}
              <blockquote className="relative z-10 pt-8">
                <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-8">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                {/* Author */}
                <footer className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white/10 flex items-center justify-center">
                    <span className="text-sm font-medium">
                      {testimonial.author.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-white/90">
                      — {testimonial.author}
                    </div>
                    <div className="text-xs text-white/50 uppercase tracking-wider">
                      {testimonial.role}
                    </div>
                  </div>
                </footer>
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

