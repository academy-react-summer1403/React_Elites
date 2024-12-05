import style from "../../../../../Style/studentPanel.module.css";
import { useGlobalState } from "../../../../../State/State";
import { ClockDashboard } from "./ClockDashboard";
import { DateDashboard } from "./DateDashboard";
import { identifier } from "../../../../../core/services/Functions/ThemeIdentifier";
const BottomRightTopDashboard = () => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');

  return (

    <div className={style.BottomRightTopDashboard}>
      <ClockDashboard />
      <DateDashboard />
    </div>
  )
}

export { BottomRightTopDashboard }