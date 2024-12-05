import style from "../../../Style/Compare.module.css";
import { useTranslation } from 'react-i18next';
import React, { useEffect, useState } from 'react'
import { useGlobalState } from "../../../State/State";
import { identifier } from "../../../core/services/Functions/ThemeIdentifier";
const Title = ({ title, title2 }) => {

  const [darkMode, setDarkMode] = useGlobalState('DarkMode');

  return (
    <div className={style.Discription}>
      <h1 className={style.titleCompare} data-theme={identifier("darkNoBGDisc")}>نام دوره</h1>
      <div className={style.DiscriptionCompare}>
        <div className={style.discCompare} data-theme={identifier("darkNoBG")}>{title}</div>
        <div className={style.discCompare} data-theme={identifier("darkNoBG")}>{title2}</div>
      </div>
    </div>
  )
}

export { Title }