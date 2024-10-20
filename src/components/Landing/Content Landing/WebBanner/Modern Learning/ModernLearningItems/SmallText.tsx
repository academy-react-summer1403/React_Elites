import React from 'react'
import style from './SmallText.module.css'
import { useGlobalState } from '../../../../../../State/State';

const SmallText = () => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <div className={style.smallText}  data-theme={darkMode ? "dark" : "lightMode"}>آکادمی آموزش تخصصی برنامه نویسی بحر  <br /> از کودکان تا بزرگسال</div>
  )
}

export {SmallText}