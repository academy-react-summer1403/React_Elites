import React from 'react'
import style from './Title.module.css'
import { useGlobalState } from '../../../../../../State/State';
import {  NavLink } from "react-router-dom";

const Title = ({title}) => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <div className={style.titleHolder}>
      <NavLink className={style.CompareButton} to='/Compare-products-select'>مقایسه دوره</NavLink>
      <div className={style.title} data-theme={darkMode ? "darkNoBG" : "lightMode"}>{title}</div>
    </div>
  )
}

export {Title}