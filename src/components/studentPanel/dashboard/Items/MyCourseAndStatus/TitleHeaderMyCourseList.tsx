import style from "./../../../../../Style/studentPanel.module.css";
import { useGlobalState } from "../../../../../State/State";
import { NavLink } from 'react-router-dom';

const TitleHeaderMyCourseList = () => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');

  return (

    <div className={style.titleHeaderMyCourseList}>
      <h1 data-theme={darkMode ? "darkNoBG" : "lightMode"}>دوره من</h1>
      <NavLink to='/Student-Panel/My-courses'>مشاهده بیشتر &gt;</NavLink>
    </div>
  )
}

export { TitleHeaderMyCourseList }