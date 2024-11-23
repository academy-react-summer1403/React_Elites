import { NavLink } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import styleLogin from "../../../Style/list.module.css";

const FPReturnButton = () => {
  const { t } = useTranslation();
  return (
    <div  className={styleLogin.returnHolder}>
      <div className={styleLogin.return}>
        <NavLink to="/Auth/Login"> {t("return")} &gt;</NavLink>
      </div>
    </div>
  )
}

export { FPReturnButton }