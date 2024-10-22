import React from 'react'
import style from './style.module.css'
import { useGlobalState } from '../../../../../../State/State';

const Teacher = (props) => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <div className={style.teacher} data-theme={darkMode ? "dark" : "lightMode"}>{props.teacher}</div>
  )
}

export {Teacher}