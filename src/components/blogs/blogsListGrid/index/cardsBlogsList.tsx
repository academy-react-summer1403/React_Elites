import { CardBlogs } from '../cardsBlogs'
import style from './cardsBlogsListStyle.module.css'
import reactJs from '../../../../assets/Images/reactJs.png'
import figmaCourse from '../../../../assets/Images/figmaBlog.png'
import JSCourse from '../../../../assets/Images/reactBlog.png'
import JSBlog from '../../../../assets/Images/JSBlog.png'
import { getAllBlogsList } from '../../../../core/services/api/AllBlogsList'
import { useEffect, useState } from 'react'

const ListCardBlogs = () => {
  const [blogsList, setBlogsList] = useState([]);

  const allBlogsList = async () => {
    const allBlogs = await getAllBlogsList()
    setBlogsList(allBlogs.news)
  }

  useEffect(() => {
    allBlogsList()
  }, [])


  return (
    <div className={style.holder}>
        {blogsList.map((item, index) => {
        return (
          <CardBlogs 
            key={index}
            title={item.title}
            teacher={item.addUserFullName}
            view={item.currentView}
            // date={item.date}
            image={item.currentImageAddressTumb}
          />
        )
      })}
    </div>
  )
}

export {ListCardBlogs}