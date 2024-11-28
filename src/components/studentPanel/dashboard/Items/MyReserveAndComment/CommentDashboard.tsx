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

  const getBlogDetail = async () => {
    const Details = await getBlogById(id)
    setBlogDetail(Details.detailsNewsDto)
    setComments(Details.commentDtos)
    setisCurrentUserFavorite(Details?.detailsNewsDto.isCurrentUserFavorite)
    
    let relatedBlogs = await getRelatedBlog(Details?.detailsNewsDto.newsCatregoryId)
    setrelated(relatedBlogs)
    setisLoading(false)
  }
  useEffect(() => {
    getBlogDetail()
  }, [])

  useEffect(() => {
    getBlogDetail()
  }, [isFavouriteBlog])

  return (
    <div className={style.commentDashboard} data-theme={darkMode ? "dark" : "lightMode"}>
      <TitleHeaderMyCommentList />
      <CoursesAndBlogsHolder />
      <AllComments title={blogDetail?.title} comments={comments} isLoading={isLoading}/>
    </div>
  )
}

export { CommentDashboard }