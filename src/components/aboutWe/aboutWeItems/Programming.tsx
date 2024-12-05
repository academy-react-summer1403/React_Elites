import React from 'react'
import style from './cardsBlogsListStyle.module.css'
import { useGlobalState } from '../../../State/State';
import { useTranslation } from 'react-i18next';
import { identifier } from '../../../core/services/Functions/ThemeIdentifier';

const Programming = (props) => {

  const { t } = useTranslation();
  return (
    <div className={style.holderP}>
      <span data-theme={identifier("dark")}>{t("aboutUsTitle8")}</span>
      <p className={style.courseCounts} data-theme={identifier("darkNoBGDisc")}>{t("aboutUsDesc12")}</p>
    </div>
  )
}

export {Programming}