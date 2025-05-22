import { Instagram, Youtube, Globe, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-12 bg-beige border-t border-mint/20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-8">
          <div className="flex space-x-6">
            <a
              href="https://instagram.com/zeroandsoil"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-mint transition-colors"
            >
              <Instagram className="h-6 w-6" />
              <span className="sr-only">Instagram</span>
            </a>
            <a
              href="https://youtube.com/@zeroandsoil"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-mint transition-colors"
            >
              <Youtube className="h-6 w-6" />
              <span className="sr-only">YouTube</span>
            </a>
            <a
              href="https://zeroandsoil.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-mint transition-colors"
            >
              <Globe className="h-6 w-6" />
              <span className="sr-only">Website</span>
            </a>
            <a
              href="mailto:contact@zeroandsoil.com"
              className="text-gray-600 hover:text-mint transition-colors"
            >
              <Mail className="h-6 w-6" />
              <span className="sr-only">Email</span>
            </a>
          </div>

          <div className="text-center space-y-2">
            <p className="text-sm text-gray-600">
              © {new Date().getFullYear()} Zero & Soil. All rights reserved.
            </p>
            <p className="text-sm text-gray-500">
              Nurturing ideas, growing together.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
} 