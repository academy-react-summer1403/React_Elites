import React from 'react'
import style from './InstagramIcon.module.css'
import { useGlobalState } from '../../../../../State/State';

const InstagramIcon = () => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <div className={style.instagram}  data-theme={darkMode ? "instagram" : "lightMode"}></div>
  )
}

export {InstagramIcon}