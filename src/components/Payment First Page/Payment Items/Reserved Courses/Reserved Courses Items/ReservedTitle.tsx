import React from 'react'
import style from './Items.module.css'
import { useGlobalState } from '../../../../../State/State';

const ReservedTitle = () => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <div className={style.title} data-theme={darkMode ? "darkNoBG" : "lightMode"}>دوره های رزرو شده</div>
  )
}

export {ReservedTitle}