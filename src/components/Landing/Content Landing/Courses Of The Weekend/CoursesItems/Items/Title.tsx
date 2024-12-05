import React from 'react'
import style from './style.module.css'
import { useGlobalState } from '../../../../../../State/State';
import Skeleton from 'react-loading-skeleton';
import { identifier } from '../../../../../../core/services/Functions/ThemeIdentifier';
const Title = ({title}) => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <div className={style.title} data-theme={identifier("darkNoBG")}>{title}</div>
  )
}

export {Title}