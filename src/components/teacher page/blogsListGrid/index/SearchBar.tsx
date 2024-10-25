import React from 'react'
import { useGlobalState } from '../../../../State/State';
import style from '../../../../Style/teacher.module.css'

const SearchBar = ({setSearchValue}) => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <div className='w-full h-3/6 flex justify-center items-center'>
        <input className={style.input} placeholder='جستجو در نام اساتید...' data-theme={darkMode ? "darkSmall" : "lightMode"}></input>
    </div>
  )
}

export { SearchBar }