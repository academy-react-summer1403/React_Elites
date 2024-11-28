import React, { useEffect, useState } from 'react'
import style from './Search.module.css'
import { useGlobalState } from '../../../../../../../../../State/State';
import { useTranslation } from "react-i18next";

const Search = ({setSearchValue, setIsSearched, searchValue, isSearched}) => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  const { t } = useTranslation();
  

  return (
    <>
      <div className={style.holderIconAndTitle}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path data-theme={darkMode ? "darkPath" : "lightMode"} d="M17.5 17.5L22 22" stroke="#2F2F2F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path data-theme={darkMode ? "darkPath" : "lightMode"} d="M20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C15.9706 20 20 15.9706 20 11Z" stroke="#2F2F2F" stroke-width="1.5" stroke-linejoin="round"/>
      </svg>
      <label htmlFor='search' className={style.labelSearch} data-theme={darkMode ? "search" : "lightMode"}> {t("search")} </label>
    </div>

        <div className={style.holderSearch}>
                  <input name='search' type='search' placeholder={t("searchCourses")} className={style.search} data-theme={darkMode ? "dark" : "lightMode"} onChange={(e) => {
          setSearchValue(e.target.value)
        }}
        onKeyUp={() => {
          if(searchValue !== ""){
            setIsSearched(true)
          }
          else if(searchValue === ""){
            setIsSearched(false)
          }
        }}
        />
        <div className={style.searchBox}></div>
        </div>
    </>
  )
}

export {Search}