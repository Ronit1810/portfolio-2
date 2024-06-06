import Image from 'next/image'
import React from 'react'
import {AiOutlineGithub} from "react-icons/ai"
import { FiExternalLink } from "react-icons/fi";
import {useState} from 'react'
import Link from 'next/link'

const SingleProject = (props:any) => {

  const[unitProject, setUnitProject] = useState(props.singleProject)
  const deplyedData = unitProject.deployed;
  return (
    <div className=' rounded-lg flex flex-col-reverse md:flex-row'>
        <div className=' p-10 w-full h-96 '>
            <h1 className=' mb-3 md:mb-5 text-xl md:text-4xl font-semibold md:font-bold'>{unitProject.name}</h1>
            <p className=' mb-3 md:mb-5 text-gray-500'>{unitProject.about}</p>
            <div className=' flex gap-4'>
              <Link className=' mb-4 flex justify-center items-center w-fit px-4 py-3 gap-2 hover:text-sky-900 bg-gray-200 rounded-lg text-lg font-medium' href={unitProject.link}>Visit <AiOutlineGithub /> </Link>
              {deplyedData?<Link className=' mb-4 flex justify-center items-center w-fit px-4 py-3 gap-2 hover:text-sky-900 bg-gray-200 rounded-lg text-base md:text-lg font-medium' href={deplyedData}>Deployed Link <FiExternalLink /></Link>:null}
            </div>
            {/* <button className=' flex justify-center items-center gap-2 text-lg font-medium hover:text-sky-900 py-2 px-4 bg-gray-200 rounded-lg border-[1px]'>Visit <AiOutlineGithub /> </button> */}
        </div>
        <div className=' p-10 relative  w-full h-60 md:h-96 '>
            <Image className=' h-auto w-auto' src={unitProject.image?.url} alt='image' height={500} width={550} /> 
        </div>
    </div>
  )
}

export default SingleProject
