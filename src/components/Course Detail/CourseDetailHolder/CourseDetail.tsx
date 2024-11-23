import React, { useEffect, useState } from 'react'
import style from './CourseDetail.module.css'
import { Main } from '../CourseDatailItems/Main/Main'
import { Description } from '../CourseDatailItems/Description/Description'
import { AllComments } from '../CourseDatailItems/Comments/Holder/AllComments'
import { CoursesHolder } from '../Courses Of The Weekend/CoursesHolder/CoursesHolder'
import { useGlobalState } from '../../../State/State'
import { useParams } from 'react-router-dom'
import { getCourseById } from '../../../core/services/api/courseById'
import { getCourseComment } from '../../../core/services/api/getCourseComment'
import { allCourseList } from '../../../core/services/api/AllCourseList'

const CourseDetail = () => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');

  const [courseDetail, setCourseDetail] = useState([])
  const [comments, setComments] = useState([])
  const [related, setrelated] = useState([])
  const [allCourseListt, setallCourseList] = useState([])
  const {id} = useParams();

  const getCourseDetail = async () => {
    const Details = await getCourseById(id)
    const res = await getCourseComment(id)
    setCourseDetail(Details)
    setComments(res)
  }

  const getAllCourse = async () => {
    const list = await allCourseList(500)
    setallCourseList(list.courseFilterDtos)
  }

  const getRelated = () => {
    setrelated(allCourseListt.filter((item) => Array(item.technologyList) == courseDetail?.techs))
    console.log(related)
  }

  
  useEffect(() => {
    getCourseDetail()
    getAllCourse()
    getRelated()
  }, [])
  

  return (
    <div className={style.body} data-theme={darkMode ? "dark" : "lightMode"}>
      <div className={style.holder}>
        <Main 
          dislike={courseDetail?.dissLikeCount}
          like={courseDetail?.likeCount}
          teacher={courseDetail?.teacherName}
          status={courseDetail?.courseStatusName}
          level={courseDetail?.courseLevelName}
          category={courseDetail?.techs}
          title={courseDetail?.title}
          comments={courseDetail?.commentCount}
          rate={courseDetail?.currentRate}
          price={courseDetail?.cost}
          image={courseDetail?.imageAddress}
          start={courseDetail?.startTime}
          end={courseDetail?.endTime}
          id={courseDetail?.courseId}
        />
        <Description description={courseDetail?.describe} />
        <AllComments comments={comments} id={id} />
        {/* <CoursesHolder related={related} /> */}
      </div>
    </div>
  )
}

export {CourseDetail}