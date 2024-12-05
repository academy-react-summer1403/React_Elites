import React from 'react'
import style from '../style.module.css'
import { useGlobalState } from '../../../../../../State/State';
import { identifier } from '../../../../../../core/services/Functions/ThemeIdentifier';
const Description = (props) => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <div className={style.desc} data-theme={identifier("darkNoBG")}>{props.desc}</div>
  )
}

export {Description}