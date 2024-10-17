import React from 'react'
import style from './CourseDetail.module.css'
import { Main } from '../CourseDatailItems/Main/Main'
import { Description } from '../CourseDatailItems/Description/Description'
import { AllComments } from '../CourseDatailItems/Comments/Holder/AllComments'
import { CoursesHolder } from '../Courses Of The Weekend/CoursesHolder/CoursesHolder'

const CourseDetail = () => {
  return (
    <div className={style.holder}>
        <Main />
        <Description />
        <AllComments />
        <CoursesHolder />
    </div>
  )
}

export {CourseDetail}