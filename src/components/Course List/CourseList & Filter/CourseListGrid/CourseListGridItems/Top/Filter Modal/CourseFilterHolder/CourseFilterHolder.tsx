import React from 'react'
import style from './CourseFilterHolder.module.css'
import { FilterItemsHolder } from '../FilterItems/FilterItemsHolder/FilterItemsHolder'
import { useGlobalState } from '../../../../../../../../State/State';

const CourseFilterHolder = (props) => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <div className={style.filterHolder}  data-theme={darkMode ? "darkSmall" : "lightMode"}>
      <FilterItemsHolder clicked={props.clicked} setClicked={props.setClicked} />
    </div>
  )
}

export {CourseFilterHolder}