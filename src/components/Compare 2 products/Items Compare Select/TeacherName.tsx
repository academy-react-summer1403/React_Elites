import style from "../../../Style/Compare.module.css";
import { useTranslation } from 'react-i18next';
import React, { useEffect, useState } from 'react'
import { useGlobalState } from "../../../State/State";

const TeacherName = ({ teacherName }) => {
  const {t} = useTranslation();
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');

  return (
    <div className={style.Discription}>
        <h1 className={style.titleCompare} data-theme={darkMode ? "darkNoBGDisc" : "lightMode"}>نام استاد</h1>
        <div className={style.DiscriptionCompare}>
          <div className={style.discCompare} data-theme={darkMode ? "darkNoBG" : "lightMode"}>{teacherName}</div>


        </div>
      </div>
  )
}

export { TeacherName }