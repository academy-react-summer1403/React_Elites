import React from 'react'
import style from './Blogs.module.css'
import { BlogItems } from '../BlogsItems/BlogItemsHolder/BlogItems'
import BlogTitle from './BlogTitle'
import reactBlog from '../../../../assets/Images/reactBlog.png'
import figmaBlog from '../../../../assets/Images/figmaBlog.png'
import JSBlog from '../../../../assets/Images/JSBlog.png'

const Blogs = () => {
    let data=[
        {image: JSBlog, title: "زبان جاوا اسکریپت در چه حوزه ای به کار میره؟", pub: "محمدحسین بحرالعلومی", views: "200", date: "22 اردیبهشت 1403"},
        {image: figmaBlog, title: "فیگما یا ادوبی ایکس‌دی؟", pub: "محمدحسین خلیل‌پور", views: "200", date: "20 اردیبهشت 1403"},
        {image: reactBlog, title: "فرق ری‌اکت با نکست جی‌اس چیست؟", pub: "محسن اسفندیاری", views: "229", date: "27 اردیبهشت 1403"}
    ]

  return (
    <div className={style.container}>
        <BlogTitle />
        {data.map((item, index) => {
            return(
                <BlogItems
                    key={index}
                    image={item.image}
                    title={item.title}
                    pub={item.pub}
                    views={item.views}
                    date={item.date}
                />
            )
        })}
    </div>
  )
}

export {Blogs}