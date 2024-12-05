import React from 'react'
import style from './TeachersItems.module.css'
import { useGlobalState } from '../../../../../State/State';
import { useTranslation } from 'react-i18next';
import { identifier } from '../../../../../core/services/Functions/ThemeIdentifier';
const Paragraph = () => {
  const {t} = useTranslation();
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <div className={style.paragraph} data-theme={identifier("darkNoBG")}>{t("teacherPageLandingDesc")}</div>
  )
}

export {Paragraph}