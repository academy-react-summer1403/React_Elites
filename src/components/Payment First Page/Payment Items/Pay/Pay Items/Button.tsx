import React from 'react'
import style from './Items.module.css'
import { NavLink } from 'react-router-dom'
import { useGlobalState } from '../../../../../State/State';

const Button = () => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <NavLink to="/Payment-Gateway" className={style.pay} data-theme={darkMode ? "dark" : "lightMode"}> پرداخت </NavLink>
  )
}

export {Button}