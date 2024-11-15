import React from 'react'
import style from '../../../Style/blogList.module.css'
import { useGlobalState } from "../../../State/State.tsx";
import { useTranslation } from 'react-i18next';

const TitleHeaderBlogs = () => {
  const { t } = useTranslation();
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');

  return (
    <div className={style.titleBlogs}>
      <h1 className={style.h1} data-theme={darkMode ? "dark" : "lightMode"}>{t("headerTitleBlogsList")}</h1>
      <p className={style.p} data-theme={darkMode ? "dark" : "lightMode"}>{t("headerDescBlogsList1")}   <br />{t("headerDescBlogsList2")}</p>
    </div>
  )
}

export {TitleHeaderBlogs}