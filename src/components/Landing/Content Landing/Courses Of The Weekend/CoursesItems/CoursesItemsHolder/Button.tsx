import React from 'react'
import style from './ItemsHolder.module.css'

import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { identifier } from '../../../../../../core/services/Functions/ThemeIdentifier';
const Button = () => {
  const {t} = useTranslation();

  return (
    <NavLink to="Courses-list" className={style.button} data-theme={identifier("darkSmall")}>{t("ButtonViewAll")}</NavLink>
  )
}

export {Button}