import React from 'react'
import style from './cardsBlogsListStyle.module.css'
import { useGlobalState } from '../../../State/State';
import { useTranslation } from 'react-i18next';

const AboutWeDesc = (props) => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  const { t } = useTranslation();
  return (
    <div className={style.holderGap}>
      <p data-theme={darkMode ? "dark" : "lightMode"}>{t("aboutUsDesc1")}</p>
      <p data-theme={darkMode ? "dark" : "lightMode"}>{t("aboutUsDesc2")}</p>
    </div>
  )
}

export {AboutWeDesc}