import style from "./../../../../Style/studentPanel.module.css";
import { useGlobalState } from "../../../../State/State";
import { NavLink } from 'react-router-dom';
import { ListMyReserveDashboard } from './MyReserveAndComment/ListMyReserveDashboard';
import { CommentDashboard } from './MyReserveAndComment/CommentDashboard';

const MyReserveAndComment = ({userReserveCoursesObj}) => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');

  return (
    <div className={style.MyReserveAndComment}>
      <ListMyReserveDashboard userReserveCoursesObj={userReserveCoursesObj}/>
      <CommentDashboard />
    </div>
  )
}

export { MyReserveAndComment }