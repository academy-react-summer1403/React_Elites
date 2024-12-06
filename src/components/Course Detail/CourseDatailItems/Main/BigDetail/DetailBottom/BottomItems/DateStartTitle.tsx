import React from 'react'
import style from './style.module.css'
import { identifier } from '../../../../../../../core/services/Functions/ThemeIdentifier'

const DateStartTitle = () => {
  return (
    <div className={style.topC} data-theme={identifier('darkNoBG')}>تاریخ برگزاری</div>
  )
}

export {DateStartTitle}