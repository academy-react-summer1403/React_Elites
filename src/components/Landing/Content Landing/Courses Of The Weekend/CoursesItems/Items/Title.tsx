import React from 'react'
import style from './style.module.css'

import Skeleton from 'react-loading-skeleton';
import { identifier } from '../../../../../../core/services/Functions/ThemeIdentifier';
const Title = ({title}) => {

  return (
    <div className={style.title} data-theme={identifier("darkNoBG","dark2NoBG")}>{title}</div>
  )
}

export {Title}