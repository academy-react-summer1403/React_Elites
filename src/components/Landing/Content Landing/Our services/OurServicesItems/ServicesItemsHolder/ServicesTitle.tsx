import React from 'react'
import style from './ServicesItemsHolder.module.css'
import { useGlobalState } from '../../../../../../State/State';
import { useTranslation } from 'react-i18next';

const ServicesTitle = () => {
  const {t} = useTranslation();
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <div className={style.holderTitle}>
      <div className={style.title} data-theme={darkMode ? "dark" : "lightMode"}>{t("ourServicesTitleLanding1")} <br /> {t("ourServicesTitleLanding2")}</div>
    </div>
  )
}

export {ServicesTitle}