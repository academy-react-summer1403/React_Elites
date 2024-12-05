import style from "../../../Style/Compare.module.css";
import { useTranslation } from 'react-i18next';
import React, { useEffect, useState } from 'react'
import { useGlobalState } from "../../../State/State";

const Title = ({ title, title2 }) => {

  const [darkMode, setDarkMode] = useGlobalState('DarkMode');

  return (
    <div className={style.Discription}>
      <h1 className={style.titleCompare} data-theme={darkMode ? "darkNoBGDisc" : "lightMode"}>نام دوره</h1>
      <div className={style.DiscriptionCompare}>
        <div className={style.discCompare} data-theme={darkMode ? "darkNoBG" : "lightMode"}>{title}</div>
        <div className={style.discCompare} data-theme={darkMode ? "darkNoBG" : "lightMode"}>{title2}</div>
      </div>
    </div>
  )
}

export { Title }