import React from 'react'
import style from './style.module.css'

import { BeatLoader } from 'react-spinners';
import { identifier } from '../../../../../../../core/services/Functions/ThemeIdentifier';
const Category = ({category, isLoading}) => {

  return (
    <div className={style.Category} data-theme={identifier("darkNoBG")}>
        <div className={style.topC} data-theme={identifier("dark")}>دسته بندی</div>
        {isLoading ? <BeatLoader /> : <div className={style.bottomC}>{category}</div>}
    </div>
  )
}

export {Category}