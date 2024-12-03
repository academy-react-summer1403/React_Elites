import style from "../../../../../Style/studentPanel.module.css";
import { useGlobalState } from "../../../../../State/State";
import { useEffect } from "react";

const ClockDashboard = () => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');

  let date = new Date()

  useEffect(() => {
    console.log()
  }, [])
  

  return (

    <div className={style.clock}>
      <div className={style.icon}></div>
      <div className={style.clockItem}>
        <p data-theme={darkMode ? "darkNoBGDisc" : "lightMode"}>ساعت</p>
        <h1 data-theme={darkMode ? "darkNoBG" : "lightMode"}>{}</h1>
      </div>
    </div>
  )
}

export { ClockDashboard }