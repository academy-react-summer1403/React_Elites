import React, { useEffect } from 'react'
import style from './style.module.css'
import { Title } from './Title'
import { Content } from './Content'
import { Footer } from './Footer'

import { identifier } from '../../../../../core/services/Functions/ThemeIdentifier'
const Comment = ({title, currentUserEmotion, id, describe, pictureAddress, author, disslikeCount, likeCount, insertDate, commentId}) => {

  
  return (
    <div className={style.comments} data-theme={identifier("darkSmall","dark2Small")}>
        <Title title={title} />
        <Content describe={describe} />
        <Footer currentUserEmotion={currentUserEmotion} id={id} commentId={commentId} insertDate={insertDate} disslikeCount={disslikeCount} likeCount={likeCount} author={author} pictureAddress={pictureAddress} />
    </div>
  )
}

export {Comment}