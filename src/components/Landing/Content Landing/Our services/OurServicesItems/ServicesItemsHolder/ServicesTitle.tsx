import React from 'react'
import style from './ServicesItemsHolder.module.css'
import { useGlobalState } from '../../../../../../State/State';

const ServicesTitle = () => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <div className={style.title} data-theme={darkMode ? "dark" : "lightMode"}>خدماتی که ما در طی دوره ها <br /> به شما ارائه میدیم</div>
  )
}

export {ServicesTitle}