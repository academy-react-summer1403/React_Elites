import React from 'react'
import style from './style.module.css'
import { useGlobalState } from '../../../../../../../State/State';

const Level = () => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <div className={style.Level} data-theme={darkMode ? "dark" : "lightMode"}>
        <div className={style.topL} data-theme={darkMode ? "dark" : "lightMode"}>تاریخ انتشار</div>
        <div className={style.bottomL} data-theme={darkMode ? "dark" : "lightMode"}>29 اردیبهشت 1403</div>
    </div>
  )
}

export {Level}