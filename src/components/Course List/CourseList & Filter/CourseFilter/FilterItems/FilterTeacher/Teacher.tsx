import React from 'react'
import style from './Teacher.module.css'
import { useGlobalState } from '../../../../../../State/State';

const Teacher = () => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <>
        <div className={style.titleTeacher} data-theme={darkMode ? "darkNoBG" : "lightMode"}> اساتید </div>
        <div className={style.teacher} data-theme={darkMode ? "dark" : "lightMode"}>استاد مورد نظر را انتخاب کنید</div>
    </>
  )
}

export {Teacher}