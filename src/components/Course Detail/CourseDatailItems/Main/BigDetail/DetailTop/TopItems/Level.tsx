import React from 'react'
import style from './style.module.css'
import { useGlobalState } from '../../../../../../../State/State';
import { BeatLoader } from 'react-spinners';
import { identifier } from '../../../../../../../core/services/Functions/ThemeIdentifier';
const Level = ({level, isLoading}) => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <div className={style.Level} data-theme={identifier("darkNoBG")}>
        <div className={style.topL} data-theme={identifier("dark")}>سطح آموزشی</div>
        {isLoading ? <BeatLoader /> : <div className={style.bottomL}>{level}</div>}
    </div>
  )
}

export {Level}