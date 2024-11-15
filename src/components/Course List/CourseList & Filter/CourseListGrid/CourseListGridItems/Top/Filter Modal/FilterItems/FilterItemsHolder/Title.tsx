import React from 'react'
import style from './Holder.module.css'
import { useGlobalState } from '../../../../../../../../../State/State';
import { useTranslation } from 'react-i18next';

const Title = () => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  const { t } = useTranslation();
  return (
    <div className={style.title}  data-theme={darkMode ? "darkNoBG" : "lightMode"}>{t("filter")}</div>
  )
}

export {Title}