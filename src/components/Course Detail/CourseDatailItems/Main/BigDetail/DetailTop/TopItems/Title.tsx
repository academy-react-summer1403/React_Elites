import React from 'react'
import style from './style.module.css'
import { identifier } from '../../../../../../../core/services/Functions/ThemeIdentifier'

const Title = () => {
  return (
    <div className={style.topT} data-theme={identifier("dark")}>استاد دوره</div>
  )
}

export {Title}