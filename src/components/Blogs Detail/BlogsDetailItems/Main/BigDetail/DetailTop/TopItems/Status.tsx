import React from 'react'
import style from './style.module.css'
import { useGlobalState } from '../../../../../../../State/State';
import { BeatLoader } from 'react-spinners';

const Status = ({views, isLoading}) => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <div className={style.Status} data-theme={darkMode ? "darkNoBG" : "lightMode"}>
        <div className={style.topS} data-theme={darkMode ? "dark" : "lightMode"}>بازدیدکنندگان</div>
        {isLoading ? <BeatLoader /> : <div className={style.bottomS} data-theme={darkMode ? "dark" : "lightMode"}>{views} نفر</div>}
    </div>
  )
}

export {Status}