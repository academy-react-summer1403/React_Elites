import React from 'react'
import { identifier } from '../../../../../../../core/services/Functions/ThemeIdentifier'
import style from './style.module.css'

const PublisherTitle = () => {
  return (
    <div className={style.topT} data-theme={identifier("dark","dark2")}>منتشر کننده</div>
  )
}

export {PublisherTitle}