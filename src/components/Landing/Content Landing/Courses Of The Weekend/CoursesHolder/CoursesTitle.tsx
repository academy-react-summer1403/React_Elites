import React from 'react'
import style from './Courses.module.css'
import { useGlobalState } from '../../../../../State/State';

const CoursesTitle = () => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <div className={style.title} data-theme={darkMode ? "dark" : "lightMode"}>دوره های برتر هفته</div>
  )
}

export {CoursesTitle}