import React from 'react'
import style from './Top.module.css'
import { useGlobalState } from '../../../../../State/State';
import { useTranslation } from 'react-i18next';

const Top = () => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  const {t} = useTranslation();
  return (
    <div className={style.top} data-theme={darkMode ? "dark" : "lightMode"}>{t("headerTitleCoursesList")}</div>
  )
}

export {Top}