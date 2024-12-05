import React from 'react'
import style from './../../ItemsHolder.module.css'
import { useGlobalState } from '../../../../../../../State/State';
import { identifier } from '../../../../../../../core/services/Functions/ThemeIdentifier';
const Level = (props) => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <div className={style.level} data-theme={identifier("darkNoBG")}>{props.level}</div>
  )
}

export {Level}