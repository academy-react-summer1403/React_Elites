import React, { useEffect, useState } from 'react'
import style from './Search.module.css'
import { useGlobalState } from '../../../../../../State/State';

const Search = ({setSearchValue, setIsSearched, searchValue, isSearched}) => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  

  return (
    <>
        <label htmlFor='search' className={style.labelSearch} data-theme={darkMode ? "search" : "lightMode"}> جستجو </label>
        <input name='search' type='search' placeholder='دوره مورد نظر را جست‌جو کنید...' className={style.search} data-theme={darkMode ? "dark" : "lightMode"} onChange={(e) => {
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
    </>
  )
}

export {Search}