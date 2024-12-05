import React from 'react'
import style from './NavBarItems.module.css'
import { useGlobalState } from '../../../../../State/State';
import { identifier } from '../../../../../core/services/Functions/ThemeIdentifier';
const NavBarItems = () => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <>        
        <div className={style.text} data-theme={identifier("darkNoBG")}> خدمات ما </div>
        <div className={style.text} data-theme={identifier("darkNoBG")}> ارتباط باما </div>
        <div className={style.text} data-theme={identifier("darkNoBG")}> درباره ما </div>
        <div className={style.text} data-theme={identifier("darkNoBG")}> اساتید </div>
        <div className={style.text} data-theme={identifier("darkNoBG")}> بلاگ ها </div>
        <div className={style.text} data-theme={identifier("darkNoBG")}> دوره ها </div>
        <div className={style.text} data-theme={identifier("darkNoBG")}> خانه </div>
    </>
  )
}

export {NavBarItems}