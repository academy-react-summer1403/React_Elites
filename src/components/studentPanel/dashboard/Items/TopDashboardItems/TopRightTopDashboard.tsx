import style from "../../../../../Style/studentPanel.module.css";
import { useGlobalState } from "../../../../../State/State";
import { useTranslation } from "react-i18next";
import { identifier } from "../../../../../core/services/Functions/ThemeIdentifier";
const TopRightTopDashboard = ({ user }) => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  const { t } = useTranslation();

  return (

    <div className={style.TopRightTopDashboard}>
      <h1 data-theme={identifier("darkNoBG")}>{t("Hi")} {user.fName}{user.lName}  ، {t("GoodDay")}👋</h1>
      <p data-theme={identifier("darkNoBGDisc")}>{t("GoodDayDesc")}</p>
    </div>
  )
}

export { TopRightTopDashboard }