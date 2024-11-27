import React from 'react'
import style from './style.module.css'
import { useGlobalState } from '../../../../../../../../../State/State';
import { useTranslation } from 'react-i18next';

const Price = (props) => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  const {t} = useTranslation();
  return (
    <div className={style.price} data-theme={darkMode ? "darkNoBG" : "lightMode"}>{props.price} {t("toman")}</div>
  )
}

export {Price}