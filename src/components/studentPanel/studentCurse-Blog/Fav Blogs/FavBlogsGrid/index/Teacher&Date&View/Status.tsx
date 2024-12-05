import React from 'react'
import style from './../../ItemsHolder.module.css'
import { useGlobalState } from '../../../../../../../State/State';
import { identifier } from '../../../../../../../core/services/Functions/ThemeIdentifier';
const Status = (props) => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <div className={style.status} data-theme={identifier("darkNoBG")}>{props.Status}</div>
  )
}

export {Status}