import React, { useEffect, useState } from 'react'
import style from './Items.module.css'
import { Price } from './Price'
import { Image } from './Image'
import { Title } from './Title'
import { PayButton } from './payButton'
import { ImageAndTitle } from './ImageAndTitle'

import { getCourseById } from '../../../../../core/services/api/courseById'
import { PayButtonHolder } from './payButtonHolder'
import { NavLink } from 'react-router-dom'
import { Date } from './Date'
import { identifier } from '../../../../../core/services/Functions/ThemeIdentifier'
const Courses = ({ id, reserverDate }) => {

  const [courseDetail, setcourseDetail] = useState({})
  const [courseList, setCourseList] = useState([]);

  const getCourseDetail = async () => {
    const Details = await getCourseById(id)
    setcourseDetail(Details)
    console.log(id)
  }
  useEffect(() => {
    getCourseDetail()
  }, [])

  return (
    <div className={style.coursesHolder} data-theme={identifier("darkNoBG","dark2NoBG")}>
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