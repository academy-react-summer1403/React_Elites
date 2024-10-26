import React, { useEffect, useState } from 'react'
import style from './style.module.css'
import { useGlobalState } from '../../../../../../../State/State';

const DateEnd = ({end}) => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <div className={style.Level} data-theme={darkMode ? "darkNoBG" : "lightMode"}>
        <div className={style.topL} data-theme={darkMode ? "dark" : "lightMode"}>تاریخ اتمام</div>
        <div className={style.bottomL} data-theme={darkMode ? "dark" : "lightMode"}>{end}</div>
    </div>
  )
}

export {DateEnd}