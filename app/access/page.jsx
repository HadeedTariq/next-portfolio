'use client'

import { useProvider } from "@/context/store"
import { redirect } from "next/navigation"
import { useRef } from "react"

function Access() {
    const pass=useRef()
    const {setPassword}=useProvider()
    const sendRequest=()=>{
        setPassword(pass.current.value)
        setTimeout(() => {
            redirect('/admin')
        }, 1000);
    }
  return (
    <>
     <div className="access">
        <input type="text" ref={pass}/>
        <button onClick={sendRequest}>Send</button>
     </div>
    </>
  )
}

export default Access