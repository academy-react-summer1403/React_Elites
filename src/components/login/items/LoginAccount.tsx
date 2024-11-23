import styleLogin from "../../../Style/list.module.css";
import { useTranslation } from 'react-i18next';

const LoginAccount = () => {
  const { t } = useTranslation();


  return (

    <div className={styleLogin.LoginAccount}>
      <button type="submit">{t("loginAccount")}</button>
    </div>

  )
}

export { LoginAccount }