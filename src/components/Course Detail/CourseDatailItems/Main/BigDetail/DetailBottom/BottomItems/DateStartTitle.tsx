import React from 'react'
import style from './style.module.css'
import { identifier } from '../../../../../../../core/services/Functions/ThemeIdentifier'
import { useTranslation } from 'react-i18next';

const DateStartTitle = () => {
  const { t } = useTranslation();
  return (
    <div className={style.topC} data-theme={identifier('darkNoBG')}>{t("HoldingDate")}</div>
  )
}

export {DateStartTitle}