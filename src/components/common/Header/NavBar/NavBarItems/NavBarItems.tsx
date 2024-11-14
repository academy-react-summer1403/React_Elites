import React, { useState } from 'react'
import style from "../../../../../Style/NavBarItems.module.css"
import { NavLink } from 'react-router-dom'
import { useGlobalState } from '../../../../../State/State';
import { useTranslation } from 'react-i18next';


const NavBarItems = () => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  const [isLanding, setisLanding] = useGlobalState('isLanding');
  const [isBlog, setisBlog] = useGlobalState('isBlog');
  const [isAboutUs, setisAboutUs] = useGlobalState('isAboutUs');
  const [isCourse, setisCourse] = useGlobalState('isCourse');
  const {t} = useTranslation();
  return (
    <div className={style.container}>
            
        <NavLink to="/about-We" className={isAboutUs ? style.selected : style.items} data-theme={darkMode ? "darkNoBG" : "lightMode"}> {t("aboutUs")} </NavLink>
        <NavLink to="/Blogs-List" className={isBlog ? style.selected : style.items} data-theme={darkMode ? "darkNoBG" : "lightMode"}> {t("blogs")} </NavLink>
        <NavLink to="/Courses-List" className={isCourse ? style.selected : style.items} data-theme={darkMode ? "darkNoBG" : "lightMode"}>{t("courses")} </NavLink>
        <NavLink to="/" className={isLanding ? style.selected : style.items} data-theme={darkMode ? "darkNoBG" : "lightMode"}>  {t("home")} </NavLink>    
    </div>
  )
}

export {NavBarItems};