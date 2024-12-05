import React from 'react'
import style from './../../ItemsHolder.module.css'

import { identifier } from '../../../../../../../core/services/Functions/ThemeIdentifier';
const Level = (props) => {

  return (
    <div className={style.level} data-theme={identifier("darkNoBG")}>{props.level}</div>
  )
}

export {Level}