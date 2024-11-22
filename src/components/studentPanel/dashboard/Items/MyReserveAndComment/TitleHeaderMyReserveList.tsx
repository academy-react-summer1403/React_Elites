import style from "./../../../../../Style/studentPanel.module.css";
import { useGlobalState } from "../../../../../State/State";
import { NavLink } from 'react-router-dom';


const TitleHeaderMyReserveList = () => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');

  return (
    <div className={style.titleHeaderMyCourseList}>
      <h1>رزرو من</h1>
      <NavLink to='/Student-Panel/My-Reserve'>مشاهده بیشتر &gt;</NavLink>
    </div>
  )
}

export { TitleHeaderMyReserveList }