import { useGlobalState } from "../../../State/State";
import styleLogin from "../../../Style/list.module.css";
import { useTranslation } from 'react-i18next';
import { identifier } from "../../../core/services/Functions/ThemeIdentifier";
const LoginAccount = () => {
  const { t } = useTranslation();
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');

  return (

    <div data-theme={identifier("darkSmall")} className={styleLogin.LoginAccount}>
      <button data-theme={identifier("darkSmall")} type="submit">{t("loginAccount")}</button>
    </div>

  )
}

export { LoginAccount }