import React from 'react'
import Link from 'next/link'
import {FaGithub,FaChrome} from 'react-icons/fa'
import Image from 'next/image';
function ProjectsContent({ project }) {
    return (
        <>
            <Link href={project.link} target='_blank' className='nav-link'>
                <div className="project-content">
                    <Image src={project.projectImage} alt="" />
                    <h4>{project.projectName}</h4>
                </div>
            </Link>
            <div className="buttons">
                <Link href={project.link} className='nav-link' target='_blank'>
                <button><FaChrome/><span>Live</span></button>
                </Link>
                <Link href={project.git} className='nav-link' target='_blank'>
                <button><FaGithub/><span>GitHub</span></button>
                </Link>
            </div>
        </>
    )
}

export default ProjectsContent;