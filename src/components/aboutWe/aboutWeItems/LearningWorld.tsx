import React from 'react'
import style from './cardsBlogsListStyle.module.css'

import { useTranslation } from 'react-i18next';
import { identifier } from '../../../core/services/Functions/ThemeIdentifier';

const LearningWorld = (props) => {

  const { t } = useTranslation();
  return (
    <div className={style.holderP}>
      <span data-theme={identifier("dark","dark2")}>{t("aboutUsTitle7")}</span>
      <p className={style.courseCounts} data-theme={identifier("darkNoBGDisc","dark2NoBGDisc")}>{t("aboutUsDesc11")}</p>
    </div>
  )
}

export {LearningWorld}