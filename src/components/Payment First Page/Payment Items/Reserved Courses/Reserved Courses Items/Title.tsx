import React from 'react'
import style from './Items.module.css'

import { identifier } from '../../../../../core/services/Functions/ThemeIdentifier';
const Title = ({ title,status }) => {

  return (
    <div className={style.titleAndStatus}>
      <div className={style.titleCourse} data-theme={identifier("darkNoBG","dark2NoBG")}>{title}</div>
      <div className={style.status} data-theme={identifier("darkNoBG","dark2NoBG")}>{status}</div>
    </div>
  )
}

export { Title }