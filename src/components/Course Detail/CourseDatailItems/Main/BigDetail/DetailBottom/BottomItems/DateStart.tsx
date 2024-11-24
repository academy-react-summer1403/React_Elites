import React, { useEffect, useState } from 'react'
import style from './style.module.css'
import { useGlobalState } from '../../../../../../../State/State';
import { dateConvertor } from '../../../../../../../core/services/Functions/DateMiladi';
import { BeatLoader } from 'react-spinners';

const DateStart = ({start, isLoading}) => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  
  return (
    <div className={style.Category} data-theme={darkMode ? "darkNoBG" : "lightMode"}>
        <div className={style.topC} data-theme={darkMode ? "dark" : "lightMode"}>تاریخ برگزاری</div>
        {isLoading ? <BeatLoader /> : <div className={style.bottomC} data-theme={darkMode ? "dark" : "lightMode"}>{dateConvertor(start)}</div>}
    </div>
  )
}

export {DateStart}