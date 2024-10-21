import React from 'react'
import style from './Bottun.module.css'
import { useGlobalState } from '../../../../../../State/State';

const Bottun = () => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <div className={style.Button} data-theme={darkMode ? "darkSmall" : "lightMode"}> جدیدترین دوره ها </div>
  )
}

export {Bottun};