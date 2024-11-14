import React from 'react'
import style from './Teacher.module.css'
import { useGlobalState } from '../../../../../../../../../State/State';
import { useTranslation } from 'react-i18next';

const Teacher = () => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  const { t } = useTranslation();
  return (
    <>
        <div className={style.titleTeacher}  data-theme={darkMode ? "teacher" : "lightMode"}> {t("teachers")} </div>
        <div className={style.teacher}  data-theme={darkMode ? "dark" : "lightMode"}>استاد مورد نظر را انتخاب کنید</div>
    </>
  )
}

export {Teacher}