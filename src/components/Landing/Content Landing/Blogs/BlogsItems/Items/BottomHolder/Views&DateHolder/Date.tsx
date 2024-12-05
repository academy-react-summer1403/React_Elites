import React, { useEffect } from 'react'
import style from './ViewsAndDate.module.css'
import { useGlobalState } from '../../../../../../../../State/State';
import { identifier } from '../../../../../../../../core/services/Functions/ThemeIdentifier';
const Date = ({dateMiladi}) => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  
  return (
    <div className={style.date} data-theme={identifier("DateBlog")}>{dateMiladi}</div>
  )
}

export {Date}