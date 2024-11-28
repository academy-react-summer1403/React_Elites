import React from 'react'
import style from './CourseFilterHolder.module.css'
import { useGlobalState } from '../../../../../../../../State/State';
import { FilterItemsHolder } from '../FilterItems/FilterItemsHolder/FilterItemsHolder';


const CourseFilterHolder = ({setClicked}) => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <div className={style.filterHolder}  data-theme={darkMode ? "darkSmall" : "lightMode"}>
        <FilterItemsHolder setClicked={setClicked} />
    </div>
  )
}

export {CourseFilterHolder}