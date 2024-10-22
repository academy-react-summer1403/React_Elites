import React, { useState } from 'react'
import style from "../../../../../Style/NavBarItems.module.css"
import { NavLink } from 'react-router-dom'
import { useGlobalState } from '../../../../../State/State';

const NavBarItems = () => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  const [isChecked, setIsChecked] = useState(false)
  const [isChecked2, setIsChecked2] = useState(false)
  const [isChecked3, setIsChecked3] = useState(false)
  const [isChecked4, setIsChecked4] = useState(false)
  return (
    <div className={style.container}>
        <NavLink to="" className={isChecked ? style.selected : style.items} data-theme={darkMode ? "darkNoBG" : "lightMode"}
          onClick={() => {
            setIsChecked(true);
            setIsChecked2(false);
            setIsChecked3(false);
            setIsChecked4(false);
          }}
        > درباره ما </NavLink>
        <NavLink to="/Blogs-List" className={isChecked2 ? style.selected : style.items} data-theme={darkMode ? "darkNoBG" : "lightMode"}
        onClick={() => {
          setIsChecked(false);
          setIsChecked2(true);
          setIsChecked3(false);
          setIsChecked4(false);
        }}
        > بلاگ ها </NavLink>
        <NavLink to="/Courses-List" className={isChecked3 ? style.selected : style.items} data-theme={darkMode ? "darkNoBG" : "lightMode"}
                onClick={() => {
                  setIsChecked(false);
                  setIsChecked2(false);
                  setIsChecked3(true);
                  setIsChecked4(false);
                }}> دوره ها</NavLink>
        <NavLink to="/" className={isChecked4 ? style.selected : style.items} data-theme={darkMode ? "darkNoBG" : "lightMode"}
                onClick={() => {
                  setIsChecked(false);
                  setIsChecked2(false);
                  setIsChecked3(false);
                  setIsChecked4(true);
                }}>  خانه </NavLink>
    </div>
  )
}

export {NavBarItems};