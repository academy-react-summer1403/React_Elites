import React from 'react'
import style from './style.module.css'
import { useGlobalState } from '../../../../../State/State';

const Content = ({describe}) => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <div className={style.content} data-theme={darkMode ? "darkNoBG" : "lightMode"}>{describe}</div>
  )
}

export {Content}