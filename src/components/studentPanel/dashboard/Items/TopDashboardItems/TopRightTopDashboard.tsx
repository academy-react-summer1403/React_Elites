import style from "../../../../../Style/studentPanel.module.css";

import { useTranslation } from "react-i18next";
import { identifier } from "../../../../../core/services/Functions/ThemeIdentifier";
const TopRightTopDashboard = ({ user }) => {

  const { t } = useTranslation();

  return (

    <div className={style.TopRightTopDashboard}>
      <h1 data-theme={identifier("darkNoBG","dark2NoBG")}>{t("Hi")} {user.fName}{user.lName}  ، {t("GoodDay")}👋</h1>
      <p data-theme={identifier("darkNoBGDisc","dark2NoBGDisc")}>{t("GoodDayDesc")}</p>
    </div>
  )
}

export { TopRightTopDashboard }