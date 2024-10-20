import React from 'react'
import style from './NavBarItems.module.css'
import { useGlobalState } from '../../../../../State/State';

const NavBarItems = () => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <>        
        <div className={style.text} data-theme={darkMode ? "darkNoBG" : "lightMode"}> خدمات ما </div>
        <div className={style.text} data-theme={darkMode ? "darkNoBG" : "lightMode"}> ارتباط باما </div>
        <div className={style.text} data-theme={darkMode ? "darkNoBG" : "lightMode"}> درباره ما </div>
        <div className={style.text} data-theme={darkMode ? "darkNoBG" : "lightMode"}> اساتید </div>
        <div className={style.text} data-theme={darkMode ? "darkNoBG" : "lightMode"}> بلاگ ها </div>
        <div className={style.text} data-theme={darkMode ? "darkNoBG" : "lightMode"}> دوره ها </div>
        <div className={style.text} data-theme={darkMode ? "darkNoBG" : "lightMode"}> خانه </div>
    </>
  )
}

export {NavBarItems}