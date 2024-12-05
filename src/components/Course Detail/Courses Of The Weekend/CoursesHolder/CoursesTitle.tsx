import React from 'react'
import style from './Courses.module.css'

import { identifier } from '../../../../core/services/Functions/ThemeIdentifier';
const CoursesTitle = () => {
 
  return (
    <div className={style.title} data-theme={identifier("dark")}>دوره های مرتبط </div>
  )
}

export {CoursesTitle}