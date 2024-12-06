import React, { useEffect, useState } from 'react'
import style from './style.module.css'

import { dateConvertor } from '../../../../../../../core/services/Functions/DateMiladi';
import { BeatLoader } from 'react-spinners';
import { identifier } from '../../../../../../../core/services/Functions/ThemeIdentifier';
const DateEnd = ({end, isLoading}) => {

  return (
    <div className={style.Level} data-theme={identifier("darkNoBG")}>
        <div className={style.topL} >تاریخ اتمام</div>
        {isLoading ? <BeatLoader /> : <div className={style.bottomL} >{dateConvertor(end)}</div>}
    </div>
  )
}

export {DateEnd}