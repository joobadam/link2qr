import Features from '@/components/Features'
import Hero from '@/components/Hero'
import Pricing from '@/components/Pricing'
import Testimonials from '@/components/Testimonials'

export default function Home() {
  return (
    <main className='min-h-screen mx-auto'>
        <Hero />
        <Features />
        <Pricing />
        <Testimonials />
    </main>
  )
}
