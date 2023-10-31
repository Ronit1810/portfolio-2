import Image from 'next/image'
import React from 'react'
import {FaNodeJs, FaReact, FaBootstrap} from 'react-icons/fa'
import {TbBrandNextjs} from 'react-icons/tb'
import {BiLogoJavascript, BiLogoTailwindCss} from 'react-icons/bi'
import {SiExpress, SiMongodb, SiGraphql} from 'react-icons/si'
import frontend from "../public/frontend.png"
import backend from '../public/backend.png'
import database from '../public/database.png'
import programming from '../public/programming.png'

const Skills = () => {
  return (
    <div id='skills' className=' overflow-hidden'>
      <h1 className=' font-bold text-4xl font-main p-10'>Skills</h1>
      <div className=' flex flex-col gap-5 m-5 md:m-10 md:gap-2 xl:flex-row'>
        <div className=' w-full h-fit xl:h-80 md:m-5 rounded-lg p-5 bg-opacity-[0.4] bg-sky-100'>
          <div className=' flex flex-col gap-2 border-black border-b-[1px] justify-center items-center'>
            <Image src={frontend} alt='Front-end Image' height={50} width={50} />
            <h1 className=' font-bold text-blue-900'>FRONT-END SKILLS</h1>
          </div>
          <div className=' flex flex-col gap-3 items-center justify-center p-2'>
            <span className=' flex text-xl items-center justify-center gap-3'><FaReact/> ReactJS</span>
            <span className=' flex text-xl items-center justify-center gap-3'><TbBrandNextjs/> NextJS</span>
            <span className=' flex text-xl items-center justify-center gap-3'><BiLogoJavascript/> JavaScript</span>
            <span className=' flex text-xl items-center justify-center gap-3'><BiLogoTailwindCss/> TailwindCss</span>
            <span className=' flex text-xl items-center justify-center gap-3'><FaBootstrap/> Bootstrap</span>
            <span className=' flex text-xl items-center justify-center gap-3'></span>
            <span className=' flex text-xl items-center justify-center gap-3'></span>
          </div>
        </div>


        <div className=' w-full h-fit xl:h-80 md:m-5 rounded-lg p-5 bg-opacity-[0.4] bg-sky-100'>
          <div className=' flex flex-col gap-2 border-black border-b-[1px] justify-center items-center'>
            <Image src={backend} alt='Front-end Image' height={50} width={50} />
            <h1 className=' font-bold text-blue-900'>BACK-END SKILLS</h1>
          </div>
          <div className=' flex flex-col gap-3 items-center justify-center p-2'>
            <span className=' flex text-xl items-center justify-center gap-3'><BiLogoJavascript/> JavaScript</span>
            <span className=' flex text-xl items-center justify-center gap-3'><FaNodeJs/> NodeJS</span>
            <span className=' flex text-xl items-center justify-center gap-3'><SiExpress/> ExpressJS</span>
          </div>
        </div>


        <div className=' w-full h-fit md:h-80 md:m-5 rounded-lg p-5 bg-opacity-[0.4] bg-sky-100'>
          <div className=' flex flex-col gap-2 border-black border-b-[1px] justify-center items-center'>
            <Image src={database} alt='Front-end Image' height={50} width={50} />
            <h1 className=' font-bold text-blue-900'>DATABASES</h1>
          </div>
          <div className=' flex flex-col gap-3 items-center justify-center p-2'>
            
            <span className=' flex text-xl items-center justify-center gap-3'><SiMongodb/> MongoDB</span>
            <span className=' flex text-xl items-center justify-center gap-3'><SiGraphql/> Hygraph</span>
          </div>
        </div>


        <div className=' w-full h-fit md:h-80 md:m-5 rounded-lg p-5 bg-opacity-[0.4] bg-sky-100'>
          <div className=' flex flex-col gap-2 border-black border-b-[1px] justify-center items-center'>
            <Image src={programming} alt='Front-end Image' height={50} width={50} />
            <h1 className=' font-bold text-blue-900'>PROGRAMMING LANGUAGES</h1>
          </div>
          <div className=' flex flex-col gap-3 items-center justify-center p-2'>
            
            <span className=' flex text-xl items-center justify-center gap-3'>C</span>
            <span className=' flex text-xl items-center justify-center gap-3'>C++</span>
            <span className=' flex text-xl items-center justify-center gap-3'>JAVA</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills