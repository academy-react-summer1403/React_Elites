import React from 'react'
import style from './style.module.css'
import { useGlobalState } from '../../../../../../../../../State/State';
import { useTranslation } from 'react-i18next';

const Like = (props) => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  const {t} = useTranslation();
  return (
    <div className={style.like} data-theme={darkMode ? "darkNoBGDisc" : "lightMode"}>{t("likes")}: {props.like}</div>
  )
}

export {Like}