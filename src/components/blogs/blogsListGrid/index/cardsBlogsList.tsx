import { CardBlogs } from '../cardsBlogs'
import style from './cardsBlogsListStyle.module.css'
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
            id={item.id}
            image={item.currentImageAddressTumb}
            date={item.insertDate}
          />
        )
      })}
    </div>
  )
}

export {ListCardBlogs}