import React from 'react'
import style from './TeachersItems.module.css'

import { useTranslation } from 'react-i18next';
import { identifier } from '../../../../../core/services/Functions/ThemeIdentifier';
const Paragraph = () => {
  const {t} = useTranslation();

  return (
    <div className={style.paragraph} data-theme={identifier("darkNoBG")}>{t("teacherPageLandingDesc")}</div>
  )
}

export {Paragraph}