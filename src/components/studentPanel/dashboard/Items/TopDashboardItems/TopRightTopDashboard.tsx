import style from "../../../../../Style/studentPanel.module.css";
import { useGlobalState } from "../../../../../State/State";
import { useTranslation } from "react-i18next";

const TopRightTopDashboard = ({ user }) => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  const { t } = useTranslation();

  return (

    <div className={style.TopRightTopDashboard}>
      <h1 data-theme={darkMode ? "darkNoBG" : "lightMode"}>{t("Hi")} {user.fName}{user.lName}  ، {t("GoodDay")}👋</h1>
      <p data-theme={darkMode ? "darkNoBGDisc" : "lightMode"}>{t("GoodDayDesc")}</p>
    </div>
  )
}

export { TopRightTopDashboard }