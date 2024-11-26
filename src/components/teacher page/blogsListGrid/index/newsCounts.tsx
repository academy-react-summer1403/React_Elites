import React from 'react'
import style from './cardsBlogsListStyle.module.css'
import { useGlobalState } from '../../../../State/State';

const NewsCounts = (props) => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <div className={style.count} data-theme={darkMode ? "darkNoBG" : "lightMode"}> خبر ها : {props.countN}</div>
  )
}

export {NewsCounts}