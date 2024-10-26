import React from 'react'
import style from './../../ItemsHolder.module.css'
import { useGlobalState } from '../../../../../../../State/State';

const Level = (props) => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <div className={style.level} data-theme={darkMode ? "darkNoBG" : "lightMode"}>{props.level}</div>
  )
}

export {Level}