import React from 'react'
import style from './Title.module.css'

import { identifier } from '../../../../../../../core/services/Functions/ThemeIdentifier';
const Title = ({title}) => {

  return (
    <div className={style.title} data-theme={identifier("dark","dark2")}>{title}</div>
  )
}

export {Title}