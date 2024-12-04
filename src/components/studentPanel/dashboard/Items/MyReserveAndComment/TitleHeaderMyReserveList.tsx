import style from "./../../../../../Style/studentPanel.module.css";
import { useGlobalState } from "../../../../../State/State";
import { NavLink } from 'react-router-dom';


const TitleHeaderMyReserveList = () => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');

  return (
    <div className={style.titleHeaderMyCourseList}>
      <h1 data-theme={darkMode ? "darkNoBG" : "lightMode"}>رزرو من</h1>
      <NavLink className={style.seeMore} to='/Student-Panel/My-Reserve'>مشاهده بیشتر </NavLink>
    </div>
  )
}

export { TitleHeaderMyReserveList }