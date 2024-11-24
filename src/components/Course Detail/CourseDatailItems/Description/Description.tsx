import React from 'react'
import style from './Description.module.css'
import { useGlobalState } from '../../../../State/State';
import { PropagateLoader, SyncLoader } from 'react-spinners';

const Description = ({description, isLoading}) => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <div className={style.containerDesc}>
        <div className={style.title} data-theme={darkMode ? "darkNoBG" : "lightMode"}> توضیحات دوره </div>
        {isLoading ? <SyncLoader /> : <p className={style.paragraph} data-theme={darkMode ? "darkNoBG" : "lightMode"}>{description}</p>}
        <div className={style.copyLink}>کپی کردن لینک صفحه</div>
        <div className={style.rate}></div>
        <div className={style.yourRate}> امتیاز بدید </div>
    </div>

  )
}

export {Description}