import React from 'react'
import style from './style.module.css'

import { ClipLoader } from 'react-spinners';
import { identifier } from '../../../../../../../core/services/Functions/ThemeIdentifier';
import { useTranslation } from 'react-i18next';
const Comments = ({comments, isLoading}) => {
  const { t } = useTranslation();
  return (
    <>
    {isLoading ? <ClipLoader /> :<div className={style.comments} data-theme={identifier("darkNoBG","dark2NoBG","greenNoBG","pinkNoBG","blueNoBG","redNoBG")}> {t("comment")} ({comments})  + </div>}
    </>
  )
}

export {Comments}