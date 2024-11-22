import React, { useEffect, useState } from 'react'
import style from '../../Course List/CourseList & Filter/CourseFilter/FilterItems/FilterSearch/Search.module.css'
import styleCompare from '../../../Style/Compare.module.css'
import { useGlobalState } from '../../../State/State';
import { useTranslation } from "react-i18next";

const Search = ({ setSearchValue, setIsSearched, searchValue, isSearched }) => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  const { t } = useTranslation();

  return (
    <div className={styleCompare.searchHolder}>
      <input name='search' type='search' placeholder={t("searchCourses")} className={style.search} data-theme={darkMode ? "dark" : "lightMode"} onChange={(e) => {
        setSearchValue(e.target.value)
      }}
      />
      <div className={styleCompare.results}>
        <div>
          <img src="https://classapi.sepehracademy.ir///Pictures//Course//blank-thumbnail_4031a67c-6002-4004-baf7-c0840ebed86f.jpg" />
          <h1>  سلام </h1>
        </div>
        <div>
          <img src="https://classapi.sepehracademy.ir///Pictures//Course//blank-thumbnail_4031a67c-6002-4004-baf7-c0840ebed86f.jpg" />
          <h1>  سلام </h1>
        </div>
      </div>

      <div id="overlay" className="hide"> </div>

    </div>
  )
}


export { Search }