
import styleLogin from "../../../Style/list.module.css";
import { useTranslation } from 'react-i18next';
import { identifier } from "../../../core/services/Functions/ThemeIdentifier";
const LoginAccount = () => {
  const { t } = useTranslation();


  return (

    <div data-theme={identifier("darkSmall","dark2Small")} className={styleLogin.LoginAccount}>
      <button data-theme={identifier("darkSmall","dark2Small")} type="submit">{t("loginAccount")}</button>
    </div>

  )
}

export { LoginAccount }