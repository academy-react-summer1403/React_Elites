import React from 'react'
import style from './style.module.css'

import { useTranslation } from 'react-i18next';
import { identifier } from '../../../../../../../../../core/services/Functions/ThemeIdentifier';
const CurrentRegistrants = (props) => {

  const {t} = useTranslation();
  return (
    <div className={style.NumberRegistrants} data-theme={identifier("darkNoBGDisc","dark2NoBGDisc","greenNoBGDisc","pinkNoBGDisc","blueNoBGDisc","redNoBGDisc")}>{t("NumberRegistrants")}: {props.currentRegistrants}</div>
  )
}

export {CurrentRegistrants}