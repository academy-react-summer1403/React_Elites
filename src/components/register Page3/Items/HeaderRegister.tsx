import { Formik, Form, Field, ErrorMessage } from "formik";
import styleLogin from "../../../Style/list.module.css";

const HeaderRegister = () => {
  return (

    <div className={styleLogin.HeaderLogin}>
      <h1 className="text-black text-2xl font-DannaBold m-4">وارد کردن اطلاعات شخصی </h1>
      <p className="text-gray-400 text-sm font-DannaDemiBold">لطفا اطلاعات اولیه خواسته شده را وارد کنید</p>
    </div>
  )
}

export { HeaderRegister }