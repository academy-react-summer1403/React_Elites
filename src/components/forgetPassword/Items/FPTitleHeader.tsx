import { useTranslation } from 'react-i18next';
import styleLogin from "../../../Style/list.module.css";

const FPTitleHeader = () => {
  const { t } = useTranslation();
  return (
    <div className={styleLogin.HeaderLogin}>
      <h1 className="text-black text-2xl font-DannaBold m-4">{t("ForgotPasswordHeaderTitle")}</h1>
      <p className="text-gray-400 text-sm font-DannaDemiBold">{t("ForgotPasswordHeaderDesc")}</p>
    </div>
  )
}

export { FPTitleHeader }