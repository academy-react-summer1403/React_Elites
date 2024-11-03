import React from 'react'
import style from './style.module.css'
import { useGlobalState } from '../../../../../State/State';

const Date = ({dateMiladi}) => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <div className={style.date} data-theme={darkMode ? "DateBlog" : "lightMode"}>{dateMiladi}</div>
  )
}

export {Date}