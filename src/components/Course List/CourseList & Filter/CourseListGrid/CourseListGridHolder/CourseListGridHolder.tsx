import React from 'react'
import style from './CourseListGridHolder.module.css'
import { TopHolder } from '../CourseListGridItems/Top/TopHolder'
import { CourseList } from '../../../CourseListHolder/CourseList'
import { CoursesHolder } from '../CourseListGridItems/Courses Of The Weekend/CoursesHolder/CoursesHolder'


const CourseListGridHolder = () => {
  return (
    <div className={style.courseListGridHolder}>
      <TopHolder />
      <div className={style.inv}></div>
      <CoursesHolder />
    </div>
  )
}

export {CourseListGridHolder}