import style from "./../../../../../Style/studentPanel.module.css";
import { useGlobalState } from "../../../../../State/State";
import { NavLink } from 'react-router-dom';


const HeaderList = () => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');

  return (
    <div className={style.headerList} data-theme={darkMode ? "darkSmall" : "lightMode"}>
      <div className={style.imgList} data-theme={darkMode ? "darkNoBG" : "lightMode"}># </div>
      <div className={style.nameList} data-theme={darkMode ? "darkNoBG" : "lightMode"}>نام </div>
      <div className={style.teacherList} data-theme={darkMode ? "darkNoBG" : "lightMode"}> مدرس</div>
      <div className={style.dateStartList} data-theme={darkMode ? "darkNoBG" : "lightMode"}>وضعیت </div>
      <div className={style.eyeList}> </div>
    </div>
  )
}

export { HeaderList }