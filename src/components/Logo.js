import Link from 'next/link'
import React from 'react'
import {motion} from "framer-motion"

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className='flex items-center justify-center mt-2'>
        <MotionLink href="/"
        className='w-16 h-16 bg-dark text-light flex item-center justify-center 
        rounded-full text-2xl font-bold'
        whileHover={{scale:1.5}}
        >VM</MotionLink>
    </div>
  )
}

export default Logo