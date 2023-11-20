import Link from 'next/link'
import React from 'react'
import { AiOutlineFacebook, AiOutlineGithub, AiOutlineInstagram, AiOutlineLinkedin, AiOutlineMail } from 'react-icons/ai'

const Footer = () => {
  return (
    <div className=' relative flex flex-col my-2 mx-2  bg-bottom h-80 rounded-xl justify-center items-center gap-5'>
        <h1 className=' text-white text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-tl from-yellow-500 to-red-500 '>RONIT PATEL</h1>
        <div className=' flex gap-3 text-xl text-gray-500'>
            <Link href='mailto:ronitpatel1810@gmail.com'><AiOutlineMail className=' cursor-pointer hover:text-sky-800' /></Link>
            <Link href='https://github.com/Ronit1810'><AiOutlineGithub className=' cursor-pointer hover:text-sky-800'  /> </Link>
            <Link href='https://www.linkedin.com/in/ronit-patel-a023901a5/'><AiOutlineLinkedin className=' cursor-pointer hover:text-sky-800' /></Link>
            <Link href='https://www.facebook.com/profile.php?id=100011415378902'><AiOutlineFacebook className=' cursor-pointer hover:text-sky-800' /></Link>
            <Link href='https://www.instagram.com/1810_ronitpatel?igshid=OGQ5ZDc2ODk2ZA%3D%3D'><AiOutlineInstagram className=' cursor-pointer hover:text-sky-800' /></Link>
        </div>
        <div className=' flex flex-col justify-center md:flex-row md:w-full md:justify-between md:px-20 xl:px-40 items-center absolute bottom-2'>
            <span className=' text-gray-600'>© 2023 Ronit Patel. All rights reserved.</span>
            <span className=' text-gray-600'>ronitpatel1810@gmail.com</span>

        </div>
    </div>
  )
}

export default Footer
