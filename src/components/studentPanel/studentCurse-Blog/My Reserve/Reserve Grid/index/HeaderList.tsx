import { ReserveCards } from '../ReserveCards'
import style from './ReserveCardsListStyle.module.css'
import { useTranslation } from 'react-i18next';
import { identifier } from '../../../../../../core/services/Functions/ThemeIdentifier';
const ReserveHeaderList = () => {

  const { t } = useTranslation();

  return (
    <div className={style.headerList} data-theme={identifier("darkSmall","dark2Small")}>
      <div className={style.imgList} data-theme={identifier("darkNoBG","dark2NoBG")}># </div>
      <div className={style.nameList} data-theme={identifier("darkNoBG","dark2NoBG")}>{t("name")} </div>
      <div className={style.teacherList} data-theme={identifier("darkNoBG","dark2NoBG")}> {t("lecturer")}</div>
      <div className={style.dateStartList} data-theme={identifier("darkNoBG","dark2NoBG")}>{t("HoldingDate")} </div>
      <div className={style.dateEndList} data-theme={identifier("darkNoBG","dark2NoBG")}>{t("CompletionDate")} </div>
      <div className={style.levelList} data-theme={identifier("darkNoBG","dark2NoBG")}> {t("status")}</div>
      <div className={style.eyeList}> </div>
    </div>

  )
}

export { ReserveHeaderList }