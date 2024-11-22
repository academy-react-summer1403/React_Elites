import { NavLink } from "react-router-dom";
import styleLogin from "../../../Style/list.module.css";
import { useTranslation } from 'react-i18next';

const RegisterLogin = () => {
  const { t } = useTranslation();


  return (

    <div className="mt-2 max-w-96 flex justify-center gap-1.5">
      <h1 className="red text-black text-sm font-DannaDemiBold">{t("Don'tHaveAnAccount")}</h1>
      <NavLink to="/Auth/Register" className="border-none cursor-pointer text-blue-700 text-sm font-DannaDemiBold tracking-tight decoratio underline">{t("creatAccount")}</NavLink>
    </div>

  )
}

export { RegisterLogin }