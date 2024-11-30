import React, { useEffect, useState } from 'react'
import style from './ReservedCourses.module.css'
import { ReservedTitle } from '../Reserved Courses Items/ReservedTitle'
import { Courses } from '../Reserved Courses Items/Courses'
import { useGlobalState } from '../../../../../State/State'
import { getCourseById } from '../../../../../core/services/api/courseById'
import { getCourseReserve } from '../../../../../core/services/api/getCourseReserveId'
import { getMyCourse } from '../../../../../core/services/api/getMyCourse'

const ReservedCourses = () => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  const [coursesArr, setcoursesArr] = useState([])
  const getCourses = async () => {
    let res = await getMyCourse()
    setcoursesArr(res.listOfMyCourses)
  }
  useEffect(() => {
    getCourses()
  }, [])
  return (
    <div className={style.reserved} data-theme={darkMode ? "darkNoBG" : "lightMode"}>
      <div className={style.coursesHolder}>
        {coursesArr.map((item, index) => {
          return (
            <Courses
              reserverDate={item.reserverDate}
              id={item.courseId}
            />
          )

        })}
      </div>
    </div>
  )
}

export { ReservedCourses }