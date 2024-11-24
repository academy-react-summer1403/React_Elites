import React from 'react'
import style from './style.module.css'
import { useGlobalState } from '../../../../../../../State/State';
import { BeatLoader } from 'react-spinners';

const Level = ({level, isLoading}) => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <div className={style.Level} data-theme={darkMode ? "darkNoBG" : "lightMode"}>
        <div className={style.topL} data-theme={darkMode ? "dark" : "lightMode"}>سطح آموزشی</div>
        {isLoading ? <BeatLoader /> : <div className={style.bottomL}>{level}</div>}
    </div>
  )
}

export {Level}