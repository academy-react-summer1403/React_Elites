import React from 'react'
import style from './style.module.css'

import { BeatLoader } from 'react-spinners';
import { identifier } from '../../../../../../../core/services/Functions/ThemeIdentifier';
const Level = ({level, isLoading}) => {

  return (
    <div className={style.Level} data-theme={identifier("darkNoBG","dark2NoBG")}>
        <div className={style.topL} data-theme={identifier("dark","dark2")}>سطح آموزشی</div>
        {isLoading ? <BeatLoader /> : <div className={style.bottomL}>{level}</div>}
    </div>
  )
}

export {Level}