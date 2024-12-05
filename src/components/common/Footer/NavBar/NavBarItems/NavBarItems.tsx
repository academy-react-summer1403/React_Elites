import React from 'react'
import style from './NavBarItems.module.css'

import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import { identifier } from '../../../../../core/services/Functions/ThemeIdentifier';
const NavBarItems = () => {

  const {t} = useTranslation();
  return (
    <>        
        <a href="/#OurService" className={`${style.text} ${style.textHover}`} data-theme={identifier("darkNoBG","dark2NoBG")}> {t("OurServices")}   </a>
        <NavLink to="/" className={`${style.text} ${style.textHover}`} data-theme={identifier("darkNoBG","dark2NoBG")}> {t("contactUs")}  </NavLink>
        <NavLink to="/about-We" className={`${style.text} ${style.textHover}`} data-theme={identifier("darkNoBG","dark2NoBG")}> {t("aboutUs")}   </NavLink>
        <NavLink to="/teacher-page" className={`${style.text} ${style.textHover}`} data-theme={identifier("darkNoBG","dark2NoBG")}> {t("teachers")}</NavLink>
        <NavLink to="/Blogs-List" className={`${style.text} ${style.textHover}`} data-theme={identifier("darkNoBG","dark2NoBG")}> {t("blogs")}  </NavLink>
        <NavLink to="/Courses-List" className={`${style.text} ${style.textHover}`} data-theme={identifier("darkNoBG","dark2NoBG")}>  {t("courses")} </NavLink>
        <NavLink to="/" className={`${style.text} ${style.textHover}`} data-theme={identifier("darkNoBG","dark2NoBG")}> {t("home")} </NavLink>
    </>
  )
}

export {NavBarItems}