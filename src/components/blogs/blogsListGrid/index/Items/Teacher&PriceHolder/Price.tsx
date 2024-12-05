import React from 'react'
import style from './style.module.css'

import { identifier } from '../../../../../../core/services/Functions/ThemeIdentifier';

const Price = ({price}) => {

  return (
    <div className={style.price} data-theme={identifier("dark","dark2")}>{price}</div>
  )
}

export {Price}