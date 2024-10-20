import React from 'react'
import style from './BigText.module.css'
import { useGlobalState } from '../../../../../../State/State';

const BigText = () => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <div className={style.bigText} data-theme={darkMode ? "dark" : "lightMode"}>آموزش مدرن <br /> پیشرفت سریع </div>
  )
}

export {BigText}