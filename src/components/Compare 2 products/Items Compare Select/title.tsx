import style from "../../../Style/Compare.module.css";
import { useTranslation } from 'react-i18next';
import React, { useEffect, useState } from 'react'

import { identifier } from "../../../core/services/Functions/ThemeIdentifier";
const Title = ({ title, title2 }) => {



  return (
    <div className={style.Discription}>
      <h1 className={style.titleCompare} data-theme={identifier("darkNoBGDisc","dark2NoBGDisc")}>نام دوره</h1>
      <div className={style.DiscriptionCompare}>
        <div className={style.discCompare} data-theme={identifier("darkNoBG","dark2NoBG")}>{title}</div>
        <div className={style.discCompare} data-theme={identifier("darkNoBG","dark2NoBG")}>{title2}</div>
      </div>
    </div>
  )
}

export { Title }