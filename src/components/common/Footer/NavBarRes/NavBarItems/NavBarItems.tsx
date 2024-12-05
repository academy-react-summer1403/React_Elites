import React from 'react'
import style from './NavBarItems.module.css'

import { identifier } from '../../../../../core/services/Functions/ThemeIdentifier';
const NavBarItems = () => {

  return (
    <>        
        <div className={style.text} data-theme={identifier("darkNoBG","dark2NoBG")}> خدمات ما </div>
        <div className={style.text} data-theme={identifier("darkNoBG","dark2NoBG")}> ارتباط باما </div>
        <div className={style.text} data-theme={identifier("darkNoBG","dark2NoBG")}> درباره ما </div>
        <div className={style.text} data-theme={identifier("darkNoBG","dark2NoBG")}> اساتید </div>
        <div className={style.text} data-theme={identifier("darkNoBG","dark2NoBG")}> بلاگ ها </div>
        <div className={style.text} data-theme={identifier("darkNoBG","dark2NoBG")}> دوره ها </div>
        <div className={style.text} data-theme={identifier("darkNoBG","dark2NoBG")}> خانه </div>
    </>
  )
}

export {NavBarItems}