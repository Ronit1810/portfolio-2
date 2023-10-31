import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div id='about' className=' w-fit h-fit flex justify-center items-center '>
      <div className=' flex flex-col md:flex-row w-full h-full p-8 md:p-10'>
        {/* <div className=' w-full h-full flex justify-center items-center bg-black'>
            {/* <Image src="/profile2.png" alt='Profile Character' width={200} height={220} /> */}
        {/* </div> */}
        <div className=' text-sm md:text-xl w-fit h-fit bg-gray-200 bg-opacity-[0.3] rounded-xl p-5 md:p-10'>
          <span className=' text-2xl md:text-4xl font-bold font-main '>Hello,</span><br/> I am Ronit Patel, from India pursuing my Bachlore of Technology in field of Computer Science & Engineering from JD. College of Engineering and Management (Nagpur) which is affileated from Dr.Babasaheb Ambedkar Technological University, with passion for developing scalable web-application and focused on
full stack development.<br/> <br/>
I started my development journey as hobby in technology, and to understand the foundation of Computer, I choose Computer Science and Engineering and this is where I got introduce to the amazing field of Web-Development. The shift in my career happened when I started self-learning the new developing techniques and tools which make me to learn more about in technologies. <br/><br/>
I am an enthusiastic and motivated team player with great imagination and excellent organizational skills. I enjoy taking on challenging tasks that encourage me to think and create outside the box and contribute to my personal growth. 
          
        </div>
      </div>
    </div>
  )
}

export default About