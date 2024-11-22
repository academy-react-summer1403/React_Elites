import style from "../../../../../Style/studentPanel.module.css";
import { useGlobalState } from "../../../../../State/State";

const ClockDashboard = () => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');

  return (

    <div className={style.clock}>
      <div className={style.icon}></div>
      <div className={style.clockItem}>
        <p data-theme={darkMode ? "darkNoBGDisc" : "lightMode"}>ساعت</p>
        <h1 data-theme={darkMode ? "darkNoBG" : "lightMode"}>20:20</h1>
      </div>
    </div>
  )
}

export { ClockDashboard }