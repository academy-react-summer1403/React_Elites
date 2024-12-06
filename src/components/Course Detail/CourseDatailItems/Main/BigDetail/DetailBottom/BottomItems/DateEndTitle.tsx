import React from 'react'
import style from './style.module.css'
import { identifier } from '../../../../../../../core/services/Functions/ThemeIdentifier'

const DateEndTitle = () => {
  return (
    <div className={style.topL}data-theme={identifier('darkNoBG')} >تاریخ اتمام</div>
  )
}

export {DateEndTitle}