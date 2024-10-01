import React from 'react'
import style from "../../../../../Style/NavBarItems.module.css"

const NavBarItems = () => {
  return (
    <div className={style.container}>
        <div className={style.items}> درباره ما </div>
        <div className={style.items}> بلاگ ها </div>
        <div className={style.items}> دوره </div>
        <div className={style.items}>  خانه </div>
    </div>
  )
}

export {NavBarItems};