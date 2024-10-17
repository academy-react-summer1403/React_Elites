import React from 'react'
import style from './AllComments.module.css'
import { Comment } from '../Items/Comment'

const AllComments = () => {
  return (
    <div className={style.container}>
      <div className={style.title}> نظرات دانشجو ها و اساتید </div>
        <Comment />
        <Comment />
        <Comment />
        <Comment />
    </div>
  )
}

export {AllComments}