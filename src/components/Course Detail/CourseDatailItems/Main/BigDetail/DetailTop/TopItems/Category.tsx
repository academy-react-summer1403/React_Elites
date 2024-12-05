import React from 'react'
import style from './style.module.css'

import { BeatLoader } from 'react-spinners';
import { identifier } from '../../../../../../../core/services/Functions/ThemeIdentifier';
const Category = ({category, isLoading}) => {

  return (
    <div className={style.Category} data-theme={identifier("darkNoBG","dark2NoBG")}>
        <div className={style.topC} data-theme={identifier("dark","dark2")}>دسته بندی</div>
        {isLoading ? <BeatLoader /> : <div className={style.bottomC}>{category ? category : "بدون دسته بندی"}</div>}
    </div>
  )
}

export {Category}