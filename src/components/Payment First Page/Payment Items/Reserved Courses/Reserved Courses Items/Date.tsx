import React from 'react'
import style from './Items.module.css'
import figmaCourse from '../../../../../assets/Images/FigmaCourse.png'
import { dateConvertor } from '../../../../../core/services/Functions/DateMiladi'
import { useGlobalState } from '../../../../../State/State'
import { identifier } from '../../../../../core/services/Functions/ThemeIdentifier'
const Date = ({Date,title}) => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <>
        <h1 className={style.Date} data-theme={identifier("darkNoBG")}>{title}   {dateConvertor(Date)} </h1>
    </>
  )
}

export {Date}