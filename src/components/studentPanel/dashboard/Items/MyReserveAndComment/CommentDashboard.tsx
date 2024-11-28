import style from "./../../../../../Style/studentPanel.module.css";
import { useGlobalState } from "../../../../../State/State";
import { CoursesAndBlogsHolder } from './CoursesAndBlogsHolder';
import { TitleHeaderMyCommentList } from './TitleHeaderMyCommentList';
import { useEffect, useState } from "react";
import { AllComments } from "../../../../Blogs Detail/BlogsDetailItems/Comments/Holder/AllComments";
import { getBlogById } from '../../../../../core/services/api/BlogById'
import { useParams } from "react-router-dom";

const CommentDashboard = () => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  const [blogDetail, setBlogDetail] = useState([])
  const [comments, setComments] = useState([])
  const {id} = useParams();

  return (
    <div className={style.commentDashboard} data-theme={darkMode ? "dark" : "lightMode"}>
      <TitleHeaderMyCommentList />
      <CoursesAndBlogsHolder />
    </div>
  )
}

export { CommentDashboard }