import React from 'react'
import style from './../../ItemsHolder.module.css'
import { useGlobalState } from '../../../../../../../State/State';

const Status = (props) => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <div className={style.status} data-theme={darkMode ? "darkNoBG" : "lightMode"}>{props.Status}</div>
  )
}

export {Status}