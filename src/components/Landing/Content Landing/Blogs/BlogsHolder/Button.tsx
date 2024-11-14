import React from 'react'
import style from '../../Courses Of The Weekend/CoursesItems/CoursesItemsHolder/ItemsHolder.module.css'
import { useGlobalState } from '../../../../../State/State';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Button = () => {
  const {t} = useTranslation();
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <NavLink to="Blogs-list" className={style.button} data-theme={darkMode ? "darkSmall" : "lightMode"}>{t("ButtonViewAll")}</NavLink>
  )
}

export {Button}