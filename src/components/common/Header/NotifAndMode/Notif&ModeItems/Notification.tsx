import React from 'react'
import style from '../../../../../Style/Notification.module.css'
import { useGlobalState } from '../../../../../State/State';


const Notification = () => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <>
        <div className={style.notification} data-theme={darkMode ? "notification" : "lightMode"}></div>
    </>
  )
}

export {Notification};