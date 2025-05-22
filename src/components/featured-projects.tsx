import Image from "next/image"

export function FeaturedProjects() {
  return (
    <section id="projects" className="py-24 bg-mint/10">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl font-bold tracking-tighter mb-4 text-gray-800">
            Featured Projects
          </h2>
          <p className="text-gray-600 max-w-[600px] mx-auto">
            Discover our latest initiatives that combine creativity with technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-transform hover:scale-[1.02] animate-fade-up">
            <div className="aspect-video relative">
              <Image
                src="/tamezzy-preview.jpg"
                alt="TAMEZZY Project"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">TAMEZZY</h3>
              <p className="text-gray-600">
                A revolutionary approach to digital storytelling that combines traditional narratives with cutting-edge technology.
              </p>
              <div className="mt-4 flex items-center gap-2">
                <span className="px-3 py-1 rounded-full text-sm bg-mint/20 text-gray-800">Digital Media</span>
                <span className="px-3 py-1 rounded-full text-sm bg-mint/20 text-gray-800">Innovation</span>
              </div>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-transform hover:scale-[1.02] animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <div className="aspect-video relative">
              <Image
                src="/coming-soon.jpg"
                alt="Coming Soon Project"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Coming Soon</h3>
              <p className="text-gray-600">
                We're nurturing something special. Stay tuned for our next groundbreaking project.
              </p>
              <div className="mt-4 flex items-center gap-2">
                <span className="px-3 py-1 rounded-full text-sm bg-mint/20 text-gray-800">In Development</span>
                <span className="px-3 py-1 rounded-full text-sm bg-mint/20 text-gray-800">Coming 2024</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 
} 