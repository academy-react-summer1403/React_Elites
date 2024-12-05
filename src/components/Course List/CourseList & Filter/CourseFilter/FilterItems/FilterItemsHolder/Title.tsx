import React from 'react'
import style from './Holder.module.css'

import { useTranslation } from "react-i18next";
import { identifier } from '../../../../../../core/services/Functions/ThemeIdentifier';
const Title = () => {
  const { t } = useTranslation();

  return (
    <div className={style.title} data-theme={identifier("darkNoBG")}>{t("filter")}</div>
  )
}

export {Title}