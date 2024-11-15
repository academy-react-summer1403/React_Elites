import React from 'react'
import style from './cardsBlogsListStyle.module.css'
import { useGlobalState } from '../../../State/State';
import { useTranslation } from 'react-i18next';

const TeamTeaching = (props) => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  const { t } = useTranslation();
  return (
    <div className={style.holderP}>
      <span data-theme={darkMode ? "dark" : "lightMode"}>{t("aboutUsTitle4")}</span>
      <div className={style.holderGap}>
        <p className={style.courseCounts} data-theme={darkMode ? "dark" : "lightMode"}>{t("aboutUsDesc6")} </p> 
        <p className={style.courseCounts} data-theme={darkMode ? "dark" : "lightMode"}>{t("aboutUsDesc7")} </p> 
      </div>
    </div>  
  )
}

export {TeamTeaching}