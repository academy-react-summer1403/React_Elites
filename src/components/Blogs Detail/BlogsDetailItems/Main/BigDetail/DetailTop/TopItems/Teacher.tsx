import React from 'react'
import style from './style.module.css'
import { useGlobalState } from '../../../../../../../State/State';

const Teacher = () => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <div className={style.Teacher} data-theme={darkMode ? "dark" : "lightMode"}>
        <div className={style.topT} data-theme={darkMode ? "dark" : "lightMode"}>منتشر کننده</div>
        <div className={style.bottomT} data-theme={darkMode ? "dark" : "lightMode"}>محمدحسین بحرالعلومی</div>
    </div>
  )
}

export {Teacher}