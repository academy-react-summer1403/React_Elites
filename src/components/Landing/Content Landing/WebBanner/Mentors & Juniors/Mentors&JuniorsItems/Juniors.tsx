import React from 'react'
import style from './Juniors.module.css'
import { useGlobalState } from '../../../../../../State/State';

const Juniors = (props) => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <div className={style.container}>
      <div className={style.juniors}></div>
      <div className={style.studentCount}  data-theme={darkMode ? "dark" : "lightMode"}> + {props.studentCount.studentCount} </div>
      <div className={style.title}  data-theme={ darkMode ? "dark" : "lightMode"}>دانشجو فعال در دوره</div>

    </div>
  )
}

export {Juniors}