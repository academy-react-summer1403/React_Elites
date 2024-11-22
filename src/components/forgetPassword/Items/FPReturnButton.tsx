import { NavLink } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import styleLogin from "../../../Style/list.module.css";

const FPReturnButton = () => {
  const { t } = useTranslation();
  return (
    <div className="flex max-w-96  justify-center mt-4">
      <div className={styleLogin.HomePageButton}>
        <NavLink to="/Auth/Login" className="border-non cursor-pointer text-blue-700 text-sm font-DannaBold tracking-tight">&lt; {t("return")} </NavLink>
      </div>
    </div>
  )
}

export { FPReturnButton }