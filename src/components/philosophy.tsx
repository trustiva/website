import Image from "next/image"

export function Philosophy() {
  return (
    <section className="py-24 bg-beige relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 right-10 w-24 h-24 opacity-10 animate-leaf-grow" style={{ animationDelay: "0.3s" }}>
          <Image src="/leaf3.svg" alt="برگ تزئینی" width={96} height={96} />
        </div>
        <div className="absolute bottom-1/4 left-10 w-32 h-32 opacity-10 animate-leaf-grow" style={{ animationDelay: "0.6s" }}>
          <Image src="/leaf4.svg" alt="برگ تزئینی" width={128} height={128} />
        </div>
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="mx-auto max-w-[800px] text-center">
          <div className="animate-fade-up">
            <h2 className="text-3xl font-bold tracking-tighter mb-6 text-gray-800">فلسفه ما</h2>
            <div className="space-y-6 text-gray-600">
              <p className="text-lg leading-relaxed">
                در صفر و خاک، ما به قدرت داستان‌سرایی در تغییر زندگی‌ها باور داریم. 
                مثل یک باغبان که از گیاهانش مراقبت می‌کند، ما ایده‌ها را از دانه تا شکوفایی پرورش می‌دهیم.
              </p>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <div className="p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-mint/20 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 mx-auto mb-4 text-mint">
                <Image src="/leaf1.svg" alt="نوآوری" width={48} height={48} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">نوآوری</h3>
              <p className="text-gray-600">پیشبرد مرزهای دانش و کاوش در امکانات جدید در رسانه و فناوری</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-mint/20 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 mx-auto mb-4 text-mint">
                <Image src="/leaf2.svg" alt="پایداری" width={48} height={48} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">پایداری</h3>
              <p className="text-gray-600">ساخت راه‌حل‌های ماندگار که با گذشت زمان رشد و تکامل می‌یابند</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-mint/20 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 mx-auto mb-4 text-mint">
                <Image src="/leaf3.svg" alt="یادگیری" width={48} height={48} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">یادگیری</h3>
              <p className="text-gray-600">توسعه مستمر مهارت‌ها و دانش برای رشد شخصی و حرفه‌ای</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-mint/20 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 mx-auto mb-4 text-mint">
                <Image src="/leaf4.svg" alt="اجتماع" width={48} height={48} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">اجتماع</h3>
              <p className="text-gray-600">پرورش ارتباطات و ایجاد شبکه جهانی از خالقان و نوآوران</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 