import React from 'react'
import style from './style.module.css'
import { useGlobalState } from '../../../../../State/State';

const Date = (props) => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <div className={style.date} jhj>{props.date}</div>
  )
}

export {Date}