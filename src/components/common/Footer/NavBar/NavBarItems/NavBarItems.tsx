import React from 'react'
import style from './NavBarItems.module.css'
import { useGlobalState } from '../../../../../State/State';
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next';

const NavBarItems = () => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  const {t} = useTranslation();
  return (
    <>        
        <a href="/#OurService" className={`${style.text} ${style.textHover}`} data-theme={darkMode ? "darkNoBG" : "lightMode"}> {t("OurServices")}   </a>
        <NavLink to="/" className={`${style.text} ${style.textHover}`} data-theme={darkMode ? "darkNoBG" : "lightMode"}> {t("contactUs")}  </NavLink>
        <NavLink to="/about-We" className={`${style.text} ${style.textHover}`} data-theme={darkMode ? "darkNoBG" : "lightMode"}> {t("aboutUs")}   </NavLink>
        <NavLink to="/teacher-page" className={`${style.text} ${style.textHover}`} data-theme={darkMode ? "darkNoBG" : "lightMode"}> {t("teachers")}</NavLink>
        <NavLink to="/Blogs-List" className={`${style.text} ${style.textHover}`} data-theme={darkMode ? "darkNoBG" : "lightMode"}> {t("blogs")}  </NavLink>
        <NavLink to="/Courses-List" className={`${style.text} ${style.textHover}`} data-theme={darkMode ? "darkNoBG" : "lightMode"}>  {t("courses")} </NavLink>
        <NavLink to="/" className={`${style.text} ${style.textHover}`} data-theme={darkMode ? "darkNoBG" : "lightMode"}> {t("home")} </NavLink>
    </>
  )
}

export {NavBarItems}