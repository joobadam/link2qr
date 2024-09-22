'use client'

import { Button } from "@/components/ui/button"
import Link from "next/link"
import Ripple from "./magicui/ripple"
import { useEffect } from 'react'
import { useAnimate } from 'framer-motion'

export default function Hero() {
  const [scope, animate] = useAnimate()

  useEffect(() => {
    animate(scope.current, { opacity: 1, y: 0 }, { duration: 0.5 })
  }, [animate, scope])

  return (
    <section className="flex-center container1">
      <div className="container px-4 md:px-6">
        <div 
          ref={scope}
          style={{ opacity: 0, transform: 'translateY(-20px)' }}
          className="flex flex-col items-center space-y-4 text-center"
        >
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Generate unique <span className="text-yellow-500">QR</span> codes in seconds
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Create custom, branded <span className="text-yellow-500">QR</span> codes for business or personal use. Fast, easy, and fully customizable<span className="text-yellow-500">.</span>
            </p>
          </div>
          <div className="w-full max-w-sm space-y-2">
            <Link href="/qr-code-generator">
              <Button type="button">Generate QR</Button>
            </Link>
          </div>
        </div>
      </div>
      <Ripple />
    </section>
  )
}