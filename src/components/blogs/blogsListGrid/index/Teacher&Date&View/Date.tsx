import React from 'react'
import style from './style.module.css'

import { identifier } from '../../../../../core/services/Functions/ThemeIdentifier';

const Date = ({dateMiladi}) => {

  return (
    <div className={style.date} data-theme={identifier("DateBlog","DateBlog2")}>{dateMiladi}</div>
  )
}

export {Date}