import React from 'react'
import style from './style.module.css'
import { useGlobalState } from '../../../../../../../State/State';

const Comments = ({comment}) => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <div className={style.comments} data-theme={darkMode ? "dark" : "lightMode"}> نظرات ({comment})  + </div>
  )
}

export {Comments}