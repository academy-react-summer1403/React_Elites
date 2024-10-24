import React from 'react'
import style from './Publisher.module.css'
import { useGlobalState } from '../../../../../../../../State/State';

const Publisher = ({pub}) => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <div className={style.publisher} data-theme={darkMode ? "dark" : "lightMode"}>{pub}</div>
  )
}

export {Publisher}