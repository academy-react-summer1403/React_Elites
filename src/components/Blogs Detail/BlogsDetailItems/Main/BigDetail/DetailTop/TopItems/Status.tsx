import React from 'react'
import style from './style.module.css'

import { BeatLoader } from 'react-spinners';
import { identifier } from '../../../../../../../core/services/Functions/ThemeIdentifier';
const Status = ({views, isLoading}) => {

  return (
    <div className={style.Status} data-theme={identifier("darkNoBG","dark2NoBG")}>
        <div className={style.topS} data-theme={identifier("dark","dark2")}>بازدیدکنندگان</div>
        {isLoading ? <BeatLoader /> : <div className={style.bottomS} data-theme={identifier("dark","dark2")}>{views} نفر</div>}
    </div>
  )
}

export {Status}