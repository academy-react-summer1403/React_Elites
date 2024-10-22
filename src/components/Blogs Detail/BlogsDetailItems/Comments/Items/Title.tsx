import React from 'react'
import style from './style.module.css'
import { useGlobalState } from '../../../../../State/State';

const Title = () => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <div className={style.title} data-theme={darkMode ? "darkNoBG" : "lightMode"}>خوب بود بد نبود</div>
  )
}

export {Title}