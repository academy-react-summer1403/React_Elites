import React from 'react'
import style from './cardsBlogsListStyle.module.css'

import { useTranslation } from 'react-i18next';
import { identifier } from '../../../core/services/Functions/ThemeIdentifier';

const TargetWe = (props) => {

  const { t } = useTranslation();
  return (
    <div className={style.holderP}>
      <span data-theme={identifier("dark")}>{t("aboutUsTitle2")}</span>
      <p className={style.courseCounts} data-theme={identifier("darkNoBGDisc")}>{t("aboutUsDesc3")}</p>
    </div>
  )
}

export {TargetWe}