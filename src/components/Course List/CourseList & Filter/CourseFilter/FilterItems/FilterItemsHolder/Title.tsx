import React from 'react'
import style from './Holder.module.css'
import { useGlobalState } from '../../../../../../State/State';

const Title = () => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <div className={style.title} data-theme={darkMode ? "darkNoBG" : "lightMode"}>فیلتر</div>
  )
}

export {Title}