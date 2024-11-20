import { Formik, Form, Field } from "formik";
import style from "./../../Style/teacher.module.css";
import { ListCardBlogs } from "./blogsListGrid/index/cardsBlogsList.tsx";
import { SearchBar } from "./blogsListGrid/index/SearchBar.tsx";
import { useEffect, useState } from "react";
import {getTeacher} from '../../core/services/api/TeachersList.ts'
import { useGlobalState } from "../../State/State.tsx";
import { useTranslation } from 'react-i18next';

const TeacherPage = (props) => {
  const { t } = useTranslation();
  const [teacherList, setTeacherList] = useState([]);

  const getTeacherList = async () => {
    const teacher = await getTeacher();
    setTeacherList(teacher);
  };

  useEffect(() => {
    getTeacherList();
  }, []);

  const [darkMode, setDarkMode] = useGlobalState('DarkMode');

  return (
  <>
    <Formik>
      {(form) => (

        <div className=' h-full w-full flex flex-wrap justify-center mt-8' data-theme={darkMode ? "dark" : "lightMode"}>
          <div className={style.titleHolder}>
            <h1 className={style.title} data-theme={darkMode ? "darkNoBG" : "lightMode"}>{t("TeacherPage")}</h1>
            <h1 className={style.p} data-theme={darkMode ? "darkNoBG" : "lightMode"}>{t("TeacherPageDesc")}</h1>
          </div>  
          <div className={style.page}>
            <SearchBar />
            <div className={style.page2}>      
              <ListCardBlogs teacherList={teacherList} />
            </div>
          </div>  
        </div>
      )}
    </Formik>
  </>
  )
}


export { TeacherPage }
