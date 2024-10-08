import React from 'react'
import style from './CourseFilterHolder.module.css'
import { FilterItemsHolder } from '../FilterItems/FilterItemsHolder/FilterItemsHolder'

const CourseFilterHolder = () => {
  return (
    <div className={style.filterHolder}>
      <FilterItemsHolder />
    </div>
  )
}

export {CourseFilterHolder}