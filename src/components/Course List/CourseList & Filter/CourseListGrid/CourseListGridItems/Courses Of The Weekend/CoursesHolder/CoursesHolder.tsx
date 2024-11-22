import React, { useState } from 'react'
import { CoursesItemsHolder } from '../CoursesItems/CoursesItemsHolder/CoursesItemsHolder'
import style from './Courses.module.css'
import { CoursesHolderSkeleton } from './CoursesHolderSkeleton'

const CoursesHolder = ({courseList, isLoading}) => {


  return (
    <div className={style.holder}>

      {isLoading && <CoursesHolderSkeleton cards={9} />}
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