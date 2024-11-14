import React from 'react'
import style from './Bottom.module.css'
import { useGlobalState } from '../../../../../State/State';
import { useTranslation } from 'react-i18next';

const Bottom = () => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  const {t} = useTranslation();
  return (
    <div className={style.bottom} data-theme={darkMode ? "darkNoBG" : "lightMode"}> {t("headerDescCoursesList1")} <br /> {t("headerDescCoursesList2")}</div>
  )
}

export {Bottom}