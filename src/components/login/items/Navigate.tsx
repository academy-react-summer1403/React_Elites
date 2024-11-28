import { useGlobalState } from "../../../State/State";
import styleLogin from "../../../Style/list.module.css";
import { useTranslation } from 'react-i18next';

const NavigateLogin1 = () => {
  const { t } = useTranslation();
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');


  return (

    <div className={styleLogin.navigate}>
      <div className={styleLogin.select}>
        <div>  </div>
        <h1 data-theme={darkMode ? "darkNoBG" : "lightMode"}>{t("enterPhoneNumber")} </h1>
      </div>
      <div>
        <div>  </div>
        <h1 data-theme={darkMode ? "darkNoBGDisc" : "lightMode"}> {t("confirmCodeTitle")}</h1>
        <h1 data-theme={darkMode ? "darkNoBGDisc" : "lightMode"}>{t("confirmCodeDesc")} </h1>
      </div>
    </div>

  )
}

export { NavigateLogin1 }