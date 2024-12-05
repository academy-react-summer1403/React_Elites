import React from 'react'
import style from './style.module.css'

import { identifier } from '../../../../../../../core/services/Functions/ThemeIdentifier';
const Likes = ({likes}) => {

  return (
    <div className={style.Status} data-theme={identifier("darkNoBG")}>
        <div className={style.topS} data-theme={identifier("dark")}>تعداد لایک</div>
        <div className={style.bottomS} data-theme={identifier("dark")}>{likes} نفر</div>
    </div>
  )
}

export {Likes}