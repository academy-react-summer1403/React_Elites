import React, { useEffect, useState } from 'react'
import style from './style.module.css'
import { useGlobalState } from '../../../../../../../State/State';
import { dateConvertor } from '../../../../../../../core/services/Functions/DateMiladi';
import { BeatLoader } from 'react-spinners';
import { identifier } from '../../../../../../../core/services/Functions/ThemeIdentifier';
const DateEnd = ({end, isLoading}) => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <div className={style.Level} data-theme={identifier("darkNoBG")}>
        <div className={style.topL} data-theme={identifier("dark")}>تاریخ اتمام</div>
        {isLoading ? <BeatLoader /> : <div className={style.bottomL} data-theme={identifier("dark")}>{dateConvertor(end)}</div>}
    </div>
  )
}

export {DateEnd}