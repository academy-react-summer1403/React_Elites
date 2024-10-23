import React from 'react'
import style from './NavBarItems.module.css'
import { useGlobalState } from '../../../../../State/State';
import { NavLink } from 'react-router-dom'

const NavBarItems = () => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <>        
        <NavLink to="/" className={style.text} data-theme={darkMode ? "darkNoBG" : "lightMode"}> خدمات ما  </NavLink>
        <NavLink to="/" className={style.text} data-theme={darkMode ? "darkNoBG" : "lightMode"}> ارتباط باما  </NavLink>
        <NavLink to="/" className={style.text} data-theme={darkMode ? "darkNoBG" : "lightMode"}> درباره ما  </NavLink>
        <NavLink to="/" className={style.text} data-theme={darkMode ? "darkNoBG" : "lightMode"}> اساتید  </NavLink>
        <NavLink to="/Blogs-List" className={style.text} data-theme={darkMode ? "darkNoBG" : "lightMode"}> بلاگ ها  </NavLink>
        <NavLink to="/Courses-List" className={style.text} data-theme={darkMode ? "darkNoBG" : "lightMode"}>  دوره ها </NavLink>
        <NavLink to="/" className={style.text} data-theme={darkMode ? "darkNoBG" : "lightMode"}>  خانه </NavLink>
    </>
  )
}

export {NavBarItems}