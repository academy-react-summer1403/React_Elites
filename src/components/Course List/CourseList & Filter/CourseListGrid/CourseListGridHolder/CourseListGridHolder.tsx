import React from 'react'
import style from './CourseListGridHolder.module.css'
import { TopHolder } from '../CourseListGridItems/Top/TopHolder'


const CourseListGridHolder = () => {
  return (
    <div className={style.courseListGridHolder}>
      <TopHolder />
      <div className={style.inv}></div>
    </div>
  )
}

export {CourseListGridHolder}