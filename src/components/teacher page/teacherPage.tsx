import { Formik, Form, Field } from "formik";
import style from "./../../Style/teacher.module.css";
import { ListCardBlogs } from "./blogsListGrid/index/cardsBlogsList.tsx";
import { SearchBar } from "./blogsListGrid/index/SearchBar.tsx";
import { useEffect, useState } from "react";
import {getTeacher} from '../../core/services/api/TeachersList.ts'

const TeacherPage = (props) => {
  const [teacherList, setTeacherList] = useState([]);

  const getTeacherList = async () => {
    const teacher = await getTeacher();
    setTeacherList(teacher);
  };

  useEffect(() => {
    getTeacherList();
  }, []);

  return (
  <>
    <Formik>
      {(form) => (
        <div className=' h-full w-full flex flex-wrap justify-center'>
          <div className={style.titleHolder}>
            <h1 className={style.title}>لیست اساتید!</h1>
            <h1 className={style.p}>لیستی از بهترین اساتید در آکادمی سپهر!</h1>
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
