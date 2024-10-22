import React from 'react'
import style from './YoutubeIcon.module.css'
import { useGlobalState } from '../../../../../State/State';

const YoutubeIcon = () => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <div className={style.youtube}  data-theme={darkMode ? "youtube" : "lightMode"}></div>
  )
}

export {YoutubeIcon}