import React from 'react'
import style from './Description.module.css'
import { identifier } from '../../../../core/services/Functions/ThemeIdentifier'

const DescriptionTitle = () => {
  return (
    <div className={style.title} data-theme={identifier('darkNoBG')}> توضیحات دوره </div>
  )
}

export {DescriptionTitle}