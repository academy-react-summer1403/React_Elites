import React from 'react'
import style from './Bottun.module.css'
import { useGlobalState } from '../../../../../../State/State';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { identifier } from '../../../../../../core/services/Functions/ThemeIdentifier';
const Bottun = () => {
  const {t} = useTranslation();
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <NavLink to="/Courses-list" className={style.Button} data-theme={identifier("darkSmall")}> {t("NewCourses")} </NavLink>
  )
}

export {Bottun};