import styleLogin from "../../../Style/list.module.css";

const FPTitleHeader = () => {
  return (
    <div className={styleLogin.HeaderLogin}>
      <h1 className="text-black text-2xl font-DannaBold mt-4 mb-4">رمزعبور جدید!</h1>
      <p className="text-gray-400 text-sm font-DannaDemiBold">رمزعبور جدید خود را وارد کنید</p>
    </div>
  )
}

export { FPTitleHeader }