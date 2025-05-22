import Image from "next/image"

export function Philosophy() {
  return (
    <section className="py-24 bg-beige relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 right-10 w-24 h-24 opacity-10 animate-leaf-grow" style={{ animationDelay: "0.3s" }}>
          <Image src="/leaf3.svg" alt="Decorative leaf" width={96} height={96} />
        </div>
        <div className="absolute bottom-1/4 left-10 w-32 h-32 opacity-10 animate-leaf-grow" style={{ animationDelay: "0.6s" }}>
          <Image src="/leaf4.svg" alt="Decorative leaf" width={128} height={128} />
        </div>
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="mx-auto max-w-[800px] text-center">
          <div className="animate-fade-up">
            <h2 className="text-3xl font-bold tracking-tighter mb-6 text-gray-800">Who We Are</h2>
            <div className="space-y-6 text-gray-600">
              <p className="text-lg leading-relaxed">
                At Zero & Soil, we believe in the power of storytelling to transform lives. 
                Like a gardener tending to their plants, we nurture ideas from seed to bloom.
              </p>
              <p className="text-lg leading-relaxed">
                Our mission is to create content that inspires, educates, and connects people 
                across the globe, using technology as our soil and creativity as our water.
              </p>
              <p className="text-lg leading-relaxed">
                We're not just building a media company – we're cultivating a garden of 
                innovation where ideas can flourish and grow into something extraordinary.
              </p>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <div className="p-6 rounded-2xl bg-white/50 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Innovation</h3>
              <p className="text-gray-600">Pushing boundaries and exploring new possibilities in media and technology.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/50 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Sustainability</h3>
              <p className="text-gray-600">Building lasting solutions that grow and evolve with time.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/50 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Community</h3>
              <p className="text-gray-600">Fostering connections and nurturing a global network of creators.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 