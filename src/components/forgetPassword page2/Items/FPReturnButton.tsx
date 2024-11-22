import { NavLink } from "react-router-dom";
import styleLogin from "../../../Style/list.module.css";

const FPReturnButton = () => {
  return (
    <div className="flex max-w-96  justify-center mt-4">
      <div className=" flex rounded-full justify-center gap-1.5 w-28 px-4 py-2 bg-white border border-px border-gray-300">
        <NavLink to="/Auth/Forget-Password" className={styleLogin.HomePageButton}> بازگشت &gt; </NavLink>
      </div>
    </div>
  )
}

export { FPReturnButton }