import React from 'react'
import style from './TelegramIcon.module.css'
import { useGlobalState } from '../../../../../State/State';

const TelegramIcon = () => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <div className={style.telegram}  data-theme={darkMode ? "telegram" : "lightMode"}></div>
  )
}

export {TelegramIcon}