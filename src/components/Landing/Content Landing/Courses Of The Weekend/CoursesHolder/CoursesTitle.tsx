import React from 'react'
import style from './Courses.module.css'
import styleDark from './../../../../../Style/DarkMode.module.css'

const CoursesTitle = () => {
  return (
    <div className={`${style.title} ${styleDark.title}`}>دوره های برتر هفته</div>
  )
}

export {CoursesTitle}