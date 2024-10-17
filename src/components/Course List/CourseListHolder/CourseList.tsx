import React from 'react'
import style from './CourseList.module.css'
import { StartNewJourney } from '../Start New Journy/StartNewJourneyHolder/StartNewJourney'
import { CourseListAndFilter } from '../CourseList & Filter/CourseList&FilterHolder/CourseListAndFilter'

const CourseList = () => {
  return (
    <div className={style.courseListHolder}>
        <StartNewJourney />
        <CourseListAndFilter />
    </div>
  )
}

export {CourseList}