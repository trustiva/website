import ContactForm from '@/components/ContactForm'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-beige-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-2xl">
          <h1 className="mb-8 text-center text-4xl font-bold text-gray-900 dark:text-white">
            تماس با ما
          </h1>
          <p className="mb-12 text-center text-lg text-gray-600 dark:text-gray-400">
            برای همکاری، پرسش یا پیشنهاد، از طریق فرم زیر با ما در ارتباط باشید.
          </p>
          <div className="rounded-lg bg-white p-8 shadow-lg dark:bg-gray-800">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  )
} 