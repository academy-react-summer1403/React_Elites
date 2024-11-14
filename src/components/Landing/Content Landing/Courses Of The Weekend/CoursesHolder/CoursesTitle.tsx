import React from 'react'
import style from './Courses.module.css'
import { useGlobalState } from '../../../../../State/State';
import { useTranslation } from 'react-i18next';

const CoursesTitle = () => {
  const {t} = useTranslation();
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
     <div className={style.holderTitle}>
          <div className={style.title} data-theme={darkMode ? "dark" : "lightMode"}>{t("CoursesOfTheWeek")}</div>
     </div>
  )
}

export {CoursesTitle}