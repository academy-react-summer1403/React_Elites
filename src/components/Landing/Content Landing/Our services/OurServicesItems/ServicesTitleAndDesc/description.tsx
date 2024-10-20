import React from 'react'
import style from '../style.module.css'
import { useGlobalState } from '../../../../../../State/State';

const Description = (props) => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <div className={style.desc} data-theme={darkMode ? "darkNoBG" : "lightMode"}>{props.desc}</div>
  )
}

export {Description}