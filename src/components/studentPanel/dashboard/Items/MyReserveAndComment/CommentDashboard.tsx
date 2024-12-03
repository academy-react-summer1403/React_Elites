import style from "./../../../../../Style/studentPanel.module.css";
import { useGlobalState } from "../../../../../State/State";
import { CoursesAndBlogsHolder } from './CoursesAndBlogsHolder';
import { TitleHeaderMyCommentList } from './TitleHeaderMyCommentList';
import { getMyCourseComment } from "../../../../../core/services/api/getMyCourseComments";
import { useEffect, useState } from "react";

const CommentDashboard = () => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  const [courseCommentt, setcourseCommentt] = useState([])

  const courseComment = async () => {
    let res = await getMyCourseComment()
    setcourseCommentt(res.myCommentsDtos)
  }

  useEffect(() => {
    courseComment()
  }, [])

  return (
    <div className={style.commentDashboard} data-theme={darkMode ? "dark" : "lightMode"}>
      <TitleHeaderMyCommentList courseCommentt={courseCommentt} />
      <CoursesAndBlogsHolder courseCommentt={courseCommentt} />
    </div>
  )
}

export { CommentDashboard }