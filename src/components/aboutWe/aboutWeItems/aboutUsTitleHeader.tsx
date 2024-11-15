import React from 'react'
import style from '../../../Style/aboutWe.module.css'
import { useGlobalState } from '../../../State/State';
import { useTranslation } from 'react-i18next';

const AboutUsTitleHeader = (props) => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  const { t } = useTranslation();
  return (
    <h1 className={style.title} data-theme={darkMode ? "darkNoBG" : "lightMode"}>{t("aboutUsTitle1")} </h1>
  )
}

export {AboutUsTitleHeader}