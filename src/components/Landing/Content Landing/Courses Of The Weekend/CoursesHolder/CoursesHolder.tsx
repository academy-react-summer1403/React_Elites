import React, { useState } from 'react'
import { CoursesItemsHolder } from '../CoursesItems/CoursesItemsHolder/CoursesItemsHolder'
import { CoursesTitle } from './CoursesTitle'
import style from './Courses.module.css'
import reactJs from '../../../../../assets/Images/reactJs.png'
import figmaCourse from '../../../../../assets/Images/FigmaCourse.png'
import JSCourse from '../../../../../assets/Images/JSCourse.png'
import WebCourse from '../../../../../assets/Images/webCourse.png'
import { Button } from '../CoursesItems/CoursesItemsHolder/Button'
import axios from 'axios'

const CoursesHolder = (props) => {

  return (
    <div className={style.holder}>
        <CoursesTitle />
        {props.courseList.map((item, index) => {
        return (
          <CoursesItemsHolder 
            key={index}
            title={item.title}
            teacher={item.teacherName}
            price={item.cost}
            category={item.statusName}
            level={item.levelName}
            image={item.tumbImageAddress}
          />
        )
      })}
      <Button />
    </div>
  )
}

export {CoursesHolder}