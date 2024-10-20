import React from 'react'
import style from './CourseFilterHolder.module.css'
import { FilterItemsHolder } from '../FilterItems/FilterItemsHolder/FilterItemsHolder'

const CourseFilterHolder = (props) => {
  return (
    <div className={style.filterHolder}>
      <FilterItemsHolder clicked={props.clicked} setClicked={props.setClicked} />
    </div>
  )
}

export {CourseFilterHolder}