import React from 'react'
import style from './Courses.module.css'
import { useGlobalState } from '../../../../State/State';
import { identifier } from '../../../../core/services/Functions/ThemeIdentifier';
const CoursesTitle = () => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode'); 
  return (
    <div className={style.title} data-theme={identifier("dark")}>دوره های مرتبط </div>
  )
}

export {CoursesTitle}