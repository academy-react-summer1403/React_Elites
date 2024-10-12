import React from 'react'
import style from './AllComments.module.css'
import { Comment } from '../Items/Comment'

const AllComments = () => {
  return (
    <div className={style.container}>
        <Comment />
        <Comment />
        <Comment />
        <Comment />
    </div>
  )
}

export {AllComments}