import React, { useState } from 'react'
import style from "../../../../../Style/NavBarItems.module.css"
import { NavLink } from 'react-router-dom'

import { useTranslation } from 'react-i18next';
import { identifier } from '../../../../../core/services/Functions/ThemeIdentifier';
import { useGlobalState } from '../../../../../State/State';

const NavBarItems = () => {

  const [isLanding, setisLanding] = useGlobalState('isLanding');
  const [isBlog, setisBlog] = useGlobalState('isBlog');
  const [isAboutUs, setisAboutUs] = useGlobalState('isAboutUs');
  const [isCourse, setisCourse] = useGlobalState('isCourse');
  const {t} = useTranslation();
  return (
    <div className={style.container}>
            
        <NavLink to="/about-We" className={isAboutUs ? style.selected : style.items} data-theme={identifier("darkNoBG")}> {t("aboutUs")} </NavLink>
        <NavLink to="/Blogs-List" className={isBlog ? style.selected : style.items} data-theme={identifier("darkNoBG")}> {t("blogs")} </NavLink>
        <NavLink to="/Courses-List" className={isCourse ? style.selected : style.items} data-theme={identifier("darkNoBG")}>{t("courses")} </NavLink>
        <NavLink to="/" className={isLanding ? style.selected : style.items} data-theme={identifier("darkNoBG")}>  {t("home")} </NavLink>    
    </div>
  )
}

export {NavBarItems};