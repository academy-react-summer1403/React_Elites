import style from "../../../Style/Compare.module.css";
import { useTranslation } from 'react-i18next';
import React, { useEffect, useState } from 'react'

import { identifier } from "../../../core/services/Functions/ThemeIdentifier";
const Level = ({ level, level2 }) => {
  const {t} = useTranslation();


  return (
    <div className={style.Discription}>
        <h1 className={style.titleCompare} data-theme={identifier("darkNoBGDisc","dark2NoBGDisc")}>سطح آموزشی</h1>
        <div className={style.DiscriptionCompare}>
          <div className={style.discCompare} data-theme={identifier("darkNoBG","dark2NoBG")}>{level}</div>
          <div className={style.discCompare} data-theme={identifier("darkNoBG","dark2NoBG")}>{level2}</div>

        </div>
      </div>
  )
}

export { Level }