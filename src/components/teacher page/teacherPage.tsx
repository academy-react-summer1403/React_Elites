import { Formik  } from "formik";
import styleBlogList from "./../../Style/blogList.module.css";
import { ListCardBlogs } from "./blogsListGrid/index/cardsBlogsList.tsx";
import { ChangePageList } from "./ChangePageList/ChangePageList.tsx";
import { useState } from "react";

const TeacherPage = () => {

  return (
  <>
    <Formik>
      {(form) => (
        <div className=' h-full w-full flex flex-wrap justify-center'>
          <div className={styleBlogList.page}>       
              <ListCardBlogs />
            </div>
        </div>
      )}
    </Formik>
  </>
  )
}

export { TeacherPage }
