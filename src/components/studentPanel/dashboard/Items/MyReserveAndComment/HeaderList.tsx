import style from "./../../../../../Style/studentPanel.module.css";

import { NavLink } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import { identifier } from "../../../../../core/services/Functions/ThemeIdentifier";

const HeaderList = () => {

  const { t } = useTranslation();

  return (
    <div className={style.headerList} data-theme={identifier("darkSmall","dark2Small")}>
      <div className={style.imgList} data-theme={identifier("darkNoBG","dark2NoBG")}># </div>
      <div className={style.nameList} data-theme={identifier("darkNoBG","dark2NoBG")}>{t("name")} </div>
      <div className={style.teacherList} data-theme={identifier("darkNoBG","dark2NoBG")}>{t("lecturer")} </div>
      <div className={style.dateStartList} data-theme={identifier("darkNoBG","dark2NoBG")}>{t("status")} </div>
      <div className={style.eyeList}> </div>
    </div>
  )
}

export { HeaderList }