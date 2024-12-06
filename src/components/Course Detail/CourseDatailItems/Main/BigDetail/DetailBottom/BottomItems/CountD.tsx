import React from 'react'
import { identifier } from '../../../../../../../core/services/Functions/ThemeIdentifier'
import style from './style.module.css'
import { useTranslation } from 'react-i18next';

const CountD = () => {
  const { t } = useTranslation();
  return (
    <div className={style.topT} data-theme={identifier("dark")}>{t("DisLikeCount")}</div>
  )
}

export {CountD}