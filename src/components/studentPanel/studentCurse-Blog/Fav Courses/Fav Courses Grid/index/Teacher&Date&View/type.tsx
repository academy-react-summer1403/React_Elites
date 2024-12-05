import React from 'react'
import style from './style.module.css'
import { useGlobalState } from '../../../../../../../State/State';
import { identifier } from '../../../../../../../core/services/Functions/ThemeIdentifier';
const Type = (props) => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <div className={style.date} data-theme={identifier("darkNoBG")}>{props.type}</div>
  )
}

export {Type}