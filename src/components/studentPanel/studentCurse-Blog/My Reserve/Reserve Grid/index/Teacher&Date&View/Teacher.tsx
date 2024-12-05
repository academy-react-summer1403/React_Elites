import React from 'react'
import style from './style.module.css'

import { identifier } from '../../../../../../../core/services/Functions/ThemeIdentifier';
const Teacher = (props) => {

  return (
    <div className={style.teacher} data-theme={identifier("darkNoBG","dark2NoBG")}>{props.teacher} </div>
    
  )
}

export {Teacher}