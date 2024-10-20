import React from 'react'
import style from './Blogs.module.css'
import styleDark from './../../../../../Style/DarkMode.module.css'

const BlogTitle = () => {
  return (
    <div className={`${style.title} ${styleDark.title}`}>بلاگ های برتر هفته</div>
  )
}

export default BlogTitle