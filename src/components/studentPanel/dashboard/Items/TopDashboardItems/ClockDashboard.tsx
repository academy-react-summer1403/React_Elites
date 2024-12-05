import style from "../../../../../Style/studentPanel.module.css";

import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { identifier } from "../../../../../core/services/Functions/ThemeIdentifier";
const ClockDashboard = () => {

  const { t } = useTranslation();

  const [time, setTime] = useState()

  useEffect(() => {

    setInterval(() => {

      const dateObject = new Date()

      const hour = dateObject.getHours()
      const minute = dateObject.getMinutes()

      const currentTime = minute + ' : ' + hour
      
      setTime(currentTime)
    }, 1000)

  }, [])
  

  return (

    <div className={style.clock}>
      <div className={style.icon}></div>
      <div className={style.clockItem}>
        <p data-theme={identifier("darkNoBGDisc","dark2NoBGDisc")}>{t("Clock")}</p>
        <h1 data-theme={identifier("darkNoBG","dark2NoBG")}>{time}</h1>
      </div>
    </div>
  )
}

export { ClockDashboard }