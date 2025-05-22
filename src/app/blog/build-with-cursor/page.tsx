import { Metadata } from 'next'
import Image from 'next/image'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'

export const metadata: Metadata = {
  title: 'چطور با Cursor اپ بسازیم؟ | صفر و خاک',
  description: 'آموزش جامع ساخت اپلیکیشن با Cursor IDE',
}

export default function BlogPost() {
  return (
    <article className="container mx-auto px-4 py-16 max-w-4xl">
      <div className="prose prose-lg mx-auto">
        <h1 className="text-4xl font-bold mb-8">چطور با Cursor اپ بسازیم؟</h1>
        
        <div className="mb-8">
          <Image
            src="/blog/cursor-ide.jpg"
            alt="Cursor IDE"
            width={800}
            height={400}
            className="rounded-lg"
          />
        </div>

        <p className="lead">
          در این مقاله، یاد می‌گیریم چطور با استفاده از Cursor IDE یک اپلیکیشن Next.js بسازیم.
          Cursor یک IDE هوشمند است که با استفاده از هوش مصنوعی به شما در کدنویسی کمک می‌کند.
        </p>

        <h2>نصب و راه‌اندازی</h2>
        <p>
          برای شروع، ابتدا باید Cursor را از وب‌سایت رسمی دانلود و نصب کنید.
          سپس می‌توانید یک پروژه Next.js جدید ایجاد کنید:
        </p>

        <SyntaxHighlighter language="bash" style={tomorrow}>
          {`npx create-next-app@latest my-app
cd my-app
npm run dev`}
        </SyntaxHighlighter>

        <h2>ساخت کامپوننت‌های اصلی</h2>
        <p>
          حالا می‌توانیم کامپوننت‌های اصلی اپلیکیشن را بسازیم.
          برای مثال، یک کامپوننت Hero:
        </p>

        <SyntaxHighlighter language="tsx" style={tomorrow}>
          {`export function Hero() {
  return (
    <section className="min-h-[90vh] flex items-center justify-center">
      <div className="container px-4">
        <h1 className="text-5xl font-bold">
          از صفر، تا جهانی شدن با خاک 🌱
        </h1>
      </div>
    </section>
  )
}`}
        </SyntaxHighlighter>

        <h2>استایل‌دهی با Tailwind CSS</h2>
        <p>
          برای استایل‌دهی، از Tailwind CSS استفاده می‌کنیم.
          این فریم‌ورک به ما کمک می‌کند تا به سرعت رابط کاربری زیبا بسازیم:
        </p>

        <SyntaxHighlighter language="css" style={tomorrow}>
          {`@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
  .btn-primary {
    @apply px-6 py-3 bg-mint text-gray-800 rounded-full hover:bg-mint-dark transition-colors;
  }
}`}
        </SyntaxHighlighter>

        <h2>نتیجه‌گیری</h2>
        <p>
          با استفاده از Cursor و Next.js، می‌توانید به سرعت اپلیکیشن‌های مدرن و زیبا بسازید.
          هوش مصنوعی Cursor به شما کمک می‌کند تا کد بهتری بنویسید و سریع‌تر توسعه دهید.
        </p>
      </div>
    </article>
  )
} 