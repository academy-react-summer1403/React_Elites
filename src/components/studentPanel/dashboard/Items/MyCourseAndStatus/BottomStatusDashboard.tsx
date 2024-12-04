import style from "./../../../../../Style/studentPanel.module.css";
import { useGlobalState } from "../../../../../State/State";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";


const BottomStatusDashboard = () => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  const { t } = useTranslation();

  return (

    <div className={style.bottomStatusDashboard}>
      <h1 data-theme={darkMode ? "darkNoBG" : "lightMode"}>{t("BottomStatus")}</h1>
    </div>
  )
}

export { BottomStatusDashboard }