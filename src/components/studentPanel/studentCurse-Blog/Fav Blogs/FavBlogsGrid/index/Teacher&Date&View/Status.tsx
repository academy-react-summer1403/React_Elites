import React from 'react'
import style from './../../ItemsHolder.module.css'

import { identifier } from '../../../../../../../core/services/Functions/ThemeIdentifier';
const Status = (props) => {

  return (
    <div className={style.status} data-theme={identifier("darkNoBG","dark2NoBG")}>{props.Status}</div>
  )
}

export {Status}