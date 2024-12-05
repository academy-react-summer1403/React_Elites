import style from "../../../../Style/studentPanel.module.css";
import { useGlobalState } from "../../../../State/State";
import { LeftTopDashboard } from "./TopDashboardItems/LeftTopDashboard";
import { RightTopDashboard } from "./TopDashboardItems/RightTopDashboard";
import { identifier } from "../../../../core/services/Functions/ThemeIdentifier";
const TopDashboard = ({user}) => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');

  return (
          <div className={style.TopDashboard}>
            <RightTopDashboard user={user}/>
            <LeftTopDashboard user={user}/>
          </div>
  )
}

export { TopDashboard }