import React from 'react'
import style from './style.module.css'

import { identifier } from '../../../../../../../../../core/services/Functions/ThemeIdentifier';
const Teacher = (props) => {

  return (
    <div className={style.teacher} data-theme={identifier("dark","dark2")}>{props.teacher}</div>
  )
}

export {Teacher}