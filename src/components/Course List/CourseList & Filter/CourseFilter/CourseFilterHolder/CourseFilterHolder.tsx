import React from 'react'
import style from './CourseFilterHolder.module.css'
import { FilterItemsHolder } from '../FilterItems/FilterItemsHolder/FilterItemsHolder'
import { useGlobalState } from '../../../../../State/State';

const CourseFilterHolder = () => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <div className={style.filterHolder} data-theme={darkMode ? "darkSmall" : "lightMode"}>
      <FilterItemsHolder />
    </div>
  )
}

export {CourseFilterHolder}