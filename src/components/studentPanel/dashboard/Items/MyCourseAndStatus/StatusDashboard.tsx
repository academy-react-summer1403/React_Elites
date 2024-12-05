import style from "./../../../../../Style/studentPanel.module.css";

import { NavLink } from "react-router-dom";
import { BottomStatusDashboard } from "./BottomStatusDashboard";
import { TopStatusDashboard } from "./TopStatusDashboard";
import { MiddleStatusDashboard } from "./middleStatusDashboard";
import { identifier } from "../../../../../core/services/Functions/ThemeIdentifier";
const StatusDashboard = ({percentage}) => {


  return (

    <div className={style.statusDashboard} data-theme={identifier("dark")}>
      <TopStatusDashboard />
      <MiddleStatusDashboard percentage={percentage} />
      <BottomStatusDashboard />
    </div>
  )
}

export { StatusDashboard }