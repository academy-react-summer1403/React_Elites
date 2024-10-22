import React from 'react'
import style from './Twitter.module.css'
import { useGlobalState } from '../../../../../State/State';

const Twitter = () => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <div className={style.twitter}  data-theme={darkMode ? "twitter" : "lightMode"}></div>
  )
}

export {Twitter}