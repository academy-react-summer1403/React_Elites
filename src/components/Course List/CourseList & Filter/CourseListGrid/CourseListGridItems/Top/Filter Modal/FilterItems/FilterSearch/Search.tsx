import React from 'react'
import style from './Search.module.css'
import { useGlobalState } from '../../../../../../../../../State/State';
import { useTranslation } from 'react-i18next';

const Search = () => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  const { t } = useTranslation();
  return (
    <>
        <label htmlFor='search' className={style.labelSearch}  data-theme={darkMode ? "search" : "lightMode"}> {t("search")} </label>
        <input name='search' type='search' placeholder='دوره مورد نظر را جست‌جو کنید...' className={style.search}  data-theme={darkMode ? "dark" : "lightMode"}/>
    </>
  )
}

export {Search}