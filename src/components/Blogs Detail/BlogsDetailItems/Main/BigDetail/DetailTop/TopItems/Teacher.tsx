import React from 'react'
import style from './style.module.css'
import { useGlobalState } from '../../../../../../../State/State';
import { BeatLoader } from 'react-spinners';

const Teacher = ({teacher, isLoading}) => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <div className={style.Teacher} data-theme={darkMode ? "dark" : "lightMode"}>
        <div className={style.topT} data-theme={darkMode ? "dark" : "lightMode"}>منتشر کننده</div>
        {isLoading ? <BeatLoader /> : <div className={style.bottomT} data-theme={darkMode ? "dark" : "lightMode"}>{teacher}</div>}
    </div>
  )
}

export {Teacher}