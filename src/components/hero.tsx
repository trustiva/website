import Image from "next/image"

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-beige">
      {/* Decorative elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-32 h-32 opacity-20 animate-leaf-grow">
          <Image src="/leaf1.svg" alt="برگ تزئینی" width={128} height={128} />
        </div>
        <div className="absolute bottom-20 right-10 w-40 h-40 opacity-20 animate-leaf-grow" style={{ animationDelay: "0.5s" }}>
          <Image src="/leaf2.svg" alt="برگ تزئینی" width={160} height={160} />
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 opacity-10 animate-leaf-grow" style={{ animationDelay: "0.8s" }}>
          <Image src="/plant.svg" alt="گیاه در حال رشد" width={256} height={256} />
        </div>
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center space-y-8 text-center">
          <div className="space-y-4 animate-fade-up">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-gray-800">
              از صفر، تا جهانی شدن با خاک
              <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl"> 🌱</span>
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
              پرورش ایده‌ها مثل دانه‌های کوچک در خاک حاصلخیز، 
              و تماشای رشد آنها به چیزی خارق‌العاده
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-full bg-mint px-8 py-3 text-sm font-medium text-gray-800 transition-colors hover:bg-mint-dark"
            >
              شروع مسیر
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border-2 border-mint px-8 py-3 text-sm font-medium text-gray-800 transition-colors hover:bg-mint/10"
            >
              تماس با ما
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-gray-600"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  )
} 