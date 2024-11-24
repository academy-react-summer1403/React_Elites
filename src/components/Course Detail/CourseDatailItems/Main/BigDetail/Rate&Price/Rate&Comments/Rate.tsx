import React from 'react'
import style from './style.module.css'
import { useGlobalState } from '../../../../../../../State/State';
import { ClipLoader } from 'react-spinners';

const Rate = ({rate, isLoading}) => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <>
        <div className={style.rate}></div>
        {isLoading ? <ClipLoader /> : <div className={style.number} data-theme={darkMode ? "darkNoBG" : "lightMode"}>({rate})</div>}
    </>

  )
}

export {Rate}