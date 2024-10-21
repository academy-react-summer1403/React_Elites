import React from 'react'
import style from './style.module.css'
import { useGlobalState } from '../../../../../../../State/State';

const Comments = () => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <div className={style.comments} data-theme={darkMode ? "darkNoBG" : "lightMode"}> نظرات (120)  + </div>
  )
}

export {Comments}