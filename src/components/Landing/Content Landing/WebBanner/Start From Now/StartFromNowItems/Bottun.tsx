import React from 'react'
import style from './Bottun.module.css'
import { useGlobalState } from '../../../../../../State/State';
import { NavLink } from 'react-router-dom';

const Bottun = () => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <NavLink to="/Courses-list" className={style.Button} data-theme={darkMode ? "darkSmall" : "lightMode"}> جدیدترین دوره ها </NavLink>
  )
}

export {Bottun};