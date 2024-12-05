import React from 'react'
import { identifier } from '../../../../../../../core/services/Functions/ThemeIdentifier'
import style from './style.module.css'

const CountD = () => {
  return (
    <div className={style.topT} data-theme={identifier("dark")}>تعداد دیس‌لایک</div>
  )
}

export {CountD}