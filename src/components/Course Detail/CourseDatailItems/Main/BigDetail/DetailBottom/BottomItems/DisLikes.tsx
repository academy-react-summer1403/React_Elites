import React from 'react'
import style from './style.module.css'
import { useGlobalState } from '../../../../../../../State/State';
import { BeatLoader } from 'react-spinners';

const DisLikes = ({dislike, isLoading}) => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <div className={style.Teacher} data-theme={darkMode ? "darkNoBG" : "lightMode"}>
        <div className={style.topT} data-theme={darkMode ? "dark" : "lightMode"}>تعداد دیس‌لایک</div>
        {isLoading ? <BeatLoader /> : <div className={style.bottomT} data-theme={darkMode ? "dark" : "lightMode"}>{dislike} نفر</div>}
    </div>
  )
}

export {DisLikes}