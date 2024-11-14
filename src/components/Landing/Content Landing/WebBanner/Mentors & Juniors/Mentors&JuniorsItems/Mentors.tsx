import React from 'react'
import style from './Mentors.module.css'
import { useGlobalState } from '../../../../../../State/State';
import { useTranslation } from 'react-i18next';

const Mentors = (props) => {
  const {t} = useTranslation();
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <div className={style.container}>
      <div className={style.mentors}></div>
      <div className={style.teacherCount}  data-theme={darkMode ? "dark" : "lightMode"}> + {props.teacherCount.teacherCount} </div>
      <div className={style.title}  data-theme={darkMode ? "dark" : "lightMode"}>{t("BestTeacherBanner")}</div>
    </div>
  )
}

export {Mentors}