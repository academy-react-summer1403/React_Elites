import React from 'react'
import style from './Search.module.css'

const Search = () => {
  return (
    <>
        <label htmlFor='search' className={style.labelSearch} > جستجو </label>
        <input name='search' type='search' placeholder='دوره مورد نظر را جست‌جو کنید...' className={style.search}/>
    </>
  )
}

export {Search}