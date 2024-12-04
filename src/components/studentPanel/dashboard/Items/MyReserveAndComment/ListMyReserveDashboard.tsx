import style from "./../../../../../Style/studentPanel.module.css";
import { useGlobalState } from "../../../../../State/State";
import { NavLink } from 'react-router-dom';
import { ReserveCardsList } from '../../../studentCurse-Blog/My Reserve/Reserve Grid/index/ReserveCardsList';
import { TitleHeaderMyReserveList } from './TitleHeaderMyReserveList';
import { HeaderList } from './HeaderList';

const ListMyReserveDashboard = ({userReserveCoursesObj, isLoading}) => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');

  return (
      <div className={style.listMyReserveDashboard} data-theme={darkMode ? "dark" : "lightMode"}>
        <TitleHeaderMyReserveList />
        <HeaderList />
        <ReserveCardsList isLoading={isLoading} userReserveCoursesObj={userReserveCoursesObj} />
      </div>
  )
}

export { ListMyReserveDashboard }