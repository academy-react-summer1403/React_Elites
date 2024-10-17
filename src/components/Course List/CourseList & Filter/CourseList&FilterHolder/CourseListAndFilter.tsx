import React from 'react'
import style from './CourseListAndFilter.module.css'
import { CourseListGridHolder } from '../CourseListGrid/CourseListGridHolder/CourseListGridHolder'
import { CourseFilterHolder } from '../CourseFilter/CourseFilterHolder/CourseFilterHolder'

const CourseListAndFilter = () => {
  return (
    <div className={style.CourseListAndFilterHolder}>
      <CourseListGridHolder />
      <CourseFilterHolder />
    </div>
  )
}

export {CourseListAndFilter}