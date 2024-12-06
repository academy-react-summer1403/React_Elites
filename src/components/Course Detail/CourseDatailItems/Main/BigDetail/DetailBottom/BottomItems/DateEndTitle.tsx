import React from 'react'
import style from './style.module.css'
import { identifier } from '../../../../../../../core/services/Functions/ThemeIdentifier'
import { useTranslation } from 'react-i18next';

const DateEndTitle = () => {
  const { t } = useTranslation();
  return (
    <div className={style.topL}data-theme={identifier('darkNoBG')} >{t("CompletionDate")}</div>
  )
}

export {DateEndTitle}