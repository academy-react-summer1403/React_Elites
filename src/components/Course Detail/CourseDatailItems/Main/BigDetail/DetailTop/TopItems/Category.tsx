import React from 'react'
import style from './style.module.css'
import { useGlobalState } from '../../../../../../../State/State';
import { BeatLoader } from 'react-spinners';
import { identifier } from '../../../../../../../core/services/Functions/ThemeIdentifier';
const Category = ({category, isLoading}) => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <div className={style.Category} data-theme={identifier("darkNoBG")}>
        <div className={style.topC} data-theme={identifier("dark")}>دسته بندی</div>
        {isLoading ? <BeatLoader /> : <div className={style.bottomC}>{category ? category : "بدون دسته بندی"}</div>}
    </div>
  )
}

export {Category}