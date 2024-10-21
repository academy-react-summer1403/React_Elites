import React from 'react'
import style from './style.module.css'
import { useGlobalState } from '../../../../../State/State';

const View = (props) => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <div className={style.view} data-theme={darkMode ? "darkNoBG" : "lightMode"}>{props.view} </div>
  )
}

export {View}