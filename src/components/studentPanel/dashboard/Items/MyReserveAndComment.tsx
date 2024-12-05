import style from "./../../../../Style/studentPanel.module.css";
import { useGlobalState } from "../../../../State/State";
import { NavLink } from 'react-router-dom';
import { ListMyReserveDashboard } from './MyReserveAndComment/ListMyReserveDashboard';
import { CommentDashboard } from './MyReserveAndComment/CommentDashboard';
import { identifier } from "../../../../core/services/Functions/ThemeIdentifier";
const MyReserveAndComment = ({userReserveCoursesObj, isLoading}) => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');

  return (
    <div className={style.MyReserveAndComment}>
      <ListMyReserveDashboard isLoading={isLoading} userReserveCoursesObj={userReserveCoursesObj}/>
      <CommentDashboard />
    </div>
  )
}

export { MyReserveAndComment }