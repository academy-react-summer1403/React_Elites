import React from 'react'
import style from './Bottun.module.css'
import { useGlobalState } from '../../../../../../State/State';
import { useTranslation } from 'react-i18next';

const Bottun = () => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  const {t} = useTranslation();
  return (
    <div className={style.Button}  data-theme={darkMode ? "darkSmall" : "lightMode"}> {t("NewCourses")} </div>
  )
}

export {Bottun};