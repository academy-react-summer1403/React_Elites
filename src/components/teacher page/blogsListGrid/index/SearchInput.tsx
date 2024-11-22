import React from 'react'
import { useGlobalState } from '../../../../State/State';
import style from '../../../../Style/teacher.module.css'
import { useTranslation } from 'react-i18next';

const SearchBarInput = ({ setSearchValue }) => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  const { t } = useTranslation();
  return (

    <input className={style.input} placeholder={t("TeacherSearch")} data-theme={darkMode ? "darkSmall" : "lightMode"} onChange={(e) => {
      setSearchValue(e.target.value)
    }}></input>

  )
}

export { SearchBarInput }