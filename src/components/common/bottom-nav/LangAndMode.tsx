import ChangeLang from './LangButton'
import { DarkOrLightMode } from '../Header/NotifAndMode/Notif&ModeItems/DarkOrLightMode'
import  DarkAndLangButton  from './DarkAndChangeButton'
import style from "./LangButton.module.css";

const LangAndMode = () => {
return (
  <div className={style.holder}>
    <div className={style.holder2}>
      <DarkAndLangButton />
      <DarkOrLightMode />
      <ChangeLang />
    </div>
  </div>
)
};
export default LangAndMode;