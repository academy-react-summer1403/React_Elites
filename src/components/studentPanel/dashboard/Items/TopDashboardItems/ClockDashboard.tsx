import style from "../../../../../Style/studentPanel.module.css";
import { useGlobalState } from "../../../../../State/State";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { identifier } from "../../../../../core/services/Functions/ThemeIdentifier";
const ClockDashboard = () => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
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
        <p data-theme={identifier("darkNoBGDisc")}>{t("Clock")}</p>
        <h1 data-theme={identifier("darkNoBG")}>{time}</h1>
      </div>
    </div>
  )
}

export { ClockDashboard }