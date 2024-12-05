import React from 'react'
import style from './style.module.css'
import { identifier } from '../../../../../../../core/services/Functions/ThemeIdentifier'

const TitleD = () => {
  return (
    <div className={style.topS} data-theme={identifier("dark")}>تعداد لایک</div>
  )
}

export {TitleD}