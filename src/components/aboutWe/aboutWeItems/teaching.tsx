import React from 'react'
import style from './cardsBlogsListStyle.module.css'
import { useGlobalState } from '../../../State/State';
import { useTranslation } from 'react-i18next';

const Teaching = (props) => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  const { t } = useTranslation();
  return (
    <div className={style.holderP}>
      <span data-theme={darkMode ? "dark" : "lightMode"}>{t("aboutUsTitle3")}</span>
      <div className={style.holderGap}>
        <p className={style.courseCounts} data-theme={darkMode ? "dark" : "lightMode"}>{t("aboutUsDesc4")}</p> 
        <p className={style.courseCounts} data-theme={darkMode ? "dark" : "lightMode"}>{t("aboutUsDesc5")}</p> 
      </div>
    </div>  
  )
}

export {Teaching}