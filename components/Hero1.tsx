import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {AiOutlineLinkedin, AiOutlineInstagram, AiOutlineGithub, AiOutlineMail, AiOutlineFacebook} from 'react-icons/ai'
import character from '../public/charactar.png'
import bgimage from '../public/bg.png'
 
const Hero = () => {
  return (
    <div className=' flex justify-center items-center w-full min-h-screen'>
        <div className=' flex justify-center items-center overflow-hidden backdrop-blur-[50px] bg-[#ffffff33] absolute top-0 left-0 w-full h-full z-10'>


            {/* below div is for brand section */}
            <div className=' absolute flex justify-between w-full top-3 left-8 xl:top-4 xl:left-10 text-3xl'>
                <h1 className=' text-xl md:text-3xl font-heading'>Rp.</h1>
            </div>


            {/* below div is for main home page */}
            {/* <div className=' flex justify-center items-center w-full h-full'> */}

                


                {/* below div is for black circle behind the image */}
                <div className=' animate-show absolute top-[150px] rounded-full w-72 h-72 md:w-80 md:h-80 bg-gradient-to-bl from-blue-400 bg-black border-[25px] border-gray-500'></div>
                <Image className=' animate-moveDT p-10 md:p-5 absolute top-[0px]' src={character} alt='Charactar' width={310} height={280} />
                <Link className='flex md:hidden absolute top-4 right-2 text-xs font-medium px-3 py-1 border-[1px] border-black rounded-lg hover:bg-sky-900' href='https://drive.google.com/file/d/1wA7cf7xY_81M4ID4ikcdXpmMXpFkCA8b/view?usp=drive_link'>RESUME</Link>
                <div className=' flex gap-3 md:gap-5 absolute bottom-12 md:bottom-20'>
                  <h2 className=' animate-moveLR text-[40px] sm:text-5xl md:text-7xl font-extrabold font-main'>RONIT</h2>
                  <h2 className=' animate-moveRL  text-[40px] sm:text-5xl md:text-7xl font-extrabold font-main'>PATEL</h2>
                </div>


                {/* <span className=' hidden xl:flex md:absolute right-[550px] top-32 text-base font-semibold'>HOME</span>
                <span className=' hidden md:flex md:absolute right-[440px] top-52 text-base font-semibold'>ABOUT</span>
                <span className=' hidden md:flex md:absolute right-[390px] top-80 text-base font-semibold bg-sky-900 rounded-lg px-6 text-white py-2'>RESUME</span>
                <span className=' hidden md:flex md:absolute right-[440px] bottom-72 text-base font-semibold'>SKILLS</span>
                <span className=' hidden md:flex md:absolute right-[530px] bottom-52 text-base font-semibold'>PROJECTS</span> */}
                <div className=' animate-moveLR flex flex-col gap-14 items-center absolute top-32  left-16'>
                  <span className=' hidden hover:bg-sky-900 md:flex text-xs font-semibold cursor-pointer hover:text-white border-b-[1px] w-full items-center justify-center rounded-lg border-solid px-4 py-2 border-blue-900'><Link href='/'>HOME</Link></span>
                  <span className=' hidden md:flex  text-xs font-semibold hover:bg-sky-900 cursor-pointer hover:text-white border-b-[1px] w-full items-center justify-center rounded-lg border-solid px-4 py-2 border-blue-900'><Link href='#about'>ABOUT</Link></span>
                  <span className=' hidden md:flex  text-base font-semibold hover:bg-transparent hover:text-black cursor-pointer hover:border-sky-900 hover:border-[1px] bg-sky-900 rounded-lg px-6 w-full justify-center items-center text-white py-2'><Link href='https://drive.google.com/file/d/1wA7cf7xY_81M4ID4ikcdXpmMXpFkCA8b/view?usp=drive_link'>RESUME</Link></span>
                  <span className=' hidden md:flex  text-xs font-semibold hover:bg-sky-900 cursor-pointer hover:text-white border-b-[1px] w-full items-center justify-center rounded-lg border-solid px-4 py-2 border-blue-900'><Link href='#skills'>SKILLS</Link></span>
                  <span className=' hidden md:flex  text-xs font-semibold hover:bg-sky-900 cursor-pointer hover:text-white border-b-[1px] w-full items-center justify-center rounded-lg border-solid px-4 py-2 border-blue-900'><Link href='#project'>PROJECTS</Link></span>
                </div>


                <div className=' animate-moveDT xl:animate-moveRL flex xl:flex-col gap-8 text-2xl absolute bottom-5 xl:top-40 text-gray-600 xl:right-72'>
                  <Link href='mailto:ronitpatel1810@gmail.com'><AiOutlineMail className=' cursor-pointer hover:text-sky-800' /></Link>
                  <Link href='https://github.com/Ronit1810'><AiOutlineGithub className=' cursor-pointer hover:text-sky-800'  /></Link>
                  <Link href='https://www.linkedin.com/in/ronit-patel-a023901a5/'><AiOutlineLinkedin className=' cursor-pointer hover:text-sky-800' /></Link>
                  <Link href='https://www.facebook.com/profile.php?id=100011415378902'><AiOutlineFacebook className=' cursor-pointer hover:text-sky-800' /></Link>
                  <Link href='https://www.instagram.com/1810_ronitpatel?igshid=OGQ5ZDc2ODk2ZA%3D%3D'><AiOutlineInstagram className=' cursor-pointer hover:text-sky-800' /></Link>
                </div>


        
            {/* </div> */}
            
        </div>
        <Image className=' animate-moveTD' src={bgimage} alt='img' fill sizes='100vw' /> 
        
    </div>
  )
}

export default Hero
