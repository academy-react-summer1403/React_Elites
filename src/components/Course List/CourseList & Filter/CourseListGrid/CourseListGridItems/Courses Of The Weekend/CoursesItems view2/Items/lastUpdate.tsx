import React from 'react'
import style from './style.module.css'
import { useGlobalState } from '../../../../../../../../State/State';
import { dateConvertor } from '../../../../../../../../core/services/Functions/DateMiladi';
import { useTranslation } from 'react-i18next';

const LastUpdate = ({lastUpdate}) => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  const {t} = useTranslation();
  return (
    <div className={style.lastUpdate} data-theme={darkMode ? "dark" : "lightMode"}>{t("LastChange")}:{dateConvertor(lastUpdate)}</div>
  )
}

export {LastUpdate}