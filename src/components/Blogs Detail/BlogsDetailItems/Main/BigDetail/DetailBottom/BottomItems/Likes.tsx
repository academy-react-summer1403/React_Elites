import React from 'react'
import style from './style.module.css'
import { useGlobalState } from '../../../../../../../State/State';

const Likes = ({likes}) => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <div className={style.Status} data-theme={darkMode ? "darkNoBG" : "lightMode"}>
        <div className={style.topS} data-theme={darkMode ? "dark" : "lightMode"}>تعداد لایک</div>
        <div className={style.bottomS} data-theme={darkMode ? "dark" : "lightMode"}>{likes} نفر</div>
    </div>
  )
}

export {Likes}