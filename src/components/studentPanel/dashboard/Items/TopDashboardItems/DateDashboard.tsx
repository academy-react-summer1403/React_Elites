import style from "../../../../../Style/studentPanel.module.css";
import { useGlobalState } from "../../../../../State/State";

const DateDashboard = () => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');

  return (

    <div className={style.date}>
      <div className={style.icon}></div>
      <div className={style.dateItem}>
        <p data-theme={darkMode ? "darkNoBGDisc" : "lightMode"}>تاریخ</p>
        <h1 data-theme={darkMode ? "darkNoBG" : "lightMode"}>29 اردیبهشت 1403</h1>
      </div>
    </div>
  )
}

export { DateDashboard }