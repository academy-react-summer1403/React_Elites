import React from 'react'
import style from './Blogs.module.css'

import { identifier } from '../../../../core/services/Functions/ThemeIdentifier';

const BlogTitle = () => {

  return (
    <div className={style.title} data-theme={identifier("dark","dark2")}>بلاگ های مرتبط</div>
  )
}

export default BlogTitle