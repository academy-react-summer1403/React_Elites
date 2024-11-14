import React from 'react'
import style from './Level.module.css'
import { useGlobalState } from '../../../../../../../../../State/State';
import { useTranslation } from 'react-i18next';

const Level = () => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  const { t } = useTranslation();
  
  return (
    <>
        <div className={style.titleLevel}  data-theme={darkMode ? "level" : "lightMode"}> {t("EducationalLevel")} </div>
        <div className={style.level}  data-theme={darkMode ? "dark" : "lightMode"}>سطح مورد نظر را انتخاب کنید</div>
    </>
  )
}

export {Level}