import React from 'react'
import style from './style.module.css'
import { useGlobalState } from '../../../../../../../State/State';
import { ClipLoader } from 'react-spinners';
import { identifier } from '../../../../../../../core/services/Functions/ThemeIdentifier';
const Comments = ({comment, isLoading}) => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <>
    {isLoading ? <ClipLoader /> : <div className={style.comments} data-theme={identifier("dark")}> نظرات ({comment})  + </div>}
    </>
  )
}

export {Comments}