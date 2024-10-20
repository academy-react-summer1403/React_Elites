import React from 'react'
import style from './BlogsDetail.module.css'
import { Main } from '../BlogsDetailItems/Main/Main'
import { Description } from '../BlogsDetailItems/Description/Description'
import { AllComments } from '../BlogsDetailItems/Comments/Holder/AllComments'
import { Blogs } from '../Blogs/BlogsHolder/Blogs'

const BlogsDetail = () => {
  return (
    <div className={style.holder}>
        <Main />
        <Description />
        <AllComments />
        <Blogs />
    </div>
  )
}

export {BlogsDetail}