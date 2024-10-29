import React, { useEffect, useState } from 'react'
import style from './CourseList.module.css'
import { StartNewJourney } from '../Start New Journy/StartNewJourneyHolder/StartNewJourney'
import { CourseListAndFilter } from '../CourseList & Filter/CourseList&FilterHolder/CourseListAndFilter'
import { useGlobalState } from '../../../State/State'

const CourseList = () => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  const [applyFilter, setApplyFilter] = useState(false)
  const [totalCount, setTotalCount] = useState("")
  const [teacherId, setTeacherId] = useState("")
  const [levelId, setLevelId] = useState("")
  const [searchValue, setSearchValue] = useState("")
  const [isSearched, setIsSearched] = useState(false)
  const [isCourse, setisCourse] = useGlobalState('isCourse');
  useEffect(() => {
    setisCourse(true)
  }, [])
  useEffect(() => {
    return () => {
      setisCourse(false)
    }
  }, [])
  return (
    <div className={style.body}  data-theme={darkMode ? "dark" : "lightMode"}>
        <div className={style.courseListHolder}>
        <StartNewJourney />
        <CourseListAndFilter 
          applyFilter={applyFilter}
          setTeacherId={setTeacherId}
          teacherId={teacherId}
          setApplyFilter={setApplyFilter}
          setTotalCount={setTotalCount}
          totalCount={totalCount}
          levelId={levelId}
          setLevelId={setLevelId}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          isSearched={isSearched}
          setIsSearched={setIsSearched}
          />
        </div>
    </div>
  )
}

export {CourseList}