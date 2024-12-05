import React from 'react'
import style from './ViewsAndDate.module.css'
import { useGlobalState } from '../../../../../../../../State/State';
import { identifier } from '../../../../../../../../core/services/Functions/ThemeIdentifier';
const Views = (props) => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <div className={style.views} data-theme={identifier("ViewBlog")}>{props.views}</div>
  )
}

export {Views}