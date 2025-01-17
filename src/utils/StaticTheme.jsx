import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext';

const StaticTheme = ({az,en}) => {
    const [theme]=useContext(ThemeContext);
    
  return (
    <>
        {theme==="Dark"?"Light":"Dark"}
    </>
  )
}

export default StaticTheme