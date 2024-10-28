import React, { useEffect, useState } from 'react'
import style from './CourseListGridHolder.module.css'
import { TopHolder } from '../CourseListGridItems/Top/TopHolder'
import { CoursesHolder } from '../CourseListGridItems/Courses Of The Weekend/CoursesHolder/CoursesHolder'
import { ChangePageList } from '../ChangePageList/ChangePageList'
import { allCourseList } from '../../../../../core/services/api/AllCourseList'
import { Filter } from '../../../../../core/services/api/Filter'
import { Sort } from '../../../../../core/services/api/Sort'


const CourseListGridHolder = ({applyFilter, teacherId, setTotalCount, totalCount, levelId, searchValue, isSearched}) => {
  const [clicked, setClicked] = useState(false)
  const [sortModal, setSortModal] = useState(false)
  
  const [courseList, setCourseList] = useState([]);
  const [pagInation, setPagInation] = useState(1)
  const [sortType, setSortType] = useState("")
  const [col, setCol] = useState("")
  const [applySort, setapplySort] = useState(false)




  const getFilteredList = async () => {

    let data = await Filter(teacherId, pagInation, levelId)

    let sortData = await Sort(col, sortType)

    const allCourses = await allCourseList(pagInation)
    let allCoursesData = allCourses.courseFilterDtos

    if(applyFilter === true){
      setCourseList(data.courseFilterDtos)
      setTotalCount(data.totalCount)
    }
    else if(applyFilter === false && applySort === false){
      setCourseList(allCoursesData)
      setTotalCount(allCourses.totalCount)
      setCourseList(allCoursesData.filter(doc => doc.title.includes(searchValue)))
    }
    else if(applySort === true){
      setCourseList(sortData.courseFilterDtos)
    }
  }



  useEffect(() => {
    getFilteredList()
  }, [])
  useEffect(() => {
    getFilteredList()
  }, [pagInation])
  useEffect(() => {
    getFilteredList()
  }, [applyFilter])
  useEffect(() => {
    getFilteredList()
  }, [searchValue])
  useEffect(() => {
    getFilteredList()
  }, [col])
  useEffect(() => {
    getFilteredList()
  }, [sortType])
  useEffect(() => {
    getFilteredList()
  }, [applySort])
  


  return (
    <div className={style.courseListGridHolder}>
      <TopHolder clicked={clicked} setClicked={setClicked} setapplySort={setapplySort} sortModal={sortModal} applySort={applySort} setSortModal={setSortModal} setSortType={setSortType} setCol={setCol}/>
      <CoursesHolder 
      courseList={courseList}
      />
      {isSearched || applySort === false && <ChangePageList setPagInation={setPagInation} pagInation={pagInation} totalCount={totalCount}/>}
    </div>
  )
}

export {CourseListGridHolder}