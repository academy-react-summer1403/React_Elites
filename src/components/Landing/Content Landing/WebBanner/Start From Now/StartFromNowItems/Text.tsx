import React from 'react'
import style from './Text.module.css'
import { useGlobalState } from '../../../../../../State/State';

const Text = () => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <div className={style.text}  data-theme={darkMode ? "dark" : "light"}> همین حالا <br /> شروع کن به یادگیری</div>
  )
}

export {Text}