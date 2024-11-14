import React from 'react'
import style from './Bottun.module.css'
import { useGlobalState } from '../../../../../../State/State';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Bottun = () => {
  const {t} = useTranslation();
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <NavLink to="/Courses-list" className={style.Button} data-theme={darkMode ? "darkSmall" : "lightMode"}> {t("NewCourses")} </NavLink>
  )
}

export {Bottun};