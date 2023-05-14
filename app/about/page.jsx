import React from 'react'
import '../../Css/About.css'
import Link from 'next/link'
function About() {
  return (
    <>
    <head>
      <title>About Page</title>
    </head>
      <div className="about">
         <h1>About me</h1>
         <p>Hi, I am a front end developer. My passion is to create the look and feel of a website or web app. I use my Html, Css, JavaScript and React skills to make sure that the user interface is easy to navigate and fully responsive. I am passionate about creating user-friendly websites that work on all devices. I have 9 months of experience in front end development. I know I don't have alot of experience but I have ability to improve my skills and upskill my-self. So if You want to hire me contact me on my Linkedin or G-mail.</p>
         <div className="about-btn">
         <Link href={'https://www.linkedin.com/in/hadeed-tariq-16b45925a/'} target='_blank'>
           <button>Linkedin</button>
         </Link>
         <Link href={'https://hadeedtariq49@gmail.com'} target='_blank'>
           <button>Gmail</button>
         </Link>
         </div>
      </div>
    </>
  )
}

export default About