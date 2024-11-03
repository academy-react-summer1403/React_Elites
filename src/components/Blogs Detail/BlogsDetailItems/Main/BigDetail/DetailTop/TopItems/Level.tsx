import React, { useEffect, useState } from 'react'
import style from './style.module.css'
import { useGlobalState } from '../../../../../../../State/State';

const Level = ({date}) => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  
  return (
    <div className={style.Level} data-theme={darkMode ? "dark" : "lightMode"}>
        <div className={style.topL} data-theme={darkMode ? "dark" : "lightMode"}>تاریخ انتشار</div>
        <div className={style.bottomL} data-theme={darkMode ? "dark" : "lightMode"}>{date}</div>
    </div>
  )
}

export {Level}