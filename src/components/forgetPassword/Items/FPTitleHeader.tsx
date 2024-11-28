import { useTranslation } from 'react-i18next';
import styleLogin from "../../../Style/list.module.css";
import { useGlobalState } from '../../../State/State';

const FPTitleHeader = () => {
  const { t } = useTranslation();
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <div className={styleLogin.HeaderLogin}>
      <h1 data-theme={darkMode ? "darkNoBG" : "lightMode"} className="text-black text-2xl font-DannaBold m-4">{t("ForgotPasswordHeaderTitle")}</h1>
      <p data-theme={darkMode ? "darkNoBGDisc" : "lightMode"} className="text-gray-400 text-sm font-DannaDemiBold">{t("ForgotPasswordHeaderDesc")}</p>
    </div>
  )
}

export { FPTitleHeader }