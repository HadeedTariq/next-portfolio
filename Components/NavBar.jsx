'use client'
import React from 'react'
import {BsLinkedin,BsGithub} from 'react-icons/bs'
import {FaHome} from 'react-icons/fa'
import {FcAbout} from 'react-icons/fc'
import {GrProjects} from 'react-icons/gr'
import '../Css/NavBar.css'
import Link from 'next/link'
function NavBar() {
  return (
    <div className="nav">
        <div className="nav-bar">
            <Link href={'/'} className='nav-icons'><FaHome size={30}  title='Home'/></Link>
            <Link href={'/about'} className='nav-icons'><FcAbout size={30}  title='About'/></Link>
            <Link href={'/projects'} className='nav-icons'><GrProjects size={30}  title='Projects'/></Link>
            <Link className='nav-icons' href={'https://github.com/HadeedTariq'}target='_blank'><BsGithub  title='Github' size={30}/></Link>
            <Link href={'https://www.linkedin.com/in/hadeed-tariq-16b45925a/'} className='nav-icons' target={'_blank'}><BsLinkedin  title='Linkedin' size={30}/></Link>
        </div>
    </div>
  )
}

export default NavBar