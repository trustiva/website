import { ThemeToggle } from "@/components/theme-toggle"
import { Hero } from "@/components/hero"
import { FeaturedProjects } from "@/components/featured-projects"
import { Philosophy } from "@/components/philosophy"
import { CommunityCTA } from "@/components/community-cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>
      
      <Hero />
      <FeaturedProjects />
      <Philosophy />
      <CommunityCTA />
      <Footer />
    </main>
  )
}
