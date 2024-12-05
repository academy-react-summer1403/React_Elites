import React from 'react'
import style from '../../../../../Style/LogInOrRegister.module.css'
import { NavLink } from 'react-router-dom';
import { useGlobalState } from '../../../../../State/State';
import { useTranslation } from 'react-i18next';
import { identifier } from '../../../../../core/services/Functions/ThemeIdentifier';
const LogInOrRegister = () => {
  const {t} = useTranslation();
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <NavLink to="/auth/Login" className={style.container} data-theme={identifier("darkNoBG")}>{t("LoginOrRegister")}</NavLink>
  )
}

export { LogInOrRegister };