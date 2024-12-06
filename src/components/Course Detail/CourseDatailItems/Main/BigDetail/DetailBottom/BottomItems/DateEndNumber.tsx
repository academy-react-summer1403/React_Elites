import React from 'react'
import { BeatLoader } from 'react-spinners'
import { dateConvertor } from '../../../../../../../core/services/Functions/DateMiladi'
import style from './style.module.css'
import { identifier } from '../../../../../../../core/services/Functions/ThemeIdentifier'

const DateEndNumber = ({end, isLoading}) => {
  return (
    <>
        {isLoading ? <BeatLoader /> : <div className={style.bottomL} data-theme={identifier('darkNoBG')} >{dateConvertor(end)}</div>}
    </>
  )
}

export {DateEndNumber}