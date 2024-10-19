import React from 'react'
import style from './ReservedCourses.module.css'
import { ReservedTitle } from '../Reserved Courses Items/ReservedTitle'
import { Courses } from '../Reserved Courses Items/Courses'

const ReservedCourses = () => {
  return (
    <div className={style.reserved}>
        <ReservedTitle />
        <Courses />
        <Courses />
        <Courses />
    </div>
  )
}

export {ReservedCourses}