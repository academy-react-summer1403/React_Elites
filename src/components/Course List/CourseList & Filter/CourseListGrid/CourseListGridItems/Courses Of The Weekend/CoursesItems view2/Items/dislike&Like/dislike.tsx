import React from 'react'
import style from './style.module.css'
import { useGlobalState } from '../../../../../../../../../State/State';
import { useTranslation } from 'react-i18next';

const Dislike = (props) => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  const {t} = useTranslation();
  return (
    <div className={style.dislike} data-theme={darkMode ? "darkNoBG" : "lightMode"}>{t("Dislikes")}: {props.dissLikeCount}</div>
  )
}

export {Dislike}