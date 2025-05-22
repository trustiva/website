export function FeaturedProjects() {
  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="group relative overflow-hidden rounded-lg">
            <div className="aspect-video bg-gray-200 dark:bg-gray-800" />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-bold text-white">TAMEZZY</h3>
                <p className="text-gray-200 mt-2">
                  A revolutionary approach to digital storytelling.
                </p>
              </div>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-lg">
            <div className="aspect-video bg-gray-200 dark:bg-gray-800" />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-bold text-white">Coming Soon</h3>
                <p className="text-gray-200 mt-2">
                  Stay tuned for our next big project.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 