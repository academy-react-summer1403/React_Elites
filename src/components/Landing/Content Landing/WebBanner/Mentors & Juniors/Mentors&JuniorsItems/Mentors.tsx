import React from 'react'
import style from './Mentors.module.css'
import { useGlobalState } from '../../../../../../State/State';

const Mentors = (props) => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <div className={style.container}>
      <div className={style.mentors}></div>
      <div className={style.teacherCount}  data-theme={darkMode ? "dark" : "lightMode"}> + {props.teacherCount.teacherCount} </div>
      <div className={style.title}  data-theme={darkMode ? "dark" : "lightMode"}>اساتید برتر جهان</div>
    </div>
  )
}

export {Mentors}