import React from 'react'
import style from './style.module.css'
import { useGlobalState } from '../../../../../../../../../State/State';

const Like = (props) => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <div className={style.like} data-theme={darkMode ? "dark" : "lightMode"}>لایک ها: {props.like}</div>
  )
}

export {Like}