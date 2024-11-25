import React, { useEffect, useState } from 'react'
import style from './CourseList.module.css'
import { StartNewJourney } from '../Start New Journy/StartNewJourneyHolder/StartNewJourney'
import { CourseListAndFilter } from '../CourseList & Filter/CourseList&FilterHolder/CourseListAndFilter'
import { useGlobalState } from '../../../State/State'
import { Sort } from '../../../core/services/api/Sort'
import { motion, useScroll } from "framer-motion";

const CourseList = () => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  const [applyFilter, setApplyFilter] = useState(false)
  const [totalCount, setTotalCount] = useState("")
  const [teacherId, setTeacherId] = useState("")
  const [levelId, setLevelId] = useState("")
  const [searchValue, setSearchValue] = useState("")
  const [isSearched, setIsSearched] = useState(false)
  const [isCourse, setisCourse] = useGlobalState('isCourse');
  const [categoryId, setcategoryId] = useState([2,3])
  const [minValue, set_minValue] = useState("");
  const [maxValue, set_maxValue] = useState("");
  const [maxValueBining, setmaxValueBining] = useState()
  const [minValueBining, setminValueBining] = useState()
  const { scrollYProgress } = useScroll()

  const getMaxValue = async () => {
    let res = await Sort("Cost", "DESC")
    let res2 = await Sort("Cost", "ASC")
    setmaxValueBining(res.courseFilterDtos[0].cost)
    setminValueBining(res2.courseFilterDtos[0].cost)
    set_maxValue(String(res.courseFilterDtos[0].cost))
    set_minValue(String(res2.courseFilterDtos[0].cost))
  }

  useEffect(() => {
    setisCourse(true)
    getMaxValue()
  }, [])
  useEffect(() => {
    return () => {
      setisCourse(false)
    }
  }, [])
  return (
    <div className={style.body}  data-theme={darkMode ? "dark" : "lightMode"}>
        <motion.div className="progressBar" style={{ scaleX: scrollYProgress }} />
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
          setcategoryId={setcategoryId}
          categoryId={categoryId}
          maxValue={maxValue}
          minValue={minValue}
          set_minValue={set_minValue}
          set_maxValue={set_maxValue}
          minValueBining={minValueBining}
          maxValueBining={maxValueBining}
          />
        </div>
    </div>
  )
}

export {CourseList}