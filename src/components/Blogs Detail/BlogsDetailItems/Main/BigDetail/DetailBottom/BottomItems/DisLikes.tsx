import React from 'react'
import style from './style.module.css'
import { useGlobalState } from '../../../../../../../State/State';
import { identifier } from '../../../../../../../core/services/Functions/ThemeIdentifier';
const DisLikes = ({dislikes}) => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <div className={style.Teacher} data-theme={identifier("darkNoBG")}>
        <div className={style.topT} data-theme={identifier("dark")}>تعداد دیس‌لایک</div>
        <div className={style.bottomT} data-theme={identifier("dark")}>{dislikes} نفر</div>
    </div>
  )
}

export {DisLikes}