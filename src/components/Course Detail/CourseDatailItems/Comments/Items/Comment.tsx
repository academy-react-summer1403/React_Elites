import React, { useEffect } from 'react'
import style from './style.module.css'
import { Title } from './Title'
import { Content } from './Content'
import { Footer } from './Footer'
import { useGlobalState } from '../../../../../State/State'

const Comment = ({title, currentUserEmotion, id, describe, pictureAddress, author, disslikeCount, likeCount, insertDate, commentId}) => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  
  return (
    <div className={style.comments} data-theme={darkMode ? "darkSmall" : "lightMode"}>
        <Title title={title} />
        <Content describe={describe} />
        <Footer currentUserEmotion={currentUserEmotion} id={id} commentId={commentId} insertDate={insertDate} disslikeCount={disslikeCount} likeCount={likeCount} author={author} pictureAddress={pictureAddress} />
    </div>
  )
}

export {Comment}