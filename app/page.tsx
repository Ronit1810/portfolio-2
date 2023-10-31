import About from '@/components/About'
import Hero from '@/components/Hero1'
import Skills from '@/components/Skills'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Skills />
    </div>
  )
}
