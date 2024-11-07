import React from 'react'
import style from '../../../Style/aboutWe.module.css'
import { useGlobalState } from '../../../State/State';

const AboutUsTitleHeader = (props) => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <h1 className={style.title} data-theme={darkMode ? "darkNoBG" : "lightMode"}>درباره ما!</h1>
  )
}

export {AboutUsTitleHeader}