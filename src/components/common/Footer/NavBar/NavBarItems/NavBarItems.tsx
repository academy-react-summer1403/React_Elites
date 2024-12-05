import React from 'react'
import style from './NavBarItems.module.css'
import { useGlobalState } from '../../../../../State/State';
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import { identifier } from '../../../../../core/services/Functions/ThemeIdentifier';
const NavBarItems = () => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  const {t} = useTranslation();
  return (
    <>        
        <a href="/#OurService" className={`${style.text} ${style.textHover}`} data-theme={identifier("darkNoBG")}> {t("OurServices")}   </a>
        <NavLink to="/" className={`${style.text} ${style.textHover}`} data-theme={identifier("darkNoBG")}> {t("contactUs")}  </NavLink>
        <NavLink to="/about-We" className={`${style.text} ${style.textHover}`} data-theme={identifier("darkNoBG")}> {t("aboutUs")}   </NavLink>
        <NavLink to="/teacher-page" className={`${style.text} ${style.textHover}`} data-theme={identifier("darkNoBG")}> {t("teachers")}</NavLink>
        <NavLink to="/Blogs-List" className={`${style.text} ${style.textHover}`} data-theme={identifier("darkNoBG")}> {t("blogs")}  </NavLink>
        <NavLink to="/Courses-List" className={`${style.text} ${style.textHover}`} data-theme={identifier("darkNoBG")}>  {t("courses")} </NavLink>
        <NavLink to="/" className={`${style.text} ${style.textHover}`} data-theme={identifier("darkNoBG")}> {t("home")} </NavLink>
    </>
  )
}

export {NavBarItems}