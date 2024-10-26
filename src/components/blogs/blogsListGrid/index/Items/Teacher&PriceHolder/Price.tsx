import React from 'react'
import style from './style.module.css'
import { useGlobalState } from '../../../../../../State/State';

const Price = ({price}) => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <div className={style.price} data-theme={darkMode ? "dark" : "lightMode"}>{price}</div>
  )
}

export {Price}