import Link from 'next/link'
import { Facebook, X, Instagram, QrCode} from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full py-12 ">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-semibold">About Us</h3>
            <Link href="/our-story" className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100">
              Our Story
            </Link>
            <Link href="/team" className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100">
              Team
            </Link>
            <Link href="/contact" className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100">
            Contact Us
            </Link>
          </div>
          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-semibold">Products</h3>
            <Link href="/qr-code-generator" className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100">
              QR Generator
            </Link>
            <Link href="/privacy" className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100">
            Privacy Policy
            </Link>
          </div>
          <div className="flex flex-col space-y-4">
           <QrCode className="h-44 w-44 translate-x-44" />
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between space-y-4 sm:flex-row sm:space-y-0">
          <div className="flex space-x-4">
            <Link href="https://facebook.com" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100">
              <span className="sr-only">Facebook</span>
              <Facebook className="h-6 w-6" />
            </Link>
            <Link href="https://twitter.com" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100">
              <span className="sr-only">Twitter</span>
              <X className="h-6 w-6" />
            </Link>
            <Link href="https://instagram.com" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100">
              <span className="sr-only">Instagram</span>
              <Instagram className="h-6 w-6" />
            </Link>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © {currentYear} QR Code Generator. All rights reserved. | <span className="text-yellow-500 font-bold uppercase text-xs">joobadam</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;