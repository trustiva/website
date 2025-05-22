import Image from "next/image"

export function Blog() {
  return (
    <section className="py-24 bg-mint/10 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-10 left-1/4 w-40 h-40 opacity-10 animate-leaf-grow">
          <Image src="/leaf5.svg" alt="برگ تزئینی" width={160} height={160} />
        </div>
        <div className="absolute bottom-10 right-1/4 w-32 h-32 opacity-10 animate-leaf-grow" style={{ animationDelay: "0.4s" }}>
          <Image src="/leaf6.svg" alt="برگ تزئینی" width={128} height={128} />
        </div>
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl font-bold tracking-tighter mb-4 text-gray-800">
            یادگیری مداوم با صفر و خاک
          </h2>
          <p className="text-gray-600 max-w-[600px] mx-auto">
            مقالات و آموزش‌های کاربردی برای رشد و توسعه مهارت‌های شما
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-transform hover:scale-[1.02] animate-fade-up">
            <div className="aspect-video relative">
              <Image
                src="/blog1.jpg"
                alt="مقاله اول"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">راهنمای جامع تولید محتوا</h3>
              <p className="text-gray-600">
                یاد بگیرید چطور محتوای جذاب و تاثیرگذار تولید کنید که مخاطبان را به خود جذب کند.
              </p>
              <a
                href="#"
                className="mt-4 inline-flex items-center text-mint hover:text-mint-dark transition-colors"
              >
                مطالعه بیشتر
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-transform hover:scale-[1.02] animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <div className="aspect-video relative">
              <Image
                src="/blog2.jpg"
                alt="مقاله دوم"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">استراتژی‌های رشد در شبکه‌های اجتماعی</h3>
              <p className="text-gray-600">
                تکنیک‌های کاربردی برای افزایش تعامل و رشد حساب‌های کاربری در شبکه‌های اجتماعی.
              </p>
              <a
                href="#"
                className="mt-4 inline-flex items-center text-mint hover:text-mint-dark transition-colors"
              >
                مطالعه بیشتر
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 