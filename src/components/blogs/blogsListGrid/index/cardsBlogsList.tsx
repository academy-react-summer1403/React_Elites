import { CardBlogs } from '../cardsBlogs'
import style from './cardsBlogsListStyle.module.css'
import { getAllBlogsList } from '../../../../core/services/api/AllBlogsList'
import { useEffect, useState } from 'react'
import { FilterBlogs } from '../../../../core/services/api/getBlogsFilterList'

const ListCardBlogs = ({categoryId, applyFilter, searchValue}) => {
  const [blogsList, setBlogsList] = useState([]);

  const allBlogsList = async () => {

    let allBlogs = await getAllBlogsList()

    let allBlogsFiltered = await FilterBlogs(categoryId)

    if(applyFilter === true){
      setBlogsList(allBlogsFiltered.news)
      console.log(allBlogsFiltered.news)
    }
    else if(applyFilter === false){
      setBlogsList(allBlogs.news)
      setBlogsList(allBlogs.news.filter(doc => doc.title.includes(searchValue)))
    }
  }

  useEffect(() => {
    allBlogsList()
  }, [])
  useEffect(() => {
    allBlogsList()
  }, [applyFilter])
  useEffect(() => {
    allBlogsList()
  }, [searchValue])


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