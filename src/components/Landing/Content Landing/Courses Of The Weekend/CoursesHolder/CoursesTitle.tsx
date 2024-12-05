import React from 'react'
import style from './Courses.module.css'
import { useGlobalState } from '../../../../../State/State';
import { useTranslation } from 'react-i18next';
import { identifier } from '../../../../../core/services/Functions/ThemeIdentifier';
const CoursesTitle = () => {
  const {t} = useTranslation();
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
     <div className={style.holderTitle}>
          <div className={style.title} data-theme={identifier("dark")}>{t("CoursesOfTheWeek")}</div>
     </div>
  )
}

export {CoursesTitle}