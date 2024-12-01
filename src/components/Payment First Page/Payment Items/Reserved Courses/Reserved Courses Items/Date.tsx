import React from 'react'
import style from './Items.module.css'
import figmaCourse from '../../../../../assets/Images/FigmaCourse.png'
import { dateConvertor } from '../../../../../core/services/Functions/DateMiladi'

const Date = ({Date,title}) => {
  return (
    <>
        <h1 className={style.Date}>{title}   {dateConvertor(Date)} </h1>
    </>
  )
}

export {Date}