import React from 'react'
import style from './Title.module.css'
import { useGlobalState } from '../../../../../../State/State';
import { BeatLoader } from 'react-spinners';

const Title = ({title, isLoading}) => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <>
    {isLoading ? <BeatLoader /> : <div className={style.title} data-theme={darkMode ? "dark" : "lightMode"}>{title}</div>}
    </>
  )
}

export {Title}