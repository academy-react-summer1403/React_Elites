import style from "./../../../../../Style/studentPanel.module.css";
import { useGlobalState } from "../../../../../State/State";
import { CoursesAndBlogsHolder } from './CoursesAndBlogsHolder';
import { TitleHeaderMyCommentList } from './TitleHeaderMyCommentList';
import { useEffect, useState } from "react";
import { AllComments } from "../../../../Blogs Detail/BlogsDetailItems/Comments/Holder/AllComments";
import { getBlogById } from '../../../../../core/services/api/BlogById'
import { useParams } from "react-router-dom";

import { Description } from '../../../../Blogs Detail/BlogsDetailItems/Description/Description'
import { Blogs } from '../../../../Blogs Detail/Blogs/BlogsHolder/Blogs'
import { getAllBlogsList } from '../../../../../core/services/api/AllBlogsList'
import { getRelatedBlog } from '../../../../../core/services/api/getRelatedBlog'

const CommentDashboard = () => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  const [blogDetail, setBlogDetail] = useState([])
  const [comments, setComments] = useState([])
  const {id} = useParams();
  const [isFavouriteBlog, setisCurrentUserFavorite] = useGlobalState('isFavouriteBlog');
  const [isLoading, setisLoading] = useState(true)
  const [related, setrelated] = useState([])

  return (
    <div className={style.commentDashboard} data-theme={darkMode ? "dark" : "lightMode"}>
      <TitleHeaderMyCommentList />
      <CoursesAndBlogsHolder />
    </div>
  )
}

export { CommentDashboard }