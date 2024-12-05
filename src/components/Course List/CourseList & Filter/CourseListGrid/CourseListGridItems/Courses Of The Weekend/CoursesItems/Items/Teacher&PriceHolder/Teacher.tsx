import React from 'react'
import style from './style.module.css'
import { useGlobalState } from '../../../../../../../../../State/State';
import { identifier } from '../../../../../../../../../core/services/Functions/ThemeIdentifier';
const Teacher = (props) => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <div className={style.teacher} data-theme={identifier("dark")}>{props.teacher}</div>
  )
}

export {Teacher}