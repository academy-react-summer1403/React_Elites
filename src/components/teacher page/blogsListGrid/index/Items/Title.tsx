import React from 'react'
import style from './style.module.css'
import { useGlobalState } from '../../../../../State/State';

const Title = ({title}) => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <div className={style.title} data-theme={darkMode ? "dark" : "lightMode"}> استاد {title}</div>
  )
}

export {Title}