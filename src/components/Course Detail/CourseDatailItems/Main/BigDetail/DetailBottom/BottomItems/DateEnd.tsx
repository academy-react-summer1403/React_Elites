import React, { useEffect, useState } from 'react'
import style from './style.module.css'

import { dateConvertor } from '../../../../../../../core/services/Functions/DateMiladi';
import { BeatLoader } from 'react-spinners';
import { identifier } from '../../../../../../../core/services/Functions/ThemeIdentifier';
const DateEnd = ({end, isLoading}) => {

  return (
    <div className={style.Level} data-theme={identifier("darkNoBG","dark2NoBG")}>
        <div className={style.topL} data-theme={identifier("dark","dark2")}>تاریخ اتمام</div>
        {isLoading ? <BeatLoader /> : <div className={style.bottomL} data-theme={identifier("dark","dark2")}>{dateConvertor(end)}</div>}
    </div>
  )
}

export {DateEnd}