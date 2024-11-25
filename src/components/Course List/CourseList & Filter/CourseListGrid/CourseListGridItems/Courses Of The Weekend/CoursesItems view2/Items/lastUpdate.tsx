import React from 'react'
import style from './style.module.css'
import { useGlobalState } from '../../../../../../../../State/State';
import { dateConvertor } from '../../../../../../../../core/services/Functions/DateMiladi';

const LastUpdate = ({lastUpdate}) => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <div className={style.lastUpdate} data-theme={darkMode ? "dark" : "lightMode"}>آخرین تغییر:{dateConvertor(lastUpdate)}</div>
  )
}

export {LastUpdate}