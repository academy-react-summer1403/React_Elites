import React from 'react'
import style from './AllComments.module.css'
import { Comment } from '../Items/Comment'
import { useGlobalState } from '../../../../../State/State';
import { AddComment } from './AddComment/AddComment';

const AllComments = ({comments, id}) => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');

  return (
    <div className={style.container}>
      <div className={style.title} data-theme={darkMode ? "darkNoBG" : "lightMode"}> نظرات دانشجو ها و اساتید </div>
      {comments.slice(0,3).map((item, index) => {
        return(
          <Comment
            key={index}
            title={item.title}
            describe={item.describe}
            pictureAddress={item.pictureAddress}
            disslikeCount={item.disslikeCount}
            author={item.author}
            likeCount={item.likeCount}
            insertDate={item.insertDate}
          />
        )
        })}
        <AddComment comments={comments} id={id} />
    </div>
  )
}

export {AllComments}