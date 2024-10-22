import React from 'react'
import style from './Title.module.css'
import { useGlobalState } from '../../../../../../State/State';

const Title = () => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <div className={style.title} data-theme={darkMode ? "darkNoBG" : "lightMode"}>دوره جاوااسکریپت</div>
  )
}

export {Title}