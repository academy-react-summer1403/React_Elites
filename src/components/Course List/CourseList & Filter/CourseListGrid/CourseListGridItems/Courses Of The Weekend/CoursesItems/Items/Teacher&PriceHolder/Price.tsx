import React from 'react'
import style from './style.module.css'
import { useGlobalState } from '../../../../../../../../../State/State';

const Price = (props) => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <div className={style.price} data-theme={darkMode ? "dark" : "lightMode"}>{props.price}</div>
  )
}

export {Price}