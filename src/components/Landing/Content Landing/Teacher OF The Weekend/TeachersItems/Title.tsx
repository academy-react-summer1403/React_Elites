import React from 'react'
import style from './TeachersItems.module.css'
import { useGlobalState } from '../../../../../State/State';
import { useTranslation } from 'react-i18next';

const Title = () => {
  const {t} = useTranslation();
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <div className={style.title} data-theme={darkMode ? "dark" : "lightMode"}>{t("teacherPageLandingTitle")}</div>
  )
}

export {Title}