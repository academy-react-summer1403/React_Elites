import React from 'react'
import { BeatLoader } from 'react-spinners'
import style from './style.module.css'
import { identifier } from '../../../../../../../core/services/Functions/ThemeIdentifier'

const CountL = ({isLoading, like}) => {
  return (
    <>
        {isLoading ? <BeatLoader /> : <div className={style.bottomS} data-theme={identifier("dark")}>{like} نفر</div>}
    </>
  )
}

export {CountL}