'use client'
import React, { useState } from 'react'
import '../../Css/Projects.css'
import { ProjectsContent,ProjectData } from '../../constants'
function Projects() {
  const [project,setProject]=useState(ProjectData)
  const [basic,setBasic]=useState(true)
  const projectSort=()=>{
    setBasic((prev)=>!prev)
    setProject(ProjectData.reverse())
  }
  return (
    <>
    <head>
      <title>Projects Page</title>
    </head>
    <div className="project-changer">
      <button onClick={projectSort}>{basic?"Basic":"Advanced"}</button>
    </div>
    
    <div className="project">
      {
        project?.map((project,index)=>
         <div className="projects-data" key={index}>
           <ProjectsContent project={project}/>
         </div>
        )
      }
    </div>
    </>
  )
}

export default Projects