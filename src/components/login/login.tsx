import { Formik, Form, Field, ErrorMessage } from "formik";
import styleLogin from "../../Style/list.module.css";
import { Navigate, NavLink } from "react-router-dom";
import { loginAPI } from "../../core/services/api/auth-Login";
import { useGlobalState } from "../../State/State";
import { setItem } from "../../core/services/storage/storage.services";
import { NavigateLogin1 } from "./items/Navigate";
import { HeaderLogin1 } from "./items/HeaderLogin";
import { Input1Login } from "./items/Input1login";
import { LoginAccount } from "./items/LoginAccount";
import { RegisterLogin } from "./items/RegisterLogin";
import { RememberAndForget } from "./items/RememberAndForget";
import { Input2login } from "./items/Input2login";
import { HomePageButton } from "./items/HomePageButton";
import { useTranslation } from 'react-i18next';

const Login = () => {
  const { t } = useTranslation();
  const [isLogin, setIsLogin] = useGlobalState('isLogin');

  const loginUser = async (values) => {
    const user = await loginAPI(values)
    setItem("token", user.token)
    if (user.success == true) {
      setIsLogin(true)
      setItem('isLogin', isLogin)
      console.log(user)
    }
    else {
      return
    }
  }

  return (
    <Formik
      initialValues={{ password: "", phoneOrGmail: "" }}
      onSubmit={(values) => loginUser(values)}
    >
      {(form) => (
        <Form className={styleLogin.form}>
          {isLogin && <Navigate to="/" />}
          <NavigateLogin1 />
          <HeaderLogin1 />
          <Input1Login />
          <Input2login />
          <RememberAndForget />
          <LoginAccount />
          <RegisterLogin />
          <HomePageButton />
        </Form>
      )}
    </Formik>
  )
}

export { Login }