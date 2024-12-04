import style from "./../../../../../Style/studentPanel.module.css";
import { useGlobalState } from "../../../../../State/State";
import { CoursesAndBlogsHolder } from './CoursesAndBlogsHolder';
import { TitleHeaderMyCommentList } from './TitleHeaderMyCommentList';
import { getMyCourseComment } from "../../../../../core/services/api/getMyCourseComments";
import { useEffect, useState } from "react";
import { getMyNewsComment } from "../../../../../core/services/api/getMyNewsComments";

const CommentDashboard = () => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  const [courseCommentt, setcourseCommentt] = useState([])
  const [newsComment, setnewsComment] = useState([])
  const [data, setdata] = useState([])

  const courseComment = async () => {
    let res = await getMyCourseComment()
    setcourseCommentt(res.myCommentsDtos)

    let res2 = await getMyNewsComment()
    setnewsComment(res2.myNewsCommetDtos)

    setdata(res.myCommentsDtos)
  }

  useEffect(() => {
    courseComment()
  }, [])

  return (
    <div className={style.commentDashboard} data-theme={darkMode ? "dark" : "lightMode"}>
      <TitleHeaderMyCommentList data={data} courseCommentt={courseCommentt} newsComment={newsComment} setdata={setdata} />
      <CoursesAndBlogsHolder courseCommentt={courseCommentt} />
    </div>
  )
}

export { CommentDashboard }