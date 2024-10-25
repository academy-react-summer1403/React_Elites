import {  Formik  } from "formik";
import style from "./../../../Style/studentPanel.module.css";
import {StudentGhabRight} from "../studentPart/studentRight";
import {StudentGhabLeft} from "../studentPart/studentLeft";
import {StudentPanelSearch} from "../studentPart/studentPanelSearch";
import {ListCardBlogs} from "./blogsListGrid/index/cardsBlogsList";
import {ChangePageList} from "../../blogs/ChangePageList/ChangePageList";
import { useGlobalState } from "../../../State/State";


const StudentPanel = () => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');

  return (

    <Formik>
      {(form) => (
        <div className={style.root}>
            <StudentGhabRight />
            <div className={style.left}> 
                <StudentGhabLeft />
                <div className={style.page} data-theme={darkMode ? "darkSmall" : "lightMode"}>           
                    <div className={style.page2}>
                        <div className={style.titleHolder}>
                            <h1 className={style.title} data-theme={darkMode ? "darkNoBG" : "lightMode"}>دوره من</h1>
                        </div>
                        <StudentPanelSearch />
                        <div className={style.list} data-theme={darkMode ? "dark" : "lightMode"}> 
                          <div className={style.headerList} data-theme={darkMode ? "darkSmall" : "lightMode"}>
                            <div className={style.imgList} data-theme={darkMode ? "darkNoBG" : "lightMode"}># </div>
                            <div className={style.nameList} data-theme={darkMode ? "darkNoBG" : "lightMode"}>نام </div>
                            <div className={style.teacherList} data-theme={darkMode ? "darkNoBG" : "lightMode"}> مدرس</div>
                            <div className={style.dateStartList} data-theme={darkMode ? "darkNoBG" : "lightMode"}>تاریخ برگزاری </div>
                            <div className={style.dateEndList} data-theme={darkMode ? "darkNoBG" : "lightMode"}>تاریخ اتمام </div>
                            <div className={style.levelList} data-theme={darkMode ? "darkNoBG" : "lightMode"}>سطح </div>
                            <div className={style.eyeList}> </div>
                          </div>
                          <ListCardBlogs />
                          <div className="flex justify-center mt-8">
                            <ChangePageList />
                          </div>  
                        </div>
                    </div>
                </div>
            </div>
        </div>
      )}
    </Formik>

  )
}

export { StudentPanel }