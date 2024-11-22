import style from "./../../../../../Style/studentPanel.module.css";
import { useGlobalState } from "../../../../../State/State";
import { NavLink } from 'react-router-dom';


const CoursesAndBlogsHolder = () => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');

  return (

    <div className={style.CoursesAndBlogsHolder}>
      <div className={style.CoursesAndBlogsLine}></div>
      <h1 className={style.CoursesAndBlogsSt} data-theme={darkMode ? "darkNoBGDisc" : "lightMode"}>دوره ها و بلاگ ها </h1>
      <div className={style.CoursesAndBlogsLine}></div>
    </div>
  )
}

export { CoursesAndBlogsHolder }