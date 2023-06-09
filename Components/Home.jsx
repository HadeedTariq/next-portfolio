import React from 'react'
import '../Css/Home.css'
function Home() {

  return (
     <>
       <div className="home">
        <div className="home-content">
         <div className="title">
           <h1>Hello I am <span className='name'>Hadeed Tariq</span></h1>
           <p>I am a front end developer working in <span className='passion'>Html || Css || JavaScript and React</span></p>
           <p>I specialize turning design concept into functional, responsive websites and web application</p>
           <button className='cv-btn'><a href='MyCv.pdf' download='MyCv.pdf' className='links'>Download Cv</a></button>
         </div>
        </div>
       </div>
     </>
  )
}

export default Home