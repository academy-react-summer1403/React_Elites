import style from "./../../../../Style/studentPanel.module.css";
import { useGlobalState } from "../../../../State/State";
import { NavLink } from 'react-router-dom';
import { ListMyCoursesDashboard } from './MyCourseAndStatus/listMyCoursesDashboard';
import { StatusDashboard } from './MyCourseAndStatus/StatusDashboard';


const MyCourseAndStatus = () => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');

  return (
    <div className={style.MyCourseAndStatus}>
      <ListMyCoursesDashboard />
      <StatusDashboard />
    </div>
  )
}

export { MyCourseAndStatus }