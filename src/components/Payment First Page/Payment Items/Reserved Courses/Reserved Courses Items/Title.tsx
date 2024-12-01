import React from 'react'
import style from './Items.module.css'
import { useGlobalState } from '../../../../../State/State';

const Title = ({ title,status }) => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <div className={style.titleAndStatus}>
      <div className={style.titleCourse} data-theme={darkMode ? "darkNoBG" : "lightMode"}>{title}</div>
      <div className={style.status} data-theme={darkMode ? "darkNoBG" : "lightMode"}>{status}</div>
    </div>
  )
}

export { Title }