import React from 'react'
import style from './style.module.css'

import { ClipLoader } from 'react-spinners';
import { identifier } from '../../../../../../../core/services/Functions/ThemeIdentifier';
import { useTranslation } from 'react-i18next';
const Comments = ({comment, isLoading}) => {
  const { t } = useTranslation();
  return (
    <>
    {isLoading ? <ClipLoader /> : <div className={style.comments} data-theme={identifier("dark","dark2","green","pink","blue","red")}> {t("comment")} ({comment})  + </div>}
    </>
  )
}

export {Comments}