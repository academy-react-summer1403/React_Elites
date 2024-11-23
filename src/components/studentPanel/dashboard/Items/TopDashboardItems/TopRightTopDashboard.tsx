import style from "../../../../../Style/studentPanel.module.css";
import { useGlobalState } from "../../../../../State/State";

const TopRightTopDashboard = ({user}) => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');

  return (

    <div className={style.TopRightTopDashboard}>
      <h1 data-theme={darkMode ? "darkNoBG" : "lightMode"}>سلام {user.fName}{user.lName}  ، روزت بخیر👋</h1>
      <p data-theme={darkMode ? "darkNoBGDisc" : "lightMode"}>امیدوارم امروز روز خوبی رو داشته باشید</p>
    </div>
  )
}

export { TopRightTopDashboard }