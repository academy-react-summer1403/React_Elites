import React from 'react'
import style from './cardsBlogsListStyle.module.css'
import { useGlobalState } from '../../../State/State';
import { useTranslation } from 'react-i18next';

const CursesTeaching = (props) => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  const { t } = useTranslation();
  return (
    <div className={style.holderP}>
      <span data-theme={darkMode ? "dark" : "lightMode"}>{t("aboutUsTitle5")}</span>
      <div className={style.holderGap}>
        <p className={style.courseCounts} data-theme={darkMode ? "dark" : "lightMode"}> {t("aboutUsDesc8")} </p> 
        <p className={style.courseCounts} data-theme={darkMode ? "dark" : "lightMode"}> {t("aboutUsDesc9")} </p> 
      </div>
    </div>  
  )
}

export {CursesTeaching}