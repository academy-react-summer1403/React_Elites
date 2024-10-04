import React from 'react'
import style from '../../../../Style/HolderFooter.module.css'
import { SocialMedias } from '../SocialMedias/SocialMediasHolder/SocialMedias'
import { Logo } from '../Logo/LogoHolder/Logo'
import { NavBarHolder } from '../NavBar/NavBarHolder/NavBarHolder'

const HolderFooter = () => {
  return (
    <>
        <div className={style.footerContainer}>
            <SocialMedias />
            <NavBarHolder />
            <Logo />
        </div>
    </>
  )
}

export {HolderFooter};