import React, { useEffect, useState } from 'react'
import style from './BlogsDetail.module.css'
import { Main } from '../BlogsDetailItems/Main/Main'
import { Description } from '../BlogsDetailItems/Description/Description'
import { AllComments } from '../BlogsDetailItems/Comments/Holder/AllComments'
import { Blogs } from '../Blogs/BlogsHolder/Blogs'
import { useGlobalState } from '../../../State/State'
import { useParams } from 'react-router-dom'
import { getBlogById } from '../../../core/services/api/BlogById'
import { getAllBlogsList } from '../../../core/services/api/AllBlogsList'
import { getRelatedBlog } from '../../../core/services/api/getRelatedBlog'

const BlogsDetail = () => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  const [isLoading, setisLoading] = useState(true)
  const [blogDetail, setBlogDetail] = useState([])
  const [comments, setComments] = useState([])
  const [related, setrelated] = useState([])
  const {id} = useParams();

  const getBlogDetail = async () => {
    const Details = await getBlogById(id)
    setBlogDetail(Details.detailsNewsDto)
    setComments(Details.commentDtos)

    
    let relatedBlogs = await getRelatedBlog(Details?.detailsNewsDto.newsCatregoryId)
    setrelated(relatedBlogs)
    setisLoading(false)
  }
  useEffect(() => {
    getBlogDetail()
  }, [])

  return (
    <div className={style.body} data-theme={darkMode ? "dark" : "lightMode"}>
          <div className={style.holder}>
        <Main 
          category={blogDetail?.newsCatregoryName}
          title={blogDetail?.title}
          image={blogDetail?.currentImageAddressTumb}
          teacher={blogDetail?.addUserFullName}
          views={blogDetail?.currentView}
          likes={blogDetail?.currentLikeCount}
          dislikes={blogDetail?.currentDissLikeCount}
          rate={blogDetail?.currentRate}
          comment={blogDetail?.commentsCount}
          insertDate={blogDetail?.insertDate}
          currentUserIsDissLike={blogDetail?.currentUserIsDissLike}
          currentUserIsLike={blogDetail?.currentUserIsLike}
          id={blogDetail?.id}
          isCurrentUserFavorite={blogDetail?.isCurrentUserFavorite}
          isLoading={isLoading}
        />
        <Description description={blogDetail?.describe} isLoading={isLoading} />
        <AllComments comments={comments} isLoading={isLoading} />
        <Blogs related={related}/>
    </div>
    </div>
  )
}

export {BlogsDetail}