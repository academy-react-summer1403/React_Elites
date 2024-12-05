import style from "./../../../../../Style/studentPanel.module.css";
import { useGlobalState } from "../../../../../State/State";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { identifier } from "../../../../../core/services/Functions/ThemeIdentifier";

const BottomStatusDashboard = () => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  const { t } = useTranslation();

  return (

    <div className={style.bottomStatusDashboard}>
      <h1 data-theme={identifier("darkNoBG")}>{t("BottomStatus")}</h1>
    </div>
  )
}

export { BottomStatusDashboard }