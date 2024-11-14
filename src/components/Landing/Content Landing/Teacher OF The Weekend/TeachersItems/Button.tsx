import React from 'react'
import style from './TeachersItems.module.css'
import { useGlobalState } from '../../../../../State/State';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Button = () => {
  const {t} = useTranslation();
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <NavLink to="/teacher-page" className={style.button} data-theme={darkMode ? "dark" : "lightMode"}>{t("TeachersPageTitle")}</NavLink>
  )
}

export {Button}