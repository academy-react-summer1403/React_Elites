import style from "./../../../../../Style/studentPanel.module.css";
import { useGlobalState } from "../../../../../State/State";
import { NavLink } from "react-router-dom";


const BottomStatusDashboard = () => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');

  return (

    <div className={style.bottomStatusDashboard}>
      <h1 data-theme={darkMode ? "darkNoBG" : "lightMode"}>اطلاعات حساب کاربری شما کامل نیست</h1>
    </div>
  )
}

export { BottomStatusDashboard }