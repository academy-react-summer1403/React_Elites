import React from 'react'
import style from './style.module.css'
import { useGlobalState } from '../../../../../../../State/State';

const Price = ({price}) => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <div className={style.holderP}>
      <div className={style.tooman} data-theme={darkMode ? "darkNoBG" : "lightMode"}> تومان </div>
      <div className={style.price} data-theme={darkMode ? "dark" : "lightMode"}> {price}</div>
    </div>
  )
}

export {Price}