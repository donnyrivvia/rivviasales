const testimonials = [
  {
    videoId: "202f6766-8911-4b1d-a3a4-3142365ae6dc",
    author: "Golden Door Winner",
    role: "Rivvia Team Member",
  },
  {
    videoId: "33dfcd85-fbe4-4e99-9210-9712a09dedf0",
    author: "Golden Door Winner",
    role: "Rivvia Team Member",
  },
  {
    videoId: "b8562cbf-b21c-4e6b-af12-4b0582d07e40",
    author: "Golden Door Winner",
    role: "Rivvia Team Member",
  },
  {
    videoId: "380be2c9-4183-4b4e-97e8-a19205c27cd0",
    author: "Golden Door Winner",
    role: "Rivvia Team Member",
  },
];

export default function Testimonials() {
  return (
    <section data-theme="dark" className="py-24 md:py-32 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl tracking-tight">
            OUR GOLDEN DOOR WINNERS
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">Get to know them and see what they're saying about their experience with Rivvia.</p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative border border-white/10 hover:border-white/20 transition-colors overflow-hidden"
            >
              {/* Video */}
              <div className="w-full bg-black">
                <video
                  controls
                  className="w-full"
                  preload="metadata"
                >
                  <source src={`https://vz-d6574812-a94.b-cdn.net/${testimonial.videoId}/play_1080p.mp4`} type="video/mp4" />
                  <source src={`https://vz-d6574812-a94.b-cdn.net/${testimonial.videoId}/play_720p.mp4`} type="video/mp4" />
                </video>
              </div>

              {/* Author Info */}
              <div className="p-6 bg-black/50">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white/10 flex items-center justify-center">
                    <span className="text-sm font-medium">
                      {testimonial.author.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-white/90">
                      {testimonial.author}
                    </div>
                    <div className="text-xs text-white/50 uppercase tracking-wider">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

