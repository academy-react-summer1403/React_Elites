import React from 'react'
import style from './ViewsAndDate.module.css'
import { useGlobalState } from '../../../../../../../State/State';

const Date = (props) => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <div className={style.date} data-theme={darkMode ? "dark" : "lightMode"}>{props.date}</div>
  )
}

export {Date}