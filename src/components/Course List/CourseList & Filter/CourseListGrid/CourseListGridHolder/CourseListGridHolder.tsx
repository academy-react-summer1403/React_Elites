import React, { useEffect, useState } from 'react'
import style from './CourseListGridHolder.module.css'
import { TopHolder } from '../CourseListGridItems/Top/TopHolder'
import { CoursesHolder } from '../CourseListGridItems/Courses Of The Weekend/CoursesHolder/CoursesHolder'
import { ChangePageList } from '../ChangePageList/ChangePageList'


const CourseListGridHolder = () => {
  const [clicked, setClicked] = useState(false)
  const [sortModal, setSortModal] = useState(false)
  return (
    <div className={style.courseListGridHolder}>
      <TopHolder clicked={clicked} setClicked={setClicked} sortModal={sortModal} setSortModal={setSortModal} />
      <CoursesHolder />
      <ChangePageList />
    </div>
  )
}

export {CourseListGridHolder}