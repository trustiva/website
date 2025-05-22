import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'TAMEZZY | صفر و خاک',
  description: 'پروژه TAMEZZY - نوآوری در داستان‌سرایی دیجیتال',
}

const tamezzyProject = {
  title: 'TAMEZZY',
  description: 'یک رویکرد انقلابی در داستان‌سرایی دیجیتال که روایت‌های سنتی را با فناوری‌های پیشرفته ترکیب می‌کند.',
  features: [
    {
      title: 'قبل',
      description: 'داستان‌سرایی خطی و یک‌طرفه',
      icon: '📖',
    },
    {
      title: 'بعد',
      description: 'تجربه تعاملی و چندرسانه‌ای',
      icon: '🎮',
    },
    {
      title: 'قبل',
      description: 'مخاطب منفعل',
      icon: '👥',
    },
    {
      title: 'بعد',
      description: 'مخاطب فعال و مشارکت‌جو',
      icon: '🤝',
    },
  ],
}

export default function ProjectPage() {
  return (
    <article className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">{tamezzyProject.title}</h1>
        
        <div className="mb-12">
          <Image
            src="/tamezzy-preview.jpg"
            alt="TAMEZZY Project"
            width={1200}
            height={600}
            className="rounded-lg shadow-lg"
          />
        </div>

        <p className="text-xl text-gray-600 mb-12">
          {tamezzyProject.description}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {tamezzyProject.features.map((feature, index) => (
            <div
              key={index}
              className={`p-6 rounded-2xl ${
                feature.title === 'قبل'
                  ? 'bg-gray-100'
                  : 'bg-mint/20'
              }`}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-beige p-8 rounded-2xl">
          <h2 className="text-2xl font-bold mb-4">مزایای کلیدی</h2>
          <ul className="space-y-4">
            <li className="flex items-center">
              <span className="text-2xl mr-3">✨</span>
              <span>تجربه کاربری منحصر به فرد و جذاب</span>
            </li>
            <li className="flex items-center">
              <span className="text-2xl mr-3">🚀</span>
              <span>فناوری‌های پیشرفته و نوآورانه</span>
            </li>
            <li className="flex items-center">
              <span className="text-2xl mr-3">🎯</span>
              <span>تعامل عمیق با مخاطب</span>
            </li>
            <li className="flex items-center">
              <span className="text-2xl mr-3">🌱</span>
              <span>قابلیت رشد و توسعه مداوم</span>
            </li>
          </ul>
        </div>
      </div>
    </article>
  )
} 