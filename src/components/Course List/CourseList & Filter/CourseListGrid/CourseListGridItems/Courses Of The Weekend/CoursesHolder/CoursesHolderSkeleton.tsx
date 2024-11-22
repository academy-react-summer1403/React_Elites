import React from 'react'
import style from './Courses.module.css'
import styleItems from '../CoursesItems/Items/style.module.css'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const CoursesHolderSkeleton = ({cards}) => {
  return Array(cards)
  .fill(0)
  .map((item, i) => (
        <div style={{width: '343px'}}>
            <Skeleton width={343} height={293} baseColor="#dbdbdb" highlightColor="#ffffff" />
            <Skeleton width={343} height={10} count={2} baseColor="#dbdbdb" highlightColor="#ffffff" />
        </div>
  ))
}

export {CoursesHolderSkeleton}