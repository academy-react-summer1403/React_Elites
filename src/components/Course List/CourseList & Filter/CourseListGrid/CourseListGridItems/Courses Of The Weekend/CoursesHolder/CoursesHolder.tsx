import React, { useState } from 'react'
import { CoursesItemsHolder } from '../CoursesItems/CoursesItemsHolder/CoursesItemsHolder'
import style from './Courses.module.css'

const CoursesHolder = ({courseList}) => {



  return (
    <div className={style.holder}>
        {courseList.map((item, index) => {
        return (
          <CoursesItemsHolder 
            id={item.courseId}
            title={item.title}
            teacher={item.teacherName}
            price={item.cost}
            category={item.technologyList}
            level={item.levelName}
            image={item.tumbImageAddress}
            key={index}
          />
        )
      })}
    </div>
  )
}

export {CoursesHolder}