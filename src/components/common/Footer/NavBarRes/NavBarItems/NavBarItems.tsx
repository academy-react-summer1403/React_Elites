import React from 'react'
import style from './NavBarItems.module.css'

const NavBarItems = () => {
  return (
    <>        
        <div className={style.text}> خدمات ما </div>
        <div className={style.text}> ارتباط باما </div>
        <div className={style.text}> درباره ما </div>
        <div className={style.text}> اساتید </div>
        <div className={style.text}> بلاگ ها </div>
        <div className={style.text}> دوره ها </div>
        <div className={style.text}> خانه </div>
    </>
  )
}

export {NavBarItems}