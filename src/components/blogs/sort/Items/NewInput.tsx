import styleBlogList from '../../../../Style/blogList.module.css'
import { useGlobalState } from "../../../../State/State.tsx";
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { identifier } from '../../../../core/services/Functions/ThemeIdentifier.ts';

const NewInputBlogs = ({isClicked1, setisClicked1, setisClicked2, setapplySort, setSortType, setCol}) => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  const { t } = useTranslation();
  return (
    <>
      <div className={isClicked1 ? styleBlogList.selectedC : styleBlogList.categories} data-theme={identifier("darkSmall")} onClick={() => {
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