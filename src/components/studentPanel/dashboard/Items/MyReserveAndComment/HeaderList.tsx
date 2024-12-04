import style from "./../../../../../Style/studentPanel.module.css";
import { useGlobalState } from "../../../../../State/State";
import { NavLink } from 'react-router-dom';
import { useTranslation } from "react-i18next";


const HeaderList = () => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  const { t } = useTranslation();

  return (
    <div className={style.headerList} data-theme={darkMode ? "darkSmall" : "lightMode"}>
      <div className={style.imgList} data-theme={darkMode ? "darkNoBG" : "lightMode"}># </div>
      <div className={style.nameList} data-theme={darkMode ? "darkNoBG" : "lightMode"}>{t("name")} </div>
      <div className={style.teacherList} data-theme={darkMode ? "darkNoBG" : "lightMode"}>{t("lecturer")} </div>
      <div className={style.dateStartList} data-theme={darkMode ? "darkNoBG" : "lightMode"}>{t("status")} </div>
      <div className={style.eyeList}> </div>
    </div>
  )
}

export { HeaderList }