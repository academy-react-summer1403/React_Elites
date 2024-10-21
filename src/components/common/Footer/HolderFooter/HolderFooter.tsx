import React from 'react'
import style from '../../../../Style/HolderFooter.module.css'
import { SocialMedias } from '../SocialMedias/SocialMediasHolder/SocialMedias'
import { Logo } from '../Logo/LogoHolder/Logo'
import { NavBarHolder } from '../NavBar/NavBarHolder/NavBarHolder'
import { NavBarHolderRes } from '../NavBarRes/NavBarHolder/NavBarHolder'
import { useGlobalState } from '../../../../State/State'

const HolderFooter = () => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');

  return (
    <>
    <div className={style.footerFix} data-theme={darkMode ? "dark" : "lightMode"}>
        <div className={style.footerContainer} data-theme={darkMode ? "dark" : "lightMode"}>
            <NavBarHolderRes />
            <SocialMedias />
            <NavBarHolder />
            <Logo />
        </div>
    </div>
    </>
  )
}

export {HolderFooter};