import React, { useEffect, useState } from 'react'
import style from './CourseListGridHolder.module.css'
import { TopHolder } from '../CourseListGridItems/Top/TopHolder'
import { CoursesHolder } from '../CourseListGridItems/Courses Of The Weekend/CoursesHolder/CoursesHolder'
import { ChangePageList } from '../ChangePageList/ChangePageList'
import { allCourseList } from '../../../../../core/services/api/AllCourseList'


const CourseListGridHolder = () => {
  const [clicked, setClicked] = useState(false)
  const [sortModal, setSortModal] = useState(false)
  
  const [courseList, setCourseList] = useState([]);
  const [pagInation, setPagInation] = useState(1)

  const getAllCourseList = async () => {
    const allCourses = await allCourseList(pagInation)
    setCourseList(allCourses.courseFilterDtos)
  }

  useEffect(() => {
    getAllCourseList()
  }, [])
  useEffect(() => {
    getAllCourseList()
  }, [pagInation])
  
  return (
    <div className={style.courseListGridHolder}>
      <TopHolder clicked={clicked} setClicked={setClicked} sortModal={sortModal} setSortModal={setSortModal} />
      <CoursesHolder courseList={courseList} />
      <ChangePageList setPagInation={setPagInation} pagInation={pagInation} />
    </div>
  )
}

export {CourseListGridHolder}