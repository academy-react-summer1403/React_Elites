import React from 'react'
import style from './style.module.css'
import { useGlobalState } from '../../../../../../State/State';
import Skeleton from 'react-loading-skeleton';

const Title = ({title}) => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <div className={style.title} data-theme={darkMode ? "darkNoBG" : "lightMode"}>{title}</div>
  )
}

export {Title}