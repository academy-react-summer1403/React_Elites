import React from 'react'
import style from './style.module.css'
import { useGlobalState } from '../../../../../../../State/State';

const Level = ({level}) => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <div className={style.Level} data-theme={darkMode ? "darkNoBG" : "lightMode"}>
        <div className={style.topL} data-theme={darkMode ? "dark" : "lightMode"}>سطح آموزشی</div>
        <div className={style.bottomL}>{level}</div>
    </div>
  )
}

export {Level}