import React from 'react'
import style from './style.module.css'
import { identifier } from '../../../../../../../core/services/Functions/ThemeIdentifier'

const StatusTitle = () => {
  return (
    <div className={style.topS} data-theme={identifier("dark","dark2")}>بازدیدکنندگان</div>
  )
}

export {StatusTitle}