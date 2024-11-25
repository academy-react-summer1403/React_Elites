import React, { useState } from 'react'
import { CoursesItemsHolder } from '../CoursesItems/CoursesItemsHolder/CoursesItemsHolder'
import { CoursesItemsHolderView2 } from '../CoursesItems view2/CoursesItemsHolder/CoursesItemsHolder'
import style from './Courses.module.css'
import { CoursesHolderSkeleton } from './CoursesHolderSkeleton'

const CoursesHolder = ({courseList, isLoading}) => {

  return (
    <div className={style.holder}>

      {isLoading && <CoursesHolderSkeleton cards={9} />}
        {courseList && courseList.map((item, index) => {
        return (
          <CoursesItemsHolderView2
            id={item.courseId}
            title={item.title}
            teacher={item.teacherName}
            price={item.cost}
            category={item.technologyList}
            level={item.levelName}
            image={item.tumbImageAddress}
            likeCount={item.likeCount}
            dissLikeCount={item.dissLikeCount}
            currentRegistrants={item.currentRegistrants}
            classRoomName={item.classRoomName}
            lastUpdate={item.lastUpdate}
            key={index}
          />
        )
      })}
    </div>
  )
}

export {CoursesHolder}