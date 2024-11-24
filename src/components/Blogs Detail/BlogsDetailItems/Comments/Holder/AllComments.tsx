import React, { useState } from 'react'
import style from './AllComments.module.css'
import { Comment } from '../Items/Comment'
import { useGlobalState } from '../../../../../State/State';
import { AddComment } from './AddComment/AddComment';
import { PulseLoader } from 'react-spinners';

const AllComments = ({comments, isLoading}) => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');

  return (
    <div className={style.container}>
      <div className={style.title} data-theme={darkMode ? "dark" : "lightMode"}> نظرات دانشجو ها و اساتید </div>
        {isLoading && <PulseLoader />}
        {comments.slice(0,3).map((item, index) => {
          return (
            <Comment
              key={index}
              title={item.title}
              describe={item.describe}
              autor={item.autor}
              dissLikeCount={item.dissLikeCount}
              likeCount={item.likeCount}
              inserDate={item.inserDate}
              currentUserIsLike={item.currentUserIsLike}
              currentUserIsDissLike={item.currentUserIsDissLike}
              id={item.id}
            />
          )
        })}
        <AddComment comments={comments}  />
    </div>
  )
}

export {AllComments}