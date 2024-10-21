import React from 'react'
import style from "../../../../../Style/NavBarItems.module.css"
import { NavLink } from 'react-router-dom'
import { useGlobalState } from '../../../../../State/State';

const NavBarItems = () => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <div className={style.container}>
        <NavLink to="" className={style.items} data-theme={darkMode ? "darkNoBG" : "lightMode"}> درباره ما </NavLink>
        <NavLink to="/Blogs-List" className={style.items} data-theme={darkMode ? "darkNoBG" : "lightMode"}> بلاگ ها </NavLink>
        <NavLink to="/Courses-List" className={style.items} data-theme={darkMode ? "darkNoBG" : "lightMode"}> دوره ها</NavLink>
        <NavLink to="/" className={style.items} data-theme={darkMode ? "darkNoBG" : "lightMode"}>  خانه </NavLink>
    </div>
  )
}

export {NavBarItems};