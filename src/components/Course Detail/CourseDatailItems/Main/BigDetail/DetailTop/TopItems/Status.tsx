import React from 'react'
import style from './style.module.css'
import { useGlobalState } from '../../../../../../../State/State';

const Status = () => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <div className={style.Status} data-theme={darkMode ? "darkNoBG" : "lightMode"}>
        <div className={style.topS} data-theme={darkMode ? "dark" : "lightMode"}>وضعیت</div>
        <div className={style.bottomS}>درحال برگزاری</div>
    </div>
  )
}

export {Status}