import React from 'react'
import style from './ViewsAndDate.module.css'
import { useGlobalState } from '../../../../../../../State/State';
import { dateConvertor } from '../../../../../../../core/services/Functions/DateMiladi';

const Date = (props) => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <div className={style.date} data-theme={darkMode ? "dark" : "lightMode"}>{dateConvertor(props.date)}</div>
  )
}

export {Date}