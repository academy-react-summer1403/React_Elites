import React from 'react'
import style from './style.module.css'
import { useGlobalState } from '../../../../../../../../State/State';
import { identifier } from '../../../../../../../../core/services/Functions/ThemeIdentifier';
const Price = ({price}) => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <div className={style.price} data-theme={identifier("dark")}>{price}</div>
  )
}

export {Price}