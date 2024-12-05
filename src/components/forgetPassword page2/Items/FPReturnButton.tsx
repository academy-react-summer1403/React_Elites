import { NavLink } from "react-router-dom";
import styleLogin from "../../../Style/list.module.css";

import { identifier } from "../../../core/services/Functions/ThemeIdentifier";
const FPReturnButton = () => {

  return (
    <div className={styleLogin.returnHolder}>
      <div data-theme={identifier("darkSmall","dark2Small")} className={styleLogin.return}>
        <NavLink data-theme={identifier("darkNoBG","dark2NoBG")} to="/Auth/Forget-Password"> بازگشت &gt; </NavLink>
      </div>
    </div>
  )
}

export { FPReturnButton }