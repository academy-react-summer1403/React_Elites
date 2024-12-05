import React from 'react'
import style from './style.module.css'

import { ClipLoader } from 'react-spinners';
import { identifier } from '../../../../../../../core/services/Functions/ThemeIdentifier';
const Comments = ({comments, isLoading}) => {

  return (
    <>
    {isLoading ? <ClipLoader /> :<div className={style.comments} data-theme={identifier("darkNoBG","dark2NoBG")}> نظرات ({comments})  + </div>}
    </>
  )
}

export {Comments}