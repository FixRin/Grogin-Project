import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext()

export const ThemeProvider = ({children})=>{
    const [theme,settheme] = useState(localStorage.getItem('theme'));
    useEffect(()=>{
        localStorage.setItem('theme','dark');
    },[])
    
    return <ThemeContext.Provider value={[theme,settheme]}>{children}</ThemeContext.Provider>
}