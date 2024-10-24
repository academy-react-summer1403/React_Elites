import React from 'react'
import style from './style.module.css'
import { useGlobalState } from '../../../../../../../State/State';

const DisLikes = ({dislikes}) => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <div className={style.Teacher}>
        <div className={style.topT} data-theme={darkMode ? "dark" : "lightMode"}>تعداد دیس‌لایک</div>
        <div className={style.bottomT} data-theme={darkMode ? "dark" : "lightMode"}>{dislikes} نفر</div>
    </div>
  )
}

export {DisLikes}