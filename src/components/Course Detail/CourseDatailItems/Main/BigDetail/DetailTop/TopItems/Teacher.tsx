import React from 'react'
import style from './style.module.css'
import { useGlobalState } from '../../../../../../../State/State';

const Teacher = ({teacher}) => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <div className={style.Teacher} data-theme={darkMode ? "darkNoBG" : "lightMode"}>
        <div className={style.topT} data-theme={darkMode ? "dark" : "lightMode"}>استاد دوره</div>
        <div className={style.bottomT} data-theme={darkMode ? "dark" : "lightMode"}>{teacher}</div>
    </div>
  )
}

export {Teacher}