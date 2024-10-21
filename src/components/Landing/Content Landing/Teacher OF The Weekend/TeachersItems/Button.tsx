import React from 'react'
import style from './TeachersItems.module.css'
import { useGlobalState } from '../../../../../State/State';

const Button = () => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <div className={style.button} data-theme={darkMode ? "dark" : "lightMode"}>صفحه اساتید</div>
  )
}

export {Button}