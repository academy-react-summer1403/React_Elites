import style from "../../../../../Style/studentPanel.module.css";
import { useGlobalState } from "../../../../../State/State";
import { useTranslation } from "react-i18next";

const LeftTopDashboard = ({user}) => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  const { t } = useTranslation();

  return (

    <div className={style.leftTopDashboard}>
      <h1 data-theme={darkMode ? "darkNoBG" : "lightMode"}>{t("HiIAm")}  {user.fName} <br />{user.userAbout} </h1>
    </div>
  )
}

export { LeftTopDashboard }