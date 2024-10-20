import React from 'react'
import style from './NavBarItems.module.css'
import { NavLink } from 'react-router-dom'

const NavBarItems = () => {
  return (
    <>        
        <NavLink to="/" className={style.text}> خدمات ما  </NavLink>
        <NavLink to="/" className={style.text}> ارتباط باما  </NavLink>
        <NavLink to="/" className={style.text}> درباره ما  </NavLink>
        <NavLink to="/" className={style.text}> اساتید  </NavLink>
        <NavLink to="/Blogs-List" className={style.text}> بلاگ ها  </NavLink>
        <NavLink to="/Courses-List" className={style.text}>  دوره ها </NavLink>
        <NavLink to="/" className={style.text}>  خانه </NavLink>
    </>
  )
}

export {NavBarItems}