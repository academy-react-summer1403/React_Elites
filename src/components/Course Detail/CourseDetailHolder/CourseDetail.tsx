import React from 'react'
import style from './CourseDetail.module.css'
import { Main } from '../CourseDatailItems/Main/Main'
import { Description } from '../CourseDatailItems/Description/Description'
import { AllComments } from '../CourseDatailItems/Comments/Holder/AllComments'
import { CoursesHolder } from '../Courses Of The Weekend/CoursesHolder/CoursesHolder'
import { useGlobalState } from '../../../State/State'

const CourseDetail = () => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <div className={style.body} data-theme={darkMode ? "dark" : "lightMode"}>
      <div className={style.holder}>
        <Main />
        <Description />
        <AllComments />
        <CoursesHolder />
      </div>
    </div>
  )
}

export {CourseDetail}