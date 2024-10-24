import React from 'react'
import style from './cardsBlogsListStyle.module.css'
import { useGlobalState } from '../../../../State/State';

const CourseCounts = (props) => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <div className={style.courseCounts} data-theme={darkMode ? "dark" : "lightMode"}>تعداد دوره ها:{props.count}</div>
  )
}

export {CourseCounts}