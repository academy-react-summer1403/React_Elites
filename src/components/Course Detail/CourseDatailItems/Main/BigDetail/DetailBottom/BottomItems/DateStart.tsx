import React from 'react'
import style from './style.module.css'
import { useGlobalState } from '../../../../../../../State/State';

const DateStart = () => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <div className={style.Category} data-theme={darkMode ? "darkNoBG" : "lightMode"}>
        <div className={style.topC} data-theme={darkMode ? "dark" : "lightMode"}>تاریخ برگزاری</div>
        <div className={style.bottomC} data-theme={darkMode ? "dark" : "lightMode"}>29 اردیبهشت 1403</div>
    </div>
  )
}

export {DateStart}