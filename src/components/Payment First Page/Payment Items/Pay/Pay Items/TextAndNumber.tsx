import React from 'react'
import style from './Items.module.css'
import { useGlobalState } from '../../../../../State/State';

const TextAndNumber = () => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <div>
        <div className={style.allPrice} data-theme={darkMode ? "darkNoBG" : "lightMode"}>3,000,000 تومان</div>
    </div>
  )
}

export {TextAndNumber}