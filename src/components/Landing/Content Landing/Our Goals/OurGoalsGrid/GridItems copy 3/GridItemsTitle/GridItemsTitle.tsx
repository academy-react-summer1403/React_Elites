import React from 'react'
import style from './GridItemsTitle.module.css'
import { useGlobalState } from '../../../../../../../State/State';

const GridItemsTitle = () => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <div className={style.title} data-theme={darkMode ? "dark" : "lightMode"}>استعدادیابی</div>
  )
}

export {GridItemsTitle}