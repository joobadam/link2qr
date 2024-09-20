"use client"

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export default function OurStory() {
  const milestones = [
    { year: 2020, title: "The Idea", description: "Our founders recognized the need for an easy-to-use QR code solution." },
    { year: 2021, title: "Launch", description: "We launched our beta version, garnering interest from early adopters." },
    { year: 2022, title: "Rapid Growth", description: "The pandemic accelerated QR code adoption, and our user base grew exponentially." },
    { year: 2023, title: "New Features", description: "We introduced dynamic QR codes and advanced analytics." },
    { year: 2023, title: "Global Expansion", description: "Our platform became available in 20 languages, serving customers worldwide." },
    { year: 2024, title: "AI Integration", description: "We implemented AI to enhance QR code design and user experience." },
  ]

  return (
    <div className="min-h-screen">
      <header className="shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold ">Our Story</h1>
        </div>
      </header>
      
      <main>
        <section className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Revolutionizing <span className="text-yellow-500">QR</span> Code Technology
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              From a simple idea to a global platform, our journey has been driven by innovation and a passion for connecting the physical and digital worlds.
            </p>
          </div>

          <div className="mt-20">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <p className="text-white text-4xl font-bold">Our Journey</p>
              </div>
            </motion.div>
          </div>
          <div className="mt-20">
            <h2 className="text-2xl font-semibold  mb-8">Our Milestones</h2>
            <div className="relative">
              {milestones.map((milestone, index) => (
                <div
                  key={milestone.year}
                  className="mb-8 flex items-center"
                >
                  <div className="flex-shrink-0 w-24 text-right mr-4">
                    <span className="text-lg font-semibold text-yellow-600 dark:text-yellow-400">{milestone.year}</span>
                  </div>
                  <div className="flex-grow pb-8 border-l-2 border-gray-300 dark:border-gray-700 pl-4">
                    <h3 className="text-xl font-semibold">{milestone.title}</h3>
                    <p className="mt-2 ">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          

          <div className="mt-20 text-center">
            <p className="text-xl text-gray-600 dark:text-gray-300">Our story continues, and we're excited for what the future holds.</p>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="mt-8"
            >
              <ChevronDown className="mx-auto h-8 w-8 text-gray-400" />
            </motion.div>
          </div>
        </section>

        <section className="bg-yellow-600">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              <span className="block">Ready to join our story?</span>
              <span className="block text-yellow-200">Start generating QR codes today.</span>
            </h2>
            <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
              <div className="inline-flex rounded-md shadow">
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-yellow-600 bg-white hover:bg-yellow-50"
                >
                  Get started
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}