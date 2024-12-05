import React from 'react'
import style from './ServicesItemsHolder.module.css'
import { useGlobalState } from '../../../../../../State/State';
import { useTranslation } from 'react-i18next';
import { identifier } from '../../../../../../core/services/Functions/ThemeIdentifier';
const ServicesTitle = () => {
  const {t} = useTranslation();
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <div className={style.holderTitle}>
      <div className={style.title} data-theme={identifier("dark")}>{t("ourServicesTitleLanding1")} <br /> {t("ourServicesTitleLanding2")}</div>
    </div>
  )
}

export {ServicesTitle}