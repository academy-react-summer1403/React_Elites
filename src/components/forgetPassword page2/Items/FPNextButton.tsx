import { NavLink } from "react-router-dom";
import styleLogin from "../../../Style/list.module.css";

const FPNextButton = () => {
  return (
    <NavLink to="/" className={styleLogin.LoginAccount}>
      <button className="h-full w-full text-white bg-blue-600 text-lg leading-4 font-lg font-DannaBold uppercase tracking-wider cursor-pointer rounded-full overflow-hidden" type="submit">تایید رمزعبور</button>
    </NavLink>
  )
}

export { FPNextButton }