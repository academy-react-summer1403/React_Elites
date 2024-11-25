import { Formik, Form, Field } from "formik";
import style from "./../../Style/teacher.module.css";
import { ListCardBlogs } from "./blogsListGrid/index/cardsBlogsList.tsx";
import { SearchBar } from "./blogsListGrid/index/SearchBar.tsx";
import { useEffect, useState } from "react";
import {getTeacher} from '../../core/services/api/TeachersList.ts'
import { useGlobalState } from "../../State/State.tsx";
import { useTranslation } from 'react-i18next';
import { motion, useScroll } from "framer-motion";

const TeacherList = (props) => {
  const { t } = useTranslation();
  const [teacherList, setTeacherList] = useState([]);
  const [searchValue, setSearchValue] = useState("")
  const [applyFilter, setApplyFilter] = useState(false)
  const { scrollYProgress } = useScroll()

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

        <div className=' h-full w-full flex flex-wrap justify-center mt-12' data-theme={darkMode ? "dark" : "lightMode"}>
          <motion.div className="progressBar" style={{ scaleX: scrollYProgress }} />
          <div className={style.titleHolder}>
            <h1 className={style.title} data-theme={darkMode ? "darkNoBG" : "lightMode"}>{t("TeacherPage")}</h1>
            <h1 className={style.p} data-theme={darkMode ? "darkNoBG" : "lightMode"}>{t("TeacherPageDesc")}</h1>
          </div>  
          <div className={style.page}>
            <SearchBar setSearchValue={setSearchValue}/>
            <div className={style.page2}>      
              <ListCardBlogs  teacherList={teacherList} />
            </div>
          </div>  
        </div>
      )}
    </Formik>
  </>
  )
}


export { TeacherList }
