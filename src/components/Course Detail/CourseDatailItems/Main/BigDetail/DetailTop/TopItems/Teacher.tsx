import React from 'react'
import style from './style.module.css'

import { BeatLoader } from 'react-spinners';
import { identifier } from '../../../../../../../core/services/Functions/ThemeIdentifier';
const Teacher = ({teacher, isLoading}) => {

  return (
    <div className={style.Teacher} data-theme={identifier("darkNoBG")}>
        <div className={style.topT} data-theme={identifier("dark")}>استاد دوره</div>
        {isLoading ? <BeatLoader /> : <div className={style.bottomT} data-theme={identifier("dark")}>{teacher}</div>}
    </div>
  )
}

export {Teacher}