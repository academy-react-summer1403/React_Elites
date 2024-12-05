import React from 'react'
import style from './Items.module.css'

import { identifier } from '../../../../../core/services/Functions/ThemeIdentifier';
const ReservedTitle = () => {

  return (
    <div className={style.title} data-theme={identifier("darkNoBG")}>دوره های رزرو شده</div>
  )
}

export {ReservedTitle}
