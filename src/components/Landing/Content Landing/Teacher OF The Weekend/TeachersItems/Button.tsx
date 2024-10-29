import React from 'react'
import style from './TeachersItems.module.css'
import { useGlobalState } from '../../../../../State/State';
import { NavLink } from 'react-router-dom';

const Button = () => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <NavLink to="/teacher-page" className={style.button} data-theme={darkMode ? "dark" : "lightMode"}>صفحه اساتید</NavLink>
  )
}

export {Button}