import React from 'react'
import style from './Title.module.css'
import { useGlobalState } from '../../../../../../State/State';

const Title = (props) => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <div className={style.title} data-theme={darkMode ? "dark" : "lightMode"}>{props.title}</div>
  )
}

export {Title}