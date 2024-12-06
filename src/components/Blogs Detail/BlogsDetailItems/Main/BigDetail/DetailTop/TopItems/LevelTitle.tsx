import React from 'react'
import style from './style.module.css'
import { identifier } from '../../../../../../../core/services/Functions/ThemeIdentifier'

const LevelTitle = () => {
  return (
    <>
        <div className={style.topL} data-theme={identifier("dark","dark2")}>تاریخ انتشار</div>
    </>
  )
}

export {LevelTitle}