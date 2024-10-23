import { Formik  } from "formik";
import styleBlogList from "./../../Style/blogList.module.css";
import { ListCardBlogs } from "./blogsListGrid/index/cardsBlogsList.tsx";
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
          <div className={styleBlogList.page}>       
              <ListCardBlogs teacherList={teacherList} />
            </div>
        </div>
      )}
    </Formik>
  </>
  )
}

/*className={`${style.class1} ${style.class2}`}*/

export { TeacherPage }
