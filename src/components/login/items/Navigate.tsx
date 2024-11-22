import styleLogin from "../../../Style/list.module.css";
import { useTranslation } from 'react-i18next';

const NavigateLogin1 = () => {
  const { t } = useTranslation();


  return (

    <div className={styleLogin.navigate}>
      <div className="w-72 flex flex-wrap h-full">
        <div className="w-full h-2 rounded-lg black bg-blue-500">  </div>
        <h1 className="w-full align-right text-black text-base font-DannaMedium tracking-tight mt-3">{t("enterPhoneNumber")} </h1>
      </div>
      <div className="w-72 h-full flex flex-wrap">
        <div className="w-full h-2 rounded-lg black bg-gray-400">  </div>
        <h1 className="w-full items-right text-gray-400 text-base font-DannaMedium tracking-tight mt-3"> {t("confirmCodeTitle")}</h1>
        <h1 className="w-full items-right text-gray-400 text-sm font-DannaMedium tracking-tight">{t("confirmCodeDesc")} </h1>
      </div>
    </div>

  )
}

export { NavigateLogin1 }