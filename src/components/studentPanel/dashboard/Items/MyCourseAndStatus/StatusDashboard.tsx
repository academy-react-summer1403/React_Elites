import style from "./../../../../../Style/studentPanel.module.css";
import { useGlobalState } from "../../../../../State/State";
import { NavLink } from "react-router-dom";
import { BottomStatusDashboard } from "./BottomStatusDashboard";
import { TopStatusDashboard } from "./TopStatusDashboard";
import { MiddleStatusDashboard } from "./middleStatusDashboard";

const StatusDashboard = ({options,series} ) => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');

  return (

    <div className={style.statusDashboard} data-theme={darkMode ? "dark" : "lightMode"}>
      <TopStatusDashboard />
      <MiddleStatusDashboard options={options}  series={series}/>
      <BottomStatusDashboard />
    </div>
  )
}

export { StatusDashboard }