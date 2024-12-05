import style from "../../../../../Style/studentPanel.module.css";
import { useGlobalState } from "../../../../../State/State";
import { useTranslation } from "react-i18next";
import { identifier } from "../../../../../core/services/Functions/ThemeIdentifier";
const LeftTopDashboard = ({user}) => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  const { t } = useTranslation();

  return (

    <div className={style.leftTopDashboard}>
      <h1 data-theme={identifier("darkNoBG")}>{t("HiIAm")}  {user.fName} <br />{user.userAbout} </h1>
    </div>
  )
}

export { LeftTopDashboard }