import React from 'react'
import style from './style.module.css'
import { useGlobalState } from '../../../../../../../State/State';

const Status = () => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <div className={style.Status}>
        <div className={style.topS} data-theme={darkMode ? "dark" : "lightMode"}>بازدیدکنندگان</div>
        <div className={style.bottomS} data-theme={darkMode ? "dark" : "lightMode"}>243 نفر</div>
    </div>
  )
}

export {Status}