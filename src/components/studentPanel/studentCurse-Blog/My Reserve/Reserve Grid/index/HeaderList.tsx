import { ReserveCards } from '../ReserveCards'
import style from './ReserveCardsListStyle.module.css'
import { useGlobalState } from "../../../../../../State/State";
import { useTranslation } from 'react-i18next';

const ReserveHeaderList = () => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  const { t } = useTranslation();

  return (
    <div className={style.headerList} data-theme={darkMode ? "darkSmall" : "lightMode"}>
      <div className={style.imgList} data-theme={darkMode ? "darkNoBG" : "lightMode"}># </div>
      <div className={style.nameList} data-theme={darkMode ? "darkNoBG" : "lightMode"}>{t("name")} </div>
      <div className={style.teacherList} data-theme={darkMode ? "darkNoBG" : "lightMode"}> {t("lecturer")}</div>
      <div className={style.dateStartList} data-theme={darkMode ? "darkNoBG" : "lightMode"}>{t("HoldingDate")} </div>
      <div className={style.dateEndList} data-theme={darkMode ? "darkNoBG" : "lightMode"}>{t("CompletionDate")} </div>
      <div className={style.levelList} data-theme={darkMode ? "darkNoBG" : "lightMode"}> {t("status")}</div>
      <div className={style.eyeList}> </div>
    </div>

  )
}

export { ReserveHeaderList }