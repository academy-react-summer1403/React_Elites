import style from "./../../../../../Style/studentPanel.module.css";
import { useGlobalState } from "../../../../../State/State";
import { NavLink } from 'react-router-dom';
import { useTranslation } from "react-i18next";

const TitleHeaderMyCourseList = () => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  const { t } = useTranslation();

  return (

    <div className={style.titleHeaderMyCourseList}>
      <h1 data-theme={darkMode ? "darkNoBG" : "lightMode"}>{t("myCourse")}</h1>
      <NavLink to='/Student-Panel/My-courses'>{t("ButtonViewAll")} &gt;</NavLink>
    </div>
  )
}

export { TitleHeaderMyCourseList }