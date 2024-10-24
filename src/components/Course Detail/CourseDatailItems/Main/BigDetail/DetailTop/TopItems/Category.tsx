import React from 'react'
import style from './style.module.css'
import { useGlobalState } from '../../../../../../../State/State';

const Category = ({category}) => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <div className={style.Category} data-theme={darkMode ? "darkNoBG" : "lightMode"}>
        <div className={style.topC} data-theme={darkMode ? "dark" : "lightMode"}>دسته بندی</div>
        <div className={style.bottomC}>{category}</div>
    </div>
  )
}

export {Category}