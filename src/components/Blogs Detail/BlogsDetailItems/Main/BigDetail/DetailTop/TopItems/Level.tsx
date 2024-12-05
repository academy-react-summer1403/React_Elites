import React, { useEffect, useState } from 'react'
import style from './style.module.css'

import { dateConvertor } from '../../../../../../../core/services/Functions/DateMiladi';
import { BeatLoader } from 'react-spinners';
import { identifier } from '../../../../../../../core/services/Functions/ThemeIdentifier';
const Level = ({date, isLoading}) => {

  
  return (
    <div className={style.Level} data-theme={identifier("dark")}>
        <div className={style.topL} data-theme={identifier("dark")}>تاریخ انتشار</div>
        {isLoading ? <BeatLoader /> : <div className={style.bottomL} data-theme={identifier("dark")}>{dateConvertor(date)}</div>}
    </div>
  )
}

export {Level}