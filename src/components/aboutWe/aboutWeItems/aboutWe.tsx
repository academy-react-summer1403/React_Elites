import React from 'react'
import style from './cardsBlogsListStyle.module.css'

import { useTranslation } from 'react-i18next';
import { identifier } from '../../../core/services/Functions/ThemeIdentifier';

const AboutWeDesc = (props) => {

  const { t } = useTranslation();
  return (
    <div className={style.holderGap}>
      <p data-theme={identifier("darkNoBGDisc")}>{t("aboutUsDesc1")}</p>
      <p data-theme={identifier("darkNoBGDisc")}>{t("aboutUsDesc2")}</p>
    </div>
  )
}

export {AboutWeDesc}