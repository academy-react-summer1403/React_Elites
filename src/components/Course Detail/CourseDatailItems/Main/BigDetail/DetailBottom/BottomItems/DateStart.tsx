import React, { useEffect, useState } from 'react'
import style from './style.module.css'

import { dateConvertor } from '../../../../../../../core/services/Functions/DateMiladi';
import { BeatLoader } from 'react-spinners';
import { identifier } from '../../../../../../../core/services/Functions/ThemeIdentifier';
const DateStart = ({start, isLoading}) => {

  
  return (
    <div className={style.Category} data-theme={identifier("darkNoBG","dark2NoBG")}>
        <div className={style.topC} data-theme={identifier("dark","dark2")}>تاریخ برگزاری</div>
        {isLoading ? <BeatLoader /> : <div className={style.bottomC} data-theme={identifier("dark","dark2")}>{dateConvertor(start)}</div>}
    </div>
  )
}

export {DateStart}