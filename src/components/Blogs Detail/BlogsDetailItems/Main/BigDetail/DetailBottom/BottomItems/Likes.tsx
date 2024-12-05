import React from 'react'
import style from './style.module.css'

import { identifier } from '../../../../../../../core/services/Functions/ThemeIdentifier';
const Likes = ({likes}) => {

  return (
    <div className={style.Status} data-theme={identifier("darkNoBG","dark2NoBG")}>
        <div className={style.topS} data-theme={identifier("dark","dark2")}>تعداد لایک</div>
        <div className={style.bottomS} data-theme={identifier("dark","dark2")}>{likes} نفر</div>
    </div>
  )
}

export {Likes}