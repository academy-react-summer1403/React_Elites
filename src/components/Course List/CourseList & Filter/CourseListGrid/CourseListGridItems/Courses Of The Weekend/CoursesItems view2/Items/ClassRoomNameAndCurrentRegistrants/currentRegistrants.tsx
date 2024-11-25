import React from 'react'
import style from './style.module.css'
import { useGlobalState } from '../../../../../../../../../State/State';

const CurrentRegistrants = (props) => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <div className={style.like} data-theme={darkMode ? "dark" : "lightMode"}>تعداد ثبت نام کنندگان: {props.currentRegistrants}</div>
  )
}

export {CurrentRegistrants}