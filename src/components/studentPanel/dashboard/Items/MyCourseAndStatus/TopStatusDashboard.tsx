import style from "./../../../../../Style/studentPanel.module.css";
import { useGlobalState } from "../../../../../State/State";
import { NavLink } from "react-router-dom";


const TopStatusDashboard = () => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');

  return (

    <div className={style.topStatusDashboard}>
      <h1 data-theme={darkMode ? "darkNoBG" : "lightMode"}>وضعیت اطلاعات حساب کاربری</h1>
      <NavLink to='/Student-Panel/Information'> </NavLink>
    </div>

  )
}

export { TopStatusDashboard }