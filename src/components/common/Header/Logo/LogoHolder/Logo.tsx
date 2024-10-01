import React from 'react'
import style from '../../../../../Style/Logo.module.css'
import { LogoImage } from '../Logo items/LogoImage'
import { LogoText } from '../Logo items/LogoText'

const Logo = () => {
  return (
    <div className={style.container}>
      <LogoText />
      <LogoImage />
    </div>
  )
}

export {Logo};