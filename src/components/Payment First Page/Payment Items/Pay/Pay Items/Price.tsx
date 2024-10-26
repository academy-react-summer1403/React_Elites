import React from 'react'
import style from './Items.module.css'
import { useGlobalState } from '../../../../../State/State';

const Price = () => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <div className={style.price} data-theme={darkMode ? "darkNoBG" : "lightMode"}>قیمت دوره ها</div>
  )
}

export {Price}