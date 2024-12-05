import React, { useState } from 'react'
import style from './AllComments.module.css'
import { Comment } from '../Items/Comment'
import { useGlobalState } from '../../../../../State/State';
import { AddComment } from './AddComment/AddComment';
import { PulseLoader, ScaleLoader } from 'react-spinners';
import { identifier } from '../../../../../core/services/Functions/ThemeIdentifier';
const AllComments = ({comments, id, isLoading, title}) => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');

  return (
    <div className={style.container}>
      <div className={style.title} data-theme={identifier("darkNoBG")}> نظرات دانشجو ها و اساتید </div>
      {isLoading && <PulseLoader />}
      {comments.slice(0,3).map((item, index) => {
        return(
          <Comment
            id={id}
            commentId={item.id}
            key={index}
            title={item.title}
            describe={item.describe}
            pictureAddress={item.pictureAddress}
            disslikeCount={item.disslikeCount}
            author={item.author}
            likeCount={item.likeCount}
            insertDate={item.insertDate}
            currentUserEmotion={item.currentUserEmotion}
          />
        )
        })}
        <AddComment comments={comments} id={id} title={title} />
    </div>
  )
}

export {AllComments}