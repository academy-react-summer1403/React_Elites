import React from 'react'
import style from './cardsBlogsListStyle.module.css'
import { useGlobalState } from '../../../../State/State';

const NewsCounts = (props) => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <div className={style.courseCounts} data-theme={darkMode ? "dark" : "lightMode"}>تعداد خبر ها:{props.countN}</div>
  )
}

export {NewsCounts}