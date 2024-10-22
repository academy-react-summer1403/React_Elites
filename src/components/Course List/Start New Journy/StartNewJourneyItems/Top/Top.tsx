import React from 'react'
import style from './Top.module.css'
import { useGlobalState } from '../../../../../State/State';

const Top = () => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <div className={style.top} data-theme={darkMode ? "dark" : "lightMode"}>شروع ماجراجویی جدید</div>
  )
}

export {Top}