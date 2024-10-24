import React from 'react'
import style from './style.module.css'
import { useGlobalState } from '../../../../../../../State/State';

const Rate = ({rate}) => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <>
        <div className={style.rate}></div>
        <div className={style.number} data-theme={darkMode ? "darkNoBG" : "lightMode"}>({rate})</div>
    </>

  )
}

export {Rate}