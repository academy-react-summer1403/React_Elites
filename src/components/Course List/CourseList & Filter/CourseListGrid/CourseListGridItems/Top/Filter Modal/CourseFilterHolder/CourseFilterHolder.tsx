import React from 'react'
import style from './CourseFilterHolder.module.css'
import { useGlobalState } from '../../../../../../../../State/State';
import { FilterItemsHolder } from '../FilterItems/FilterItemsHolder/FilterItemsHolder';
import { identifier } from '../../../../../../../../core/services/Functions/ThemeIdentifier';

const CourseFilterHolder = ({setClicked}) => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <div className={style.filterHolder}  data-theme={identifier("darkSmall")}>
        <FilterItemsHolder setClicked={setClicked} />
    </div>
  )
}

export {CourseFilterHolder}