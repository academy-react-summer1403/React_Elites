import React from 'react'
import style from '../../../Style/blogList.module.css'
import { useGlobalState } from "../../../State/State.tsx";
import { useTranslation } from 'react-i18next';
import { identifier } from '../../../core/services/Functions/ThemeIdentifier.ts';

const TitleHeaderBlogs = () => {
  const { t } = useTranslation();
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');

  return (
    <div className={style.titleBlogs}>
      <h1 className={style.h1} data-theme={identifier("dark")}>{t("headerTitleBlogsList")}</h1>
      <p className={style.p} data-theme={identifier("dark")}>{t("headerDescBlogsList1")}   <br />{t("headerDescBlogsList2")}</p>
    </div>
  )
}

export {TitleHeaderBlogs}