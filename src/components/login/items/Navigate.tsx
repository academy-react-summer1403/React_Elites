import styleLogin from "../../../Style/list.module.css";
import { useTranslation } from 'react-i18next';

const NavigateLogin1 = () => {
  const { t } = useTranslation();


  return (

    <div className={styleLogin.navigate}>
      <div className={styleLogin.select}>
        <div>  </div>
        <h1>{t("enterPhoneNumber")} </h1>
      </div>
      <div>
        <div>  </div>
        <h1> {t("confirmCodeTitle")}</h1>
        <h1>{t("confirmCodeDesc")} </h1>
      </div>
    </div>

  )
}

export { NavigateLogin1 }