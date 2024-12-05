import React from 'react'
import style from './Publisher.module.css'

import { identifier } from '../../../../../../../core/services/Functions/ThemeIdentifier';

const Publisher = (props) => {

  return (
    <div className={style.publisher} data-theme={identifier("dark","dark2")}>{props.pub}</div>
  )
}

export {Publisher}