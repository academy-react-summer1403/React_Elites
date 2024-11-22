import style from "../../../../../Style/studentPanel.module.css";
import { useGlobalState } from "../../../../../State/State";

const LeftTopDashboard = () => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');

  return (

    <div className={style.leftTopDashboard}>
      <h1 data-theme={darkMode ? "darkNoBG" : "lightMode"}>سلام ، من پارسام <br />اینم بیو پروفایلمه واقعا نمیدونم چی بنویسم خودتون بیایید منو بشناسید حال ندارم بخدا خستم</h1>
    </div>
  )
}

export { LeftTopDashboard }