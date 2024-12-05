import style from "./../../../../Style/studentPanel.module.css";
import { useGlobalState } from "../../../../State/State";
import { NavLink } from 'react-router-dom';
import { ListMyCoursesDashboard } from './MyCourseAndStatus/listMyCoursesDashboard';
import { StatusDashboard } from './MyCourseAndStatus/StatusDashboard';
import { identifier } from "../../../../core/services/Functions/ThemeIdentifier";

const MyCourseAndStatus = ({percentage}) => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');

  return (
    <div className={style.MyCourseAndStatus}>
      <ListMyCoursesDashboard />
      <StatusDashboard percentage={percentage} />
    </div>
  )
}

export { MyCourseAndStatus }