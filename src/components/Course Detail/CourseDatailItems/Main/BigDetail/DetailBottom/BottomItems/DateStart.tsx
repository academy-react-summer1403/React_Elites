import React, { useEffect, useState } from 'react'
import style from './style.module.css'
import { useGlobalState } from '../../../../../../../State/State';
import { dateConvertor } from '../../../../../../../core/services/Functions/DateMiladi';
import { BeatLoader } from 'react-spinners';
import { identifier } from '../../../../../../../core/services/Functions/ThemeIdentifier';
const DateStart = ({start, isLoading}) => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  
  return (
    <div className={style.Category} data-theme={identifier("darkNoBG")}>
        <div className={style.topC} data-theme={identifier("dark")}>تاریخ برگزاری</div>
        {isLoading ? <BeatLoader /> : <div className={style.bottomC} data-theme={identifier("dark")}>{dateConvertor(start)}</div>}
    </div>
  )
}

export {DateStart}