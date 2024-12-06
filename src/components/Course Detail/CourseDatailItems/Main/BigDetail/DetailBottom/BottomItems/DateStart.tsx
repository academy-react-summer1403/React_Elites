import React, { useEffect, useState } from 'react'
import style from './style.module.css'

import { dateConvertor } from '../../../../../../../core/services/Functions/DateMiladi';
import { BeatLoader } from 'react-spinners';
import { identifier } from '../../../../../../../core/services/Functions/ThemeIdentifier';
const DateStart = ({start, isLoading}) => {

  
  return (
    <div className={style.Category} data-theme={identifier("darkNoBG")}>
        <div className={style.topC}>تاریخ برگزاری</div>
        {isLoading ? <BeatLoader /> : <div className={style.bottomC}>{dateConvertor(start)}</div>}
    </div>
  )
}

export {DateStart}