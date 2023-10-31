'use client'

import { getMainDate } from '@/Services'
import About from '@/components/About'
import Hero from '@/components/Hero1'
import Projects from '@/components/Project'
import Skills from '@/components/Skills'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Home() {

  const[myProject, setMyProject] = useState<any>([])

  useEffect(() => {
    getMyInfo()
  },[])

  const getMyInfo = async () => {
    const result:any = await getMainDate()
    setMyProject(result?.projects)
    
  }


  return (
    <div>
      <Hero />
      <About />
      <Skills />
      <Projects project={myProject} />
    </div>
  )
}
