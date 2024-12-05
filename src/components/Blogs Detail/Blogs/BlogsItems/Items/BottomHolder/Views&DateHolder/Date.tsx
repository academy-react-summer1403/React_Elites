import React from 'react'
import style from './ViewsAndDate.module.css'

import { dateConvertor } from '../../../../../../../core/services/Functions/DateMiladi';
import { identifier } from '../../../../../../../core/services/Functions/ThemeIdentifier';
const Date = (props) => {

  return (
    <div className={style.date} data-theme={identifier("dark","dark2")}>{dateConvertor(props.date)}</div>
  )
}

export {Date}