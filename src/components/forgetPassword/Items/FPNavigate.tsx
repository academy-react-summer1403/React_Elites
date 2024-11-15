import styleLogin from "../../../Style/list.module.css";
import { useTranslation } from 'react-i18next';

const ForgetPassNavigate = () => {
  const { t } = useTranslation();
  return (
    <div className={styleLogin.navigate}>
      <div className="w-1/2 flex flex-wrap h-full w-64 bg-blue">
        <div className="w-full h-2 rounded-lg black bg-blue-500">  </div>
        <h1 className="w-full align-right text-black text-sm font-DannaDemiBold tracking-tight">{t("enterEmail")} </h1>
      </div>
      <div className="w-1/2 h-full flex flex-wrap w-64 bg-blue">
        <div className="w-full h-2 rounded-lg black bg-gray-400">  </div>
        <h1 className="w-full items-right text-gray-400 text-sm font-DannaDemiBold tracking-tight">{t("confirmCodeTitle")} </h1>
        <h1 className="w-full items-right text-gray-400 text-xs font-DannaBold tracking-tight"> {t("confirmCodeDesc")}</h1>
      </div>
    </div>
  )
}

export { ForgetPassNavigate }