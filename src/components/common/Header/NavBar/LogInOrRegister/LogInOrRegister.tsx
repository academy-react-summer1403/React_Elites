import React from 'react'
import style from '../../../../../Style/LogInOrRegister.module.css'
import { NavLink } from 'react-router-dom';
import { useGlobalState } from '../../../../../State/State';

const LogInOrRegister = () => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <NavLink to="/Login" className={style.container} data-theme={darkMode ? "darkNoBG" : "lightMode"}>ثبت نام یا ورود</NavLink>
  )
}

export { LogInOrRegister };