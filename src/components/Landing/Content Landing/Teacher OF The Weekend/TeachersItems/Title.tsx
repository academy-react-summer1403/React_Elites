import React from 'react'
import style from './TeachersItems.module.css'
import { useGlobalState } from '../../../../../State/State';

const Title = () => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <div className={style.title} data-theme={darkMode ? "dark" : "lightMode"}>اساتید برتر هفته آکادمی</div>
  )
}

export {Title}