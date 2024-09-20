'use client'

import { useState } from 'react'
import Link from "next/link"
import { QrCode, Menu, X } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <header className="">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          <Link className="flex items-center justify-center" href="/">
            <QrCode className="h-6 w-6" />
            <span className="sr-only">QR Code Generator</span>
          </Link>
          <nav className="hidden md:flex items-center gap-4 sm:gap-6">
            <NavLink href="/#features">Features</NavLink>
            <NavLink href="/#pricing">Pricing</NavLink>
            <NavLink href="/#testimonials">Testimonials</NavLink>
            <ThemeToggle />
            <SignedOut>
            <div className="bg-primary text-primary-foreground p-2 rounded-xl">
            <SignInButton />
          </div>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
          </nav>
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-secondary hover:text-white hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <MobileNavLink href="/#features">Features</MobileNavLink>
            <MobileNavLink href="/#pricing">Pricing</MobileNavLink>
            <MobileNavLink href="/#testimonials">Testimonials</MobileNavLink>   
            <SignedOut>
            <div className="bg-primary text-primary-foreground p-2 rounded-xl text-center">
            <SignInButton />
          </div>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
          </div>
        </div>
      )}
    </header>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link 
      className="text-sm font-medium text-gray-700 hover:text-gray-900 hover:underline underline-offset-4 dark:text-gray-300 dark:hover:text-white" 
      href={href}
    >
      {children}
    </Link>
  )
}

function MobileNavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 block px-3 py-2 rounded-md dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-700"
    >
      {children}
    </Link>
  )
}