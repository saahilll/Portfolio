import Logo from '@/components/Logo'
import Link from 'next/link'
import React from 'react'



const NavBar = () => {
  return (
    <header 
    className='w-full px-32 py-8 font-large flex item-center justify-between'
    >
        <nav>
            <Link href="/">Home</Link>
            <Link href="about">About</Link>
            <Link href="projects">Projects</Link>
            <Link href="articles">Articles</Link>
        </nav>
        <Logo/>
        <nav>
            <Link href="/" taget={"_blank"}>T</Link>
            <Link href="/" taget={"_blank"}>T</Link>
            <Link href="/" taget={"_blank"}>T</Link>
            <Link href="/" taget={"_blank"}>T</Link>
            <Link href="/" taget={"_blank"}>T</Link>
            <Link href="/" taget={"_blank"}>T</Link>
        </nav>
    </header>
  )
}

export default NavBar