import React from 'react'
import style from './style.module.css'
import { useGlobalState } from '../../../../../State/State';

const View = (props) => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <div className={style.view} jhj>{props.view} </div>
  )
}

export {View}