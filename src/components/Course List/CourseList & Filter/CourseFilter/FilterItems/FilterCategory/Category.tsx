import React from 'react'
import style from './Category.module.css'
import { useGlobalState } from '../../../../../../State/State';
import { useTranslation } from "react-i18next";

const Category = () => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  const { t } = useTranslation();
  return (
    <>
        <div className={style.titleCat} data-theme={darkMode ? "cat" : "lightMode"}> {t("category")} </div>
        <div className={style.cat} data-theme={darkMode ? "dark" : "lightMode"}>دسته مورد نظر را انتخاب کنید</div>
    </>
  )
}

export {Category}