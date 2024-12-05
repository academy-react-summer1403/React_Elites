import React from 'react'
import style from './Publisher.module.css'

import { identifier } from '../../../../../../../../core/services/Functions/ThemeIdentifier';
const Publisher = ({pub}) => {

  return (
    <div className={style.publisher} data-theme={identifier("dark")}>{pub}</div>
  )
}

export {Publisher}