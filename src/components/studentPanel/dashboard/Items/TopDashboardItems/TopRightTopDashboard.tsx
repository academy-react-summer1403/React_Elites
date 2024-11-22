import style from "../../../../../Style/studentPanel.module.css";
import { useGlobalState } from "../../../../../State/State";

const TopRightTopDashboard = () => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');

  return (

    <div className={style.TopRightTopDashboard}>
      <h1 data-theme={darkMode ? "darkNoBG" : "lightMode"}>سلام پارسا ، روزت بخیر👋</h1>
      <p data-theme={darkMode ? "darkNoBGDisc" : "lightMode"}>امیدوارم امروز روز خوبی رو داشته باشید</p>
    </div>
  )
}

export { TopRightTopDashboard }