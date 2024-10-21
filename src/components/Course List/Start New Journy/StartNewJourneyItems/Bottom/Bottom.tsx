import React from 'react'
import style from './Bottom.module.css'
import { useGlobalState } from '../../../../../State/State';

const Bottom = () => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <div className={style.bottom} data-theme={darkMode ? "darkNoBG" : "lightMode"}>یک شروع قوی برای یادگیری یک مسئله <br /> جدید میتونه تو پیشرفت کمکت کنه</div>
  )
}

export {Bottom}