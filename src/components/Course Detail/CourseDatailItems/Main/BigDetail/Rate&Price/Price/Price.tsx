import React from 'react'
import style from './Price.module.css'
import { useGlobalState } from '../../../../../../../State/State';

const Price = () => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <div className={style.price}>

        <div className={style.toman} data-theme={darkMode ? "darkNoBG" : "lightMode"}>تومان</div>
        <div className={style.number} data-theme={darkMode ? "darkNoBG" : "lightMode"}>2،500،000</div>

    </div>
  )
}

export {Price}