import style from "../../../../../Style/studentPanel.module.css";
import { useGlobalState } from "../../../../../State/State";

const LeftTopDashboard = ({user}) => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');

  return (

    <div className={style.leftTopDashboard}>
      <h1 data-theme={darkMode ? "darkNoBG" : "lightMode"}>سلام ، من {user.fName}ام <br />{user.userAbout} </h1>
    </div>
  )
}

export { LeftTopDashboard }