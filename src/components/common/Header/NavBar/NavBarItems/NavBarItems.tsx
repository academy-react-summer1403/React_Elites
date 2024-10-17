import React from 'react'
import style from "../../../../../Style/NavBarItems.module.css"
import { NavLink } from 'react-router-dom'

const NavBarItems = () => {
  return (
    <div className={style.container}>
        <NavLink to="" className={style.items}> درباره ما </NavLink>
        <NavLink to="/Blogs-List" className={style.items}> بلاگ ها </NavLink>
        <NavLink to="/Courses-List" className={style.items}> دوره ها</NavLink>
        <NavLink to="/" className={style.items}>  خانه </NavLink>
    </div>
  )
}

export {NavBarItems};