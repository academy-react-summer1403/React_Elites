import styleLogin from "../../../Style/list.module.css";
import { NavLink } from "react-router-dom";

const NavLinkRegister = () => {

  return (

    <div className={`${styleLogin.navigate} ${styleLogin.navigateRegister}`}>
      <div className="w-1/3 flex flex-wrap h-full w-64 bg-blue">
        <div className="w-full h-2 rounded-lg black bg-blue-500 opacity-500">  </div>
        <h1 className={styleLogin.textNavigate}>وارد کردن شماره تلفن </h1>
      </div>
      <div className="w-1/3 flex flex-wrap h-full w-64 bg-blue">
        <div className="w-full h-2 rounded-lg black bg-blue-600">  </div>
        <h1 className={`${styleLogin.textNavigate} ${styleLogin.selectedNavigate}`}>تایید کد ارسال شده </h1>
      </div>
      <div className="w-1/3 flex flex-wrap h-full w-64 bg-blue">
        <div className="w-full h-2 rounded-lg black bg-gray-400">  </div>
        <h1 className={styleLogin.textNavigate}>واردکردن اطلاعات شخصی </h1>
      </div>
    </div>

  )
}

export { NavLinkRegister }