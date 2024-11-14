import React from 'react'
import style from './style.module.css'
import { useGlobalState } from '../../../../../../../State/State';

const Type = (props) => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <div className={style.date} data-theme={darkMode ? "darkNoBG" : "lightMode"}>{props.type}</div>
  )
}

export {Type}