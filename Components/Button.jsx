'use client'
import React,{useContext, useState} from 'react'
import '../Css/Home.css'
import { Global } from '@/app/layout'
function Button() {
  let {color,setColor}=useContext(Global)
  let [position,setPosition]=useState({
    left:"55%"
  })
  let handleMode=()=>{
     if(color.backgroundColor==='rgb(8,8,25)'){
      setPosition({
        left:"5%"
      })
      setColor({
        backgroundColor: "white",
        color:"black"
      })
      
    }
      else{
        setColor({
          backgroundColor:"rgb(8,8,25)",
          color:"white"
        })
        setPosition({
          left:"55%"
        })
      }
      localStorage.setItem('color',JSON.stringify(color.backgroundColor))
      localStorage.setItem('position',JSON.stringify(position.left))
  }
  return (
    <>
      <div className="color-btn">
          <button onClick={handleMode}>
            <div className="color" style={position} title={position.left==='5%'?"Dark Mode":"Light Mode"}></div>
          </button>
        </div>
    </>
  )
}

export default Button