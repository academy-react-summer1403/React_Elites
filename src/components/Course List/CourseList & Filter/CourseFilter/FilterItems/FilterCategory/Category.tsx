import React from 'react'
import style from './Category.module.css'
import { useGlobalState } from '../../../../../../State/State';

const Category = () => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <>
        <div className={style.titleCat} data-theme={darkMode ? "darkNoBG" : "lightMode"}> دسته بندی </div>
        <div className={style.cat} data-theme={darkMode ? "dark" : "lightMode"}>دسته مورد نظر را انتخاب کنید</div>
    </>
  )
}

export {Category}