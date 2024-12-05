import React from 'react'
import style from './style.module.css'
import { useGlobalState } from '../../../../../../../State/State';
import { BeatLoader } from 'react-spinners';
import { identifier } from '../../../../../../../core/services/Functions/ThemeIdentifier';
const Likes = ({like, isLoading}) => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <div className={style.Status} data-theme={identifier("darkNoBG")}>
        <div className={style.topS} data-theme={identifier("dark")}>تعداد لایک</div>
        {isLoading ? <BeatLoader /> : <div className={style.bottomS} data-theme={identifier("dark")}>{like} نفر</div>}
    </div>
  )
}

export {Likes}