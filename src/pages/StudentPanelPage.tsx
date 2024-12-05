import {  Formik  } from "formik";
import style from "../Style/studentPanel.module.css";
import { StudentGhabRight } from "../components/studentPanel/studentPart/studentRight";
import { StudentGhabLeft } from "../components/studentPanel/studentPart/studentLeft";
import { useGlobalState } from "../State/State";
import { Outlet } from "react-router-dom";
import { identifier } from "../core/services/Functions/ThemeIdentifier";


const StudentPanelPage = () => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');

  return (
        <div className={style.root}>
            <StudentGhabRight />
            <div className={style.left}> 
                <StudentGhabLeft />
                <div className={style.page} data-theme={identifier("darkSmall")}>
                  <Outlet />
                </div>
            </div>
        </div>

  )
}

export { StudentPanelPage }