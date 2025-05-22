export function CommunityCTA() {
  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-[600px] text-center">
          <h2 className="text-3xl font-bold tracking-tighter mb-6">Join Our Community</h2>
          <p className="text-gray-500 dark:text-gray-400 mb-8">
            Be part of our growing community of creators, storytellers, and visionaries.
          </p>
          <a
            href="https://discord.gg/your-discord"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md bg-black px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
          >
            Join Discord
          </a>
        </div>
      </div>
    </section>
  )
} 