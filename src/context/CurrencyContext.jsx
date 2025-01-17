import { createContext, useEffect, useState } from "react";

export const CurrencyContext = createContext()

export const CurrencyProvider = ({children})=>{
    const [currency,setcurrency] = useState(localStorage.getItem('currency'));
    useEffect(()=>{
        localStorage.setItem('currency','USD');
    },[])
    
    return <CurrencyContext.Provider value={[currency,setcurrency]}>{children}</CurrencyContext.Provider>
}