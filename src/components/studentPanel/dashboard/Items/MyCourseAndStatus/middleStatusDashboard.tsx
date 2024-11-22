import style from "./../../../../../Style/studentPanel.module.css";
import { useGlobalState } from "../../../../../State/State";
import { NavLink } from "react-router-dom";


const MiddleStatusDashboard = () => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');

  return (

    <div className={style.middleStatusDashboard}>
      <div>
        <div data-theme={darkMode ? "darkNoBG" : "lightMode"}>70%</div>
      </div>
    </div>
  )
}

export { MiddleStatusDashboard }