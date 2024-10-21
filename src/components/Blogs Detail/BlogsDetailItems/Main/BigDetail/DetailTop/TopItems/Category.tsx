import React from 'react'
import style from './style.module.css'
import { useGlobalState } from '../../../../../../../State/State';

const Category = () => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <div className={style.Category} data-theme={darkMode ? "darkNoBG" : "lightMode"}>
        <div className={style.topC} data-theme={darkMode ? "dark" : "lightMode"}>دسته بندی</div>
        <div className={style.bottomC}>برنامه نویسی</div>
    </div>
  )
}

export {Category}