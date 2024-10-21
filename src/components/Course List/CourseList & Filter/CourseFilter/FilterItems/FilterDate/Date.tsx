import React from 'react'
import style from './Date.module.css'
import { useGlobalState } from '../../../../../../State/State';

const Date = () => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <>
        <label htmlFor='date' className={style.titleDate} data-theme={darkMode ? "darkNoBG" : "lightMode"}> تاریخ برگزاری - اتمام </label>
        <input name='date' type='date' className={style.date} placeholder='تاریخ مورد نظر را انتخاب کنید' data-theme={darkMode ? "dark" : "lightMode"}/>
    </>
  )
}

export {Date}