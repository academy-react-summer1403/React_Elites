import React from 'react'
import style from './Level.module.css'
import { useGlobalState } from '../../../../../../State/State';

const Level = () => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <>
        <div className={style.titleLevel} data-theme={darkMode ? "darkNoBG" : "lightMode"}> سطح آموزشی </div>
        <div className={style.level} data-theme={darkMode ? "dark" : "lightMode"}>سطح مورد نظر را انتخاب کنید</div>
    </>
  )
}

export {Level}