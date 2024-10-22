import React from 'react'
import style from './style.module.css'
import { useGlobalState } from '../../../../../../../State/State';

const Rate = () => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <>
        <div className={style.rate}></div>
        <div className={style.number} data-theme={darkMode ? "dark" : "lightMode"}>(5)</div>
    </>

  )
}

export {Rate}