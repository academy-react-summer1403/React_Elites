import { useGlobalState } from "../../../State/State";
import styleLogin from "../../../Style/list.module.css";
import { useTranslation } from 'react-i18next';

const LoginAccount = () => {
  const { t } = useTranslation();
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');

  return (

    <div data-theme={darkMode ? "darkSmall" : "lightMode"} className={styleLogin.LoginAccount}>
      <button data-theme={darkMode ? "darkSmall" : "lightMode"} type="submit">{t("loginAccount")}</button>
    </div>

  )
}

export { LoginAccount }