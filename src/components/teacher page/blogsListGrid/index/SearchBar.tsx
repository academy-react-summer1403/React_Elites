import React from 'react'
import { useGlobalState } from '../../../../State/State';
import style from '../../../../Style/teacher.module.css'

const SearchBar = ({setSearchValue}) => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <div className={style.inputHolder}>
      <h1>فیلتر</h1>
      <div>
        <h2>جستجو</h2>
        <input className={style.input} placeholder='جستجو در نام اساتید...' data-theme={darkMode ? "darkSmall" : "lightMode"}></input>
      </div>  
    </div>
  )
}

export { SearchBar }