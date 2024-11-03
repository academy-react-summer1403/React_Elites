import {  Formik  } from "formik";
import style from "./../../../Style/studentPanel.module.css";
import {StudentGhabRight} from "../studentPart/studentRight";
import {StudentGhabLeft} from "../studentPart/studentLeft";
import { useGlobalState } from "../../../State/State";
import { Outlet } from "react-router-dom";


const StudentPanel = () => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');

  return (
        <div className={style.root}>
            <StudentGhabRight />
            <div className={style.left}> 
                <StudentGhabLeft />
                <div className={style.page} data-theme={darkMode ? "darkSmall" : "lightMode"}>
                  <Outlet />
                </div>
            </div>
        </div>

  )
}

export { StudentPanel }