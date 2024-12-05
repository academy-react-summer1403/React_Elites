import { NavLink } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import styleLogin from "../../../Style/list.module.css";

import { identifier } from "../../../core/services/Functions/ThemeIdentifier";
const FPReturnButton = () => {
  const { t } = useTranslation();

  return (
    <div  className={styleLogin.returnHolder}>
      <div data-theme={identifier("darkSmall","dark2Small")} className={styleLogin.return}>
        <NavLink data-theme={identifier("darkNoBG","dark2NoBG")} to="/Auth/Login"> {t("return")} &gt;</NavLink>
      </div>
    </div>
  )
}

export { FPReturnButton }