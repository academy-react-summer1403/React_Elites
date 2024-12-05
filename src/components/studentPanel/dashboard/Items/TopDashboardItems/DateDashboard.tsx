import style from "../../../../../Style/studentPanel.module.css";

import { useTranslation } from "react-i18next";
import { useState } from "react";
import { identifier } from "../../../../../core/services/Functions/ThemeIdentifier";
const DateDashboard = () => {

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
        <p data-theme={identifier("darkNoBGDisc","dark2NoBGDisc")}>{t("date")}</p>
        <h1 data-theme={identifier("darkNoBG","dark2NoBG")}>{currentDate}</h1>
      </div>
    </div>
  )
}

export { DateDashboard }