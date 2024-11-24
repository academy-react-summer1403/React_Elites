import React from 'react'
import style from './style.module.css'
import { useGlobalState } from '../../../../../../../State/State';
import { ClipLoader } from 'react-spinners';

const Comments = ({comments, isLoading}) => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <>
    {isLoading ? <ClipLoader /> :<div className={style.comments} data-theme={darkMode ? "darkNoBG" : "lightMode"}> نظرات ({comments})  + </div>}
    </>
  )
}

export {Comments}