import { ContextProvider } from '@/context/store'
import './globals.css'
import { Button, NavBar } from "@/Components"
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="./apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="./favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="./favicon-16x16.png" />
        <link rel="manifest" href="./site.webmanifest" />
      </head>
      <body>
        <ContextProvider>
            <NavBar />
            <Button />
            <div className="home">
              {children}
            </div>
        </ContextProvider>
      </body>
    </html>
  )
}