import React from 'react'
import style from './Bottun.module.css'
import { useGlobalState } from '../../../../../../State/State';
import { useTranslation } from 'react-i18next';
import { identifier } from '../../../../../../core/services/Functions/ThemeIdentifier';
const Bottun = () => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  const {t} = useTranslation();
  return (
    <div className={style.Button}  data-theme={identifier("darkSmall")}> {t("NewCourses")} </div>
  )
}

export {Bottun};