import React from 'react'
import style from './CourseFilterHolder.module.css'
import { FilterItemsHolder } from '../FilterItems/FilterItemsHolder/FilterItemsHolder'
import { useGlobalState } from '../../../../../State/State';

const CourseFilterHolder = ({setTeacherId, setApplyFilter, applyFilter, setLevelId, setSearchValue, setIsSearched, searchValue, isSearched}) => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <div className={style.filterHolder} data-theme={darkMode ? "darkSmall" : "lightMode"}>
      <FilterItemsHolder
      setTeacherId={setTeacherId}
      setApplyFilter={setApplyFilter}
      applyFilter={applyFilter}
      setLevelId={setLevelId}
      setSearchValue={setSearchValue}
      setIsSearched={setIsSearched}
      searchValue={searchValue}
      isSearched={isSearched}
      />
    </div>
  )
}

export {CourseFilterHolder}