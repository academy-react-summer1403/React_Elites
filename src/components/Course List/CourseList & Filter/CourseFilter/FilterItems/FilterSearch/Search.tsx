import React from 'react'
import style from './Search.module.css'
import { useGlobalState } from '../../../../../../State/State';

const Search = () => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <>
        <label htmlFor='search' className={style.labelSearch} data-theme={darkMode ? "darkNoBG" : "lightMode"}> جستجو </label>
        <input name='search' type='search' placeholder='دوره مورد نظر را جست‌جو کنید...' className={style.search} data-theme={darkMode ? "dark" : "lightMode"}/>
    </>
  )
}

export {Search}