import styleBlogList from '../../../../Style/blogList.module.css'
import { useGlobalState } from "../../../../State/State.tsx";
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

const NewInputBlogs = ({isClicked1, setisClicked1, setisClicked2, setapplySort, setSortType, setCol}) => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  const { t } = useTranslation();
  return (
    <>
      <div className={isClicked1 ? styleBlogList.selectedC : styleBlogList.categories} data-theme={darkMode ? "darkSmall" : "lightMode"} onClick={() => {
        setisClicked1(true)
        setisClicked2(false)
        setapplySort(true)
        setSortType("DESC")
        setCol("insertDate")
      }}>
        {t("newest")}
      </div>
    </>
  )
}

export { NewInputBlogs }