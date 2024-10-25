import React from 'react'
import style from './ReservedCourses.module.css'
import { ReservedTitle } from '../Reserved Courses Items/ReservedTitle'
import { Courses } from '../Reserved Courses Items/Courses'
import { useGlobalState } from '../../../../../State/State'

const ReservedCourses = () => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <div className={style.reserved} data-theme={darkMode ? "darkNoBG" : "lightMode"}>
        <ReservedTitle />
        <Courses />
        <Courses />
        <Courses />
    </div>
  )
}

export {ReservedCourses}