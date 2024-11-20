import styleLogin from "../../../Style/list.module.css";

const FPNavigate = () => {
  return (
    <div className={styleLogin.navigate}>
      <div className="w-[600px] flex flex-wrap h-full w-64 bg-blue">
        <div className="w-full h-2 rounded-lg black bg-gray-400">  </div>
        <h1 className="w-full align-right text-gray-400 text-sm font-DannaDemiBold tracking-tight">وارد کردن ایمیل </h1>
      </div>
      <div className="w-1/2 h-full flex flex-wrap w-64 bg-blue">
        <div className="w-full h-2 rounded-lg black bg-blue-500 ">  </div>
        <h1 className="w-full items-right text-black text-sm font-DannaDemiBold tracking-tight">تایید کد ارسال شده دو مرحله ای </h1>
        <h1 className="w-full items-right text-black text-xs font-DannaBold tracking-tight">(درصورت فعال بودن دو مرحله ای) </h1>
      </div>
    </div>
  )
}

export { FPNavigate }