import React, { useEffect, useState } from 'react'
import style from './CourseDetail.module.css'
import { Main } from '../CourseDatailItems/Main/Main'
import { Description } from '../CourseDatailItems/Description/Description'
import { AllComments } from '../CourseDatailItems/Comments/Holder/AllComments'
import { CoursesHolder } from '../Courses Of The Weekend/CoursesHolder/CoursesHolder'
import { useGlobalState } from '../../../State/State'
import { useParams } from 'react-router-dom'
import { getCourseById } from '../../../core/services/api/courseById'

const CourseDetail = () => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');

  const [courseDetail, setCourseDetail] = useState([])
  const {id} = useParams();

  const getCourseDetail = async () => {
    const Details = await getCourseById(id)
    setCourseDetail(Details)
  }
  useEffect(() => {
    getCourseDetail()
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
        />
        <Description description={courseDetail?.describe} />
        <AllComments />
        <CoursesHolder />
      </div>
    </div>
  )
}

export {CourseDetail}