import React from 'react'
import style from './style.module.css'
import { useGlobalState } from '../../../../../State/State';
import { identifier } from '../../../../../core/services/Functions/ThemeIdentifier';
const Content = ({describe}) => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <div className={style.content} data-theme={identifier("darkNoBG")}>{describe}</div>
  )
}

export {Content}