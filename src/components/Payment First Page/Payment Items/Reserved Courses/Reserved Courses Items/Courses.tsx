import React, { useEffect, useState } from 'react'
import style from './Items.module.css'
import { Price } from './Price'
import { Image } from './Image'
import { Title } from './Title'
import { PayButton } from './payButton'
import { ImageAndTitle } from './ImageAndTitle'
import { useGlobalState } from '../../../../../State/State'
import { getCourseById } from '../../../../../core/services/api/courseById'
import { PayButtonHolder } from './payButtonHolder'
import { NavLink } from 'react-router-dom'
import { Date } from './Date'

const Courses = ({ id, reserverDate }) => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  const [courseDetail, setcourseDetail] = useState({})
  const [courseList, setCourseList] = useState([]);

  const getCourseDetail = async () => {
    const Details = await getCourseById(id)
    setcourseDetail(Details)
  }
  useEffect(() => {
    getCourseDetail()
  }, [])

  return (
    <div className={style.coursesHolder} data-theme={darkMode ? "darkNoBG" : "lightMode"}>
      <div className={style.PriceAndPayHolder}>
        <Price cost={courseDetail.cost} />        
        <PayButtonHolder id={courseDetail.courseId} />
      </div>
      <div className={style.DateHolder}>
        <Date title="تاریخ اتمام :" Date={courseDetail?.startTime} />
        <Date title="تاریخ شروع :" Date={courseDetail?.endTime} />  
      </div>
      <NavLink to={"/Course-Detail/" +courseDetail.courseId} className={style.TitleAndImageHolder}>
        <Title title={courseDetail.title} status={courseDetail?.courseStatusName} />
        <Image Image={courseDetail.imageAddress} />
      </NavLink>
    </div>
  )
}

export { Courses }