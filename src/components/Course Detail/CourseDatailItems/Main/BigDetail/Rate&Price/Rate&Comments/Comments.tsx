import React from 'react'
import style from './style.module.css'
import { useGlobalState } from '../../../../../../../State/State';

const Comments = ({comments}) => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <div className={style.comments} data-theme={darkMode ? "darkNoBG" : "lightMode"}> نظرات ({comments})  + </div>
  )
}

export {Comments}