import React, { useEffect } from 'react'
import style from './ViewsAndDate.module.css'

import { identifier } from '../../../../../../../../core/services/Functions/ThemeIdentifier';
const Date = ({dateMiladi}) => {

  
  return (
    <div className={style.date} data-theme={identifier("DateBlog")}>{dateMiladi}</div>
  )
}

export {Date}