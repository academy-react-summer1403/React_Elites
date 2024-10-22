import React from 'react'
import style from './style.module.css'
import Bahr from '../../../../../assets/Images/Bahr.jpg'
import { useGlobalState } from '../../../../../State/State';

const Footer = () => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <div className={style.footer}>
        <div className={style.likeAndDislikes}>
            <div className={style.count} data-theme={darkMode ? "darkNoBG" : "lightMode"}>1</div>
            <div className={style.like}></div>
            <div className={style.count} data-theme={darkMode ? "darkNoBG" : "lightMode"}>20</div>
            <div className={style.dislike}></div>
        </div>
        <div className={style.user}>
            <div className={style.username} data-theme={darkMode ? "darkNoBG" : "lightMode"}>مهدی امیرخانی</div>
            <img className={style.profile} src={Bahr} />
            <div className={style.date} data-theme={darkMode ? "darkNoBG" : "lightMode"}>29 اردیبهشت 1403</div>
        </div>
    </div>
  )
}

export {Footer}