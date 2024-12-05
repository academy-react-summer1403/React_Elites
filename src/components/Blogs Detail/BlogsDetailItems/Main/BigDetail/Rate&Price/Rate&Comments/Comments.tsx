import React from 'react'
import style from './style.module.css'

import { ClipLoader } from 'react-spinners';
import { identifier } from '../../../../../../../core/services/Functions/ThemeIdentifier';
const Comments = ({comment, isLoading}) => {

  return (
    <>
    {isLoading ? <ClipLoader /> : <div className={style.comments} data-theme={identifier("dark","dark2")}> نظرات ({comment})  + </div>}
    </>
  )
}

export {Comments}