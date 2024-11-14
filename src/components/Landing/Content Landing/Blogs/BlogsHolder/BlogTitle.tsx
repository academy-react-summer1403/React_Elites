import React from 'react'
import style from './Blogs.module.css'
import { useGlobalState } from '../../../../../State/State';
import { useTranslation } from 'react-i18next';


const BlogTitle = () => {
  const{t}= useTranslation();
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <div className={style.holderTitle}>
        <div className={style.title} data-theme={darkMode ? "dark" : "lightMode"}>{t("blogTitleLanding")}</div>
    </div>
  )
}

export default BlogTitle