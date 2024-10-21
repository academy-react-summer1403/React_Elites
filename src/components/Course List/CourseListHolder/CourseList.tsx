import React from 'react'
import style from './CourseList.module.css'
import { StartNewJourney } from '../Start New Journy/StartNewJourneyHolder/StartNewJourney'
import { CourseListAndFilter } from '../CourseList & Filter/CourseList&FilterHolder/CourseListAndFilter'
import { useGlobalState } from '../../../State/State'

const CourseList = () => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <div className={style.body}  data-theme={darkMode ? "dark" : "lightMode"}>
        <div className={style.courseListHolder}>
        <StartNewJourney />
        <CourseListAndFilter />
        </div>
    </div>
  )
}

export {CourseList}