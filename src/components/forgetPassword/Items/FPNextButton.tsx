import { NavLink } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import styleLogin from "../../../Style/list.module.css";

const FPNextButton = () => {
  const { t } = useTranslation();
  return (
    <NavLink to="/Auth/Forget-Password-Page2" className={styleLogin.LoginAccount}>
      <button className="h-full w-full text-white bg-blue-600 text-lg leading-4 font-lg font-DannaBold uppercase tracking-wider cursor-pointer rounded-full overflow-hidden" type="submit">{t("sendLink")}</button>
    </NavLink>
  )
}

export { FPNextButton }