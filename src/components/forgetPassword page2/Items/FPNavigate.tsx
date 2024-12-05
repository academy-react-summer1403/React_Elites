import { useGlobalState } from "../../../State/State";
import styleLogin from "../../../Style/list.module.css";
import { identifier } from "../../../core/services/Functions/ThemeIdentifier";
const FPNavigate = () => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <div className={styleLogin.navigate}>
      <div  className={styleLogin.lastSelect}>
        <div>  </div>
        <h1 data-theme={identifier("darkNoBGDisc")}>وارد کردن ایمیل </h1>
      </div>
      <div  className={styleLogin.select}>
        <div>  </div>
        <h1 data-theme={identifier("darkNoBG")}>تایید کد ارسال شده دو مرحله ای </h1>
        <h1 data-theme={identifier("darkNoBG")}>(درصورت فعال بودن دو مرحله ای) </h1>
      </div>
    </div>
  )
}

export { FPNavigate }