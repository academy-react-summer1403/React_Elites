import React, { useState } from 'react'
import style from "../../../../../Style/NavBarItems.module.css"
import { NavLink } from 'react-router-dom'
import { useGlobalState } from '../../../../../State/State';


const NavBarItems = () => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  const [isLanding, setisLanding] = useGlobalState('isLanding');
  const [isBlog, setisBlog] = useGlobalState('isBlog');
  const [isAboutUs, setisAboutUs] = useGlobalState('isAboutUs');
  const [isCourse, setisCourse] = useGlobalState('isCourse');
  return (
    <div className={style.container}>
            
        <NavLink to="/about-We" className={isAboutUs ? style.selected : style.items} data-theme={darkMode ? "darkNoBG" : "lightMode"}> درباره ما </NavLink>
        <NavLink to="/Blogs-List" className={isBlog ? style.selected : style.items} data-theme={darkMode ? "darkNoBG" : "lightMode"}> بلاگ ها </NavLink>
        <NavLink to="/Courses-List" className={isCourse ? style.selected : style.items} data-theme={darkMode ? "darkNoBG" : "lightMode"}> دوره ها</NavLink>
        <NavLink to="/" className={isLanding ? style.selected : style.items} data-theme={darkMode ? "darkNoBG" : "lightMode"}>  خانه </NavLink>    
    </div>
  )
}

export {NavBarItems};