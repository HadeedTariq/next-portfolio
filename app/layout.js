'use client'
import { createContext, useState } from "react"
import './globals.css'
import { Button, NavBar } from "@/Components"
export const Global = createContext()
export default function RootLayout({ children }) {
  const [color, setColor] = useState({
    backgroundColor: "rgb(8,8,25)",
    color: "white"
  })
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="./apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="./favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="./favicon-16x16.png" />
        <link rel="manifest" href="./site.webmanifest" />
      </head>
      <body>
        <Global.Provider value={{ color: color, setColor: setColor }}>
          <div className="app" style={color}>
            <NavBar />
            <Button />
            <div className="home">
              {children}
            </div>
          </div>
        </Global.Provider>
      </body>
      </html>
  )
}