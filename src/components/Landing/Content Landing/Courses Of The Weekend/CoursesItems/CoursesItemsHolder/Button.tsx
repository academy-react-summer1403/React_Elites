import React from 'react'
import style from './ItemsHolder.module.css'
import { useGlobalState } from '../../../../../../State/State';

const Button = () => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <div className={style.button} data-theme={darkMode ? "darkSmall" : "lightMode"}>مشاهده بیشتر</div>
  )
}

export {Button}