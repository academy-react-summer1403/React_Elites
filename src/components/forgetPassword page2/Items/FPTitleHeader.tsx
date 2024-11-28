import { useGlobalState } from "../../../State/State";
import styleLogin from "../../../Style/list.module.css";

const FPTitleHeader = () => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <div className={styleLogin.HeaderLogin}>
      <h1 data-theme={darkMode ? "darkNoBG" : "lightMode"} className="text-black text-2xl font-DannaBold mt-4 mb-4">رمزعبور جدید!</h1>
      <p data-theme={darkMode ? "darkNoBGDisc" : "lightMode"} className="text-gray-400 text-sm font-DannaDemiBold">رمزعبور جدید خود را وارد کنید</p>
    </div>
  )
}

export { FPTitleHeader }