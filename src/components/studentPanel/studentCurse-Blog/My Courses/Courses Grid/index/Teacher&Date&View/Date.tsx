import React from 'react'
import style from './style.module.css'
import { useGlobalState } from '../../../../../../../State/State';
import { dateConvertor } from '../../../../../../../core/services/Functions/DateMiladi';
import { identifier } from '../../../../../../../core/services/Functions/ThemeIdentifier';
const Date = (props) => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <div className={style.date} data-theme={identifier("darkNoBG")}>{dateConvertor(props.date)}</div>
  )
}

export {Date}