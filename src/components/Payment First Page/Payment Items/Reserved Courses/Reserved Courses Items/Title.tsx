import React from 'react'
import style from './Items.module.css'
import { useGlobalState } from '../../../../../State/State';

const Title = ({title}) => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <div className={style.titleCourse} data-theme={darkMode ? "darkNoBG" : "lightMode"}>{title}</div>
  )
}

export {Title}