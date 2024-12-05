import style from "../../../../../Style/studentPanel.module.css";
import { useGlobalState } from "../../../../../State/State";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { identifier } from "../../../../../core/services/Functions/ThemeIdentifier";
const DateDashboard = () => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  const { t } = useTranslation();

  function getDate() {
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();
    return `${month}/${date}/${year}`;
  }
  const [currentDate, setCurrentDate] = useState(getDate());
  
  return (

    <div className={style.date}>
      <div className={style.icon}></div>
      <div className={style.dateItem}>
        <p data-theme={identifier("darkNoBGDisc")}>{t("date")}</p>
        <h1 data-theme={identifier("darkNoBG")}>{currentDate}</h1>
      </div>
    </div>
  )
}

export { DateDashboard }