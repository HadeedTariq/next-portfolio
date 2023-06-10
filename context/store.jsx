'use client'
const { createContext, useState, useContext } = require("react");

const Context = createContext()
export const ContextProvider = ({ children }) => {
    const [color, setColor] = useState({
        backgroundColor: "rgb(8,8,25)",
        color: "white"
    })
    return (
        <Context.Provider value={{ color, setColor }}>
            <div className="app" style={color}>
                {children}
            </div>
        </Context.Provider>
    )
}
export const useProvider = () => useContext(Context)