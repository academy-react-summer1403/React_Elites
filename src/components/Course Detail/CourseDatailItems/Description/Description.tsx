import React from 'react'
import style from './Description.module.css'
import { useGlobalState } from '../../../../State/State';

const Description = ({description}) => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <div className={style.containerDesc}>
        <div className={style.title} data-theme={darkMode ? "darkNoBG" : "lightMode"}> توضیحات دوره </div>
        <p className={style.paragraph} data-theme={darkMode ? "darkNoBG" : "lightMode"}>{description}</p>
        <div className={style.copyLink}>کپی کردن لینک صفحه</div>
        <div className={style.rate}></div>
        <div className={style.yourRate}> امتیاز بدید </div>
    </div>

  )
}

export {Description}