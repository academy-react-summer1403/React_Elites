import styleLogin from "../../../Style/list.module.css";

const FPNavigate = () => {
  return (
    <div className={styleLogin.navigate}>
      <div  className={styleLogin.lastSelect}>
        <div>  </div>
        <h1>وارد کردن ایمیل </h1>
      </div>
      <div  className={styleLogin.select}>
        <div>  </div>
        <h1>تایید کد ارسال شده دو مرحله ای </h1>
        <h1>(درصورت فعال بودن دو مرحله ای) </h1>
      </div>
    </div>
  )
}

export { FPNavigate }