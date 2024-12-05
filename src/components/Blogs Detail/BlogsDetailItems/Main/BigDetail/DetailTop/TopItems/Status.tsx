import React from 'react'
import style from './style.module.css'

import { BeatLoader } from 'react-spinners';
import { identifier } from '../../../../../../../core/services/Functions/ThemeIdentifier';
const Status = ({views, isLoading}) => {

  return (
    <div className={style.Status} data-theme={identifier("darkNoBG")}>
        <div className={style.topS} data-theme={identifier("dark")}>بازدیدکنندگان</div>
        {isLoading ? <BeatLoader /> : <div className={style.bottomS} data-theme={identifier("dark")}>{views} نفر</div>}
    </div>
  )
}

export {Status}