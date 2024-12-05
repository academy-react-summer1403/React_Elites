import style from "./../../../../../Style/studentPanel.module.css";
import { useGlobalState } from "../../../../../State/State";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { identifier } from "../../../../../core/services/Functions/ThemeIdentifier";

const TopStatusDashboard = () => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  const { t } = useTranslation();

  return (

    <div className={style.topStatusDashboard}>
      <h1 data-theme={identifier("darkNoBG")}>{t("StatusDashboard")}</h1>
      <NavLink to='/Student-Panel/Information'> </NavLink>
    </div>

  )
}

export { TopStatusDashboard }