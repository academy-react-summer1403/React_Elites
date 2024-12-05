import React from 'react'
import style from './cardsBlogsListStyle.module.css'

import { useTranslation } from 'react-i18next';
import { identifier } from '../../../core/services/Functions/ThemeIdentifier';

const Teaching = (props) => {

  const { t } = useTranslation();
  return (
    <div className={style.holderP}>
      <span data-theme={identifier("dark")}>{t("aboutUsTitle3")}</span>
      <div className={style.holderGap}>
        <p className={style.courseCounts} data-theme={identifier("darkNoBGDisc")}>{t("aboutUsDesc4")}</p> 
        <p className={style.courseCounts} data-theme={identifier("darkNoBGDisc")}>{t("aboutUsDesc5")}</p> 
      </div>
    </div>  
  )
}

export {Teaching}