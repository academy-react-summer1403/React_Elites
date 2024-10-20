import React from 'react'
import style from './ViewsAndDate.module.css'
import { useGlobalState } from '../../../../../../../../State/State';

const Views = (props) => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <div className={style.views} data-theme={darkMode ? "dark" : "lightMode"}>{props.views}</div>
  )
}

export {Views}