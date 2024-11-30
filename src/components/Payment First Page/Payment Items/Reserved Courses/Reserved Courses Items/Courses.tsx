import React, { useEffect, useState } from 'react'
import style from './Items.module.css'
import { Price } from './Price'
import { Image } from './Image'
import { Title } from './Title'
import { ImageAndTitle } from './ImageAndTitle'
import { useGlobalState } from '../../../../../State/State'
import { getCourseById } from '../../../../../core/services/api/courseById'

const Courses = ({id, reserverDate}) => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  const [courseDetail, setcourseDetail] = useState({})
  const getCourseDetail = async () => {
    const Details = await getCourseById(id)
    setcourseDetail(Details)
  }
  useEffect(() => {
    getCourseDetail()
  }, [])

  return (
    <div className={style.coursesHolder} data-theme={darkMode ? "darkNoBG" : "lightMode"}>
      <Price cost={courseDetail.cost} />      
      <div className={style.TitleAndImageHolder}>
        <Title title={courseDetail.title}/>
        <Image Image={courseDetail.imageAddress}/>
      </div>
    </div>
  )
}

export { Courses }