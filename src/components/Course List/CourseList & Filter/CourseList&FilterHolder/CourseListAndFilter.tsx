import React from 'react'
import style from './CourseListAndFilter.module.css'
import { CourseListGridHolder } from '../CourseListGrid/CourseListGridHolder/CourseListGridHolder'
import { CourseFilterHolder } from '../CourseFilter/CourseFilterHolder/CourseFilterHolder'

const CourseListAndFilter = ({applyFilter, setTeacherId, setApplyFilter, teacherId, setTotalCount, totalCount, levelId, setLevelId, searchValue, setSearchValue, isSearched, setIsSearched}) => {
  return (
    <div className={style.CourseListAndFilterHolder}>
      <CourseListGridHolder
        applyFilter={applyFilter}
        teacherId={teacherId}
        setTotalCount={setTotalCount}
        totalCount={totalCount}
        levelId={levelId}
        searchValue={searchValue}
        isSearched={isSearched}
      />
      <CourseFilterHolder
        setTeacherId={setTeacherId} 
        setApplyFilter={setApplyFilter}
        setLevelId={setLevelId}
        applyFilter={applyFilter}
        setSearchValue={setSearchValue}
        searchValue={searchValue}
        setIsSearched={setIsSearched}
        isSearched={isSearched}
      />
    </div>
  )
}

export {CourseListAndFilter}