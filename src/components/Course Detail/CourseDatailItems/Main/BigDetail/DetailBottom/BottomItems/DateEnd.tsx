import React, { useEffect, useState } from 'react'
import style from './style.module.css'
import { useGlobalState } from '../../../../../../../State/State';
import { dateConvertor } from '../../../../../../../core/services/Functions/DateMiladi';
import { BeatLoader } from 'react-spinners';

const DateEnd = ({end, isLoading}) => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <div className={style.Level} data-theme={darkMode ? "darkNoBG" : "lightMode"}>
        <div className={style.topL} data-theme={darkMode ? "dark" : "lightMode"}>تاریخ اتمام</div>
        {isLoading ? <BeatLoader /> : <div className={style.bottomL} data-theme={darkMode ? "dark" : "lightMode"}>{dateConvertor(end)}</div>}
    </div>
  )
}

export {DateEnd}