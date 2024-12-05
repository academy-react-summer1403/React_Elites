import React from 'react'
import style from './style.module.css'
import { useGlobalState } from '../../../../../../../State/State';
import { BeatLoader } from 'react-spinners';
import { identifier } from '../../../../../../../core/services/Functions/ThemeIdentifier';
const DisLikes = ({dislike, isLoading}) => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <div className={style.Teacher} data-theme={identifier("darkNoBG")}>
        <div className={style.topT} data-theme={identifier("dark")}>تعداد دیس‌لایک</div>
        {isLoading ? <BeatLoader /> : <div className={style.bottomT} data-theme={identifier("dark")}>{dislike} نفر</div>}
    </div>
  )
}

export {DisLikes}