import React from 'react'
import style from '../style.module.css'
import { useGlobalState } from '../../../../../../State/State';
import { identifier } from '../../../../../../core/services/Functions/ThemeIdentifier';
const Title = (props) => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <div className={style.title} data-theme={identifier("darkNoBG")}> {props.title}</div>
  )
}

export {Title}