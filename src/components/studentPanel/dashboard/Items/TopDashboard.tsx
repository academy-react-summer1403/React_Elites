import style from "../../../../Style/studentPanel.module.css";
import { useGlobalState } from "../../../../State/State";
import { LeftTopDashboard } from "./TopDashboardItems/LeftTopDashboard";
import { RightTopDashboard } from "./TopDashboardItems/RightTopDashboard";

const TopDashboard = () => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');

  return (
          <div className={style.TopDashboard}>
            <RightTopDashboard />
            <LeftTopDashboard />
          </div>
  )
}

export { TopDashboard }