import Image from "next/image"

export function CommunityCTA() {
  return (
    <section id="contact" className="py-24 bg-mint/20 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-10 left-1/4 w-40 h-40 opacity-10 animate-leaf-grow">
          <Image src="/leaf5.svg" alt="Decorative leaf" width={160} height={160} />
        </div>
        <div className="absolute bottom-10 right-1/4 w-32 h-32 opacity-10 animate-leaf-grow" style={{ animationDelay: "0.4s" }}>
          <Image src="/leaf6.svg" alt="Decorative leaf" width={128} height={128} />
        </div>
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="mx-auto max-w-[600px] text-center">
          <div className="animate-fade-up">
            <h2 className="text-3xl font-bold tracking-tighter mb-6 text-gray-800">Join Our Community</h2>
            <p className="text-gray-600 mb-8 text-lg">
              Be part of our growing garden of creators, storytellers, and visionaries.
              Together, we'll cultivate the future of media.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <a
              href="https://discord.gg/your-discord"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-mint px-8 py-3 text-sm font-medium text-gray-800 transition-colors hover:bg-mint-dark"
            >
              Join Discord
            </a>
            <a
              href="mailto:contact@zeroandsoil.com"
              className="inline-flex items-center justify-center rounded-full border-2 border-mint px-8 py-3 text-sm font-medium text-gray-800 transition-colors hover:bg-mint/10"
            >
              Contact Us
            </a>
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-up" style={{ animationDelay: "0.5s" }}>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-800 mb-2">100+</div>
              <div className="text-gray-600">Creators</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-800 mb-2">50+</div>
              <div className="text-gray-600">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-800 mb-2">10k+</div>
              <div className="text-gray-600">Community</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-800 mb-2">24/7</div>
              <div className="text-gray-600">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 