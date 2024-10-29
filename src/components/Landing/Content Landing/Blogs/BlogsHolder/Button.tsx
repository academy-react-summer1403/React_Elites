import React from 'react'
import style from '../../Courses Of The Weekend/CoursesItems/CoursesItemsHolder/ItemsHolder.module.css'
import { useGlobalState } from '../../../../../State/State';
import { NavLink } from 'react-router-dom';

const Button = () => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <NavLink to="Blogs-list" className={style.button} data-theme={darkMode ? "darkSmall" : "lightMode"}>مشاهده بیشتر</NavLink>
  )
}

export {Button}