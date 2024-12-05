import React from 'react'
import style from './SmallText.module.css'

import { useTranslation } from 'react-i18next';
import { identifier } from '../../../../../../core/services/Functions/ThemeIdentifier';
const SmallText = () => {
  const {t} = useTranslation();

  return (
    <div className={style.smallText}  data-theme={identifier("dark")}>{t("TeachLandingBannerSmall")}</div>
  )
}

export {SmallText}