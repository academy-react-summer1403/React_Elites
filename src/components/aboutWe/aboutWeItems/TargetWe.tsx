import React from 'react'
import style from './cardsBlogsListStyle.module.css'
import { useGlobalState } from '../../../State/State';
import { useTranslation } from 'react-i18next';

const TargetWe = (props) => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  const { t } = useTranslation();
  return (
    <div className={style.holderP}>
      <span data-theme={darkMode ? "dark" : "lightMode"}>{t("aboutUsTitle2")}</span>
      <p className={style.courseCounts} data-theme={darkMode ? "dark" : "lightMode"}>{t("aboutUsDesc3")}</p>
    </div>
  )
}

export {TargetWe}