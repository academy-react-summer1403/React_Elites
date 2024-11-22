import style from "./../../../../../Style/studentPanel.module.css";
import { useGlobalState } from "../../../../../State/State";


const HeaderList = () => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');

  return (

    <div className={style.headerList} data-theme={darkMode ? "darkSmall" : "lightMode"}>
      <div className={style.imgList} data-theme={darkMode ? "darkNoBG" : "lightMode"}># </div>
      <div className={style.nameList} data-theme={darkMode ? "darkNoBG" : "lightMode"}>نام </div>
      <div className={style.teacherList} data-theme={darkMode ? "darkNoBG" : "lightMode"}> مدرس</div>
      <div className={style.dateStartList} data-theme={darkMode ? "darkNoBG" : "lightMode"}>تاریخ برگزاری </div>
      <div className={style.levelList} data-theme={darkMode ? "darkNoBG" : "lightMode"}>سطح </div>
      <div className={style.eyeList}> </div>
    </div>
  )
}

export { HeaderList }