import React from 'react'
import style from './style.module.css'
import { useGlobalState } from '../../../../../../../../../State/State';
import { useTranslation } from 'react-i18next';

const CurrentRegistrants = (props) => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  const {t} = useTranslation();
  return (
    <div className={style.NumberRegistrants} data-theme={darkMode ? "darkNoBGDisc" : "lightMode"}>{t("NumberRegistrants")}: {props.currentRegistrants}</div>
  )
}

export {CurrentRegistrants}