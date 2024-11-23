import { NavLink } from "react-router-dom";
import styleLogin from "../../../Style/list.module.css";

const FPReturnButton = () => {
  return (
    <div className={styleLogin.returnHolder}>
      <div className={styleLogin.return}>
        <NavLink to="/Auth/Forget-Password"> بازگشت &gt; </NavLink>
      </div>
    </div>
  )
}

export { FPReturnButton }