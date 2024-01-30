"use client"
import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import { Fira_Sans_Condensed } from 'next/font/google'
const monoFet = Fira_Sans_Condensed({
  subsets: ["latin"],
  display: "swap",
  weight: '400'
})
const TypeEffect = () => {
  return (
    <span className={`${monoFet.className}`} style={{ color: 'red', fontWeight: 'bold', margin: "0 4px", fontSize: "25px" }}>
      {/* Style will be inherited from the parent element */}
      <Typewriter
        words={['React js', 'Next js', 'Tailwind css', 'Node js', "Express js", "MongoDb", "MERN"]}
        loop={2}
        cursor
        cursorStyle='_'
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={1000}
      />
    </span>
  )
}

export default TypeEffect
